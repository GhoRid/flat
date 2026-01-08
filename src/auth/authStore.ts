type AuthState = { token: string | null };

let state: AuthState = {
  token: localStorage.getItem("accessToken"),
};

const listeners = new Set<() => void>();

export const authStore = {
  getState() {
    return state;
  },
  isLoggedIn() {
    return Boolean(state.token);
  },
  setToken(token: string, keepLogin: boolean) {
    state = { token };
    // keepLogin true면 localStorage, 아니면 sessionStorage
    if (keepLogin) {
      localStorage.setItem("accessToken", token);
    } else {
      localStorage.removeItem("accessToken");
    }
    listeners.forEach((l) => l());
  },
  logout() {
    state = { token: null };
    localStorage.removeItem("accessToken");
    listeners.forEach((l) => l());
  },
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};

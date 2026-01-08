import { useMemo, useState } from "react";

type Values = {
  email: string;
  pw: string;
  pw2: string;
  name: string;
  phone: string;
  agree: boolean;
};

export function useSignUpForm() {
  const [values, setValues] = useState<Values>({
    email: "",
    pw: "",
    pw2: "",
    name: "",
    phone: "",
    agree: false,
  });

  const [ui, setUi] = useState({
    showPassword: false,
    showPassword2: false,
  });

  const pwRegex = useMemo(
    () => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{8,15}$/,
    []
  );

  const validity = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim());
    const pwOk = pwRegex.test(values.pw);
    const pw2Ok = values.pw2.length > 0 && values.pw === values.pw2;
    const nameOk = values.name.trim().length >= 2;
    const phoneOk = /^\d{10,11}$/.test(values.phone);
    const canSubmit =
      emailOk && pwOk && pw2Ok && nameOk && phoneOk && values.agree;

    return { emailOk, pwOk, pw2Ok, nameOk, phoneOk, canSubmit };
  }, [values, pwRegex]);

  function setValue<K extends keyof Values>(key: K, val: Values[K]) {
    setValues((prev) => ({ ...prev, [key]: val }));
  }

  function toggleAgree() {
    setValues((prev) => ({ ...prev, agree: !prev.agree }));
  }

  function toggleShowPassword() {
    setUi((p) => ({ ...p, showPassword: !p.showPassword }));
  }

  function toggleShowPassword2() {
    setUi((p) => ({ ...p, showPassword2: !p.showPassword2 }));
  }

  function onEmailDupCheck() {
    // TODO: 이메일 중복확인 API
    console.log("중복 확인:", values.email);
  }

  function onSendOtp() {
    // TODO: 인증번호 전송 API
    console.log("인증번호 전송:", values.phone);
  }

  function onSubmit() {
    if (!validity.canSubmit) return;
    // TODO: 회원가입 API
    console.log("회원가입:", values);
  }

  return {
    values,
    ui,
    validity,
    setValue,
    toggleAgree,
    toggleShowPassword,
    toggleShowPassword2: toggleShowPassword2,
    onEmailDupCheck,
    onSendOtp,
    onSubmit,
  };
}

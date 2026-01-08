import { useMemo, useState } from "react";

type Step = "EMAIL" | "VERIFY" | "RESET" | "DONE";

type State = {
  email: string;

  name: string;
  phone: string;
  otp: string;
  otpSent: boolean;
  otpVerified: boolean;

  pw: string;
  pw2: string;

  showPw: boolean;
  showPw2: boolean;
};

export function useFindPwFlow() {
  const [step, setStep] = useState<Step>("EMAIL");
  const [s, setS] = useState<State>({
    email: "",
    name: "",
    phone: "",
    otp: "",
    otpSent: false,
    otpVerified: false,
    pw: "",
    pw2: "",
    showPw: false,
    showPw2: false,
  });

  const pwRegex = useMemo(
    () => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{8,15}$/,
    []
  );

  const validity = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email.trim());

    const nameOk = s.name.trim().length >= 2;
    const phoneOk = /^\d{10,11}$/.test(s.phone);
    const otpOk = /^\d{6}$/.test(s.otp);

    const pwOk = pwRegex.test(s.pw);
    const pw2Ok = s.pw2.length > 0 && s.pw === s.pw2;

    const canNextFromEmail = emailOk;
    const canNextFromVerify = nameOk && phoneOk && s.otpVerified;
    const canConfirmReset = pwOk && pw2Ok;

    return {
      emailOk,
      nameOk,
      phoneOk,
      otpOk,
      pwOk,
      pw2Ok,
      canNextFromEmail,
      canNextFromVerify,
      canConfirmReset,
    };
  }, [s, pwRegex]);

  function setValue<K extends keyof State>(key: K, val: State[K]) {
    setS((prev) => {
      if (key === "phone") {
        const raw = String(val ?? "");
        const digitsOnly = raw.replace(/\D/g, "").slice(0, 11);
        return { ...prev, phone: digitsOnly };
      }

      return { ...prev, [key]: val };
    });
  }

  // STEP 1
  function onNextEmail() {
    if (!validity.canNextFromEmail) return;
    setStep("VERIFY");
  }

  // STEP 2
  function onSendOtp() {
    if (!validity.phoneOk) return;
    // TODO: 인증번호 전송 API (email, name, phone 함께 보내도 됨)
    console.log("OTP 전송:", { email: s.email, name: s.name, phone: s.phone });

    setS((prev) => ({
      ...prev,
      otpSent: true,
      otp: "",
      otpVerified: false,
    }));
  }

  function onVerifyOtp() {
    if (!validity.otpOk) return;
    // TODO: OTP 검증 API
    console.log("OTP 검증:", { phone: s.phone, otp: s.otp });

    setS((prev) => ({ ...prev, otpVerified: true }));
  }

  function onNextVerify() {
    if (!validity.canNextFromVerify) return;
    setStep("RESET");
  }

  // STEP 3
  function toggleShowPw() {
    setS((p) => ({ ...p, showPw: !p.showPw }));
  }
  function toggleShowPw2() {
    setS((p) => ({ ...p, showPw2: !p.showPw2 }));
  }

  function onConfirmReset() {
    if (!validity.canConfirmReset) return;
    // TODO: 비밀번호 변경 API (email + 인증정보 + new pw)
    console.log("비밀번호 변경:", { email: s.email, pw: s.pw });

    setStep("DONE");
  }

  // STEP 4
  function onGoLogin() {
    // TODO: 라우팅 이동 (예: navigate({to:'/login'}))
    console.log("로그인으로 이동");
  }

  return {
    step,
    s,
    validity,
    setValue,
    onNextEmail,
    onSendOtp,
    onVerifyOtp,
    onNextVerify,
    toggleShowPw,
    toggleShowPw2,
    onConfirmReset,
    onGoLogin,
  };
}

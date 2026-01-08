import { useMemo, useState } from "react";

type Values = {
  name: string;
  phone: string;
  otp: string;
  otpSent: boolean;
};

export function useFindIdForm() {
  const [values, setValues] = useState<Values>({
    name: "",
    phone: "",
    otp: "",
    otpSent: false,
  });

  const validity = useMemo(() => {
    const nameOk = values.name.trim().length >= 2;
    const phoneOk = /^\d{11}$/.test(values.phone);
    const otpOk = /^\d{6}$/.test(values.otp); // ✅ 6자리
    return { nameOk, phoneOk, otpOk };
  }, [values]);

  function setValue<K extends keyof Values>(key: K, val: Values[K]) {
    setValues((prev) => {
      if (key === "phone") {
        const raw = String(val ?? "");
        const digitsOnly = raw.replace(/\D/g, "").slice(0, 11);
        return { ...prev, phone: digitsOnly };
      }

      return { ...prev, [key]: val };
    });
  }

  function onSendOtp() {
    // TODO: 인증번호 전송 API
    console.log("아이디 찾기 - 인증번호 전송:", values.phone);

    // ✅ 전송하면 인증번호 입력칸 등장
    setValues((prev) => ({
      ...prev,
      otpSent: true,
      otp: "", // 재전송 시 초기화(원하면 제거)
    }));
  }

  function onVerifyOtp() {
    if (!validity.otpOk) return;
    // TODO: 인증번호 검증 API
    console.log("아이디 찾기 - 인증번호 검증:", values.otp);
  }

  return { values, validity, setValue, onSendOtp, onVerifyOtp };
}

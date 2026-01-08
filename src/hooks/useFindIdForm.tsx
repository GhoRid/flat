import { useMemo, useState } from "react";

type Values = {
  name: string;
  phone: string;
};

export function useFindIdForm() {
  const [values, setValues] = useState<Values>({
    name: "",
    phone: "",
  });

  const validity = useMemo(() => {
    const nameOk = values.name.trim().length >= 2;
    const phoneOk = /^\d{10,11}$/.test(values.phone);
    return { nameOk, phoneOk };
  }, [values]);

  function setValue<K extends keyof Values>(key: K, val: Values[K]) {
    setValues((prev) => ({ ...prev, [key]: val }));
  }

  function onSendOtp() {
    // TODO: 인증번호 전송 API
    console.log("아이디 찾기 - 인증번호 전송:", values);
  }

  return { values, validity, setValue, onSendOtp };
}

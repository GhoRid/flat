import NameSection from "../../-components/NameSection";
import PhoneSection from "../../-components/PhoneSection";
import { PrimaryButton, SubTitle } from "../../../../styles/loginUi";

export default function StepVerify({ flow }: { flow: any }) {
  return (
    <>
      <SubTitle>본인 인증</SubTitle>

      <NameSection
        name={flow.s.name}
        setName={(v: string) => flow.setValue("name", v)}
      />

      <PhoneSection
        phone={flow.s.phone}
        setPhone={(v: string) => flow.setValue("phone", v)}
        phoneOk={flow.validity.phoneOk}
        onSendOtp={flow.onSendOtp}
        otpSent={flow.s.otpSent}
        otp={flow.s.otp}
        setOtp={(v: string) => flow.setValue("otp", v)}
        otpOk={flow.validity.otpOk}
        onVerifyOtp={flow.onVerifyOtp}
      />

      <PrimaryButton
        disabled={!flow.validity.canNextFromVerify}
        onClick={flow.onNextVerify}
      >
        다음
      </PrimaryButton>
    </>
  );
}

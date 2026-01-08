import IdSection from "../../-components/IdSection";
import { PrimaryButton } from "../../../../styles/loginUi";

export default function StepEmail({ flow }: { flow: any }) {
  return (
    <>
      <IdSection
        email={flow.s.email}
        setEmail={(v) => flow.setValue("email", v)}
        emailOk={flow.validity.emailOk}
        onDupCheck={flow.onCheckEmailExist}
      />

      <PrimaryButton
        disabled={!flow.validity.canNextFromEmail}
        onClick={flow.onNextEmail}
      >
        다음
      </PrimaryButton>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Container, FormBox, Title, Wrapper } from "../../../styles/loginUi";
import useFindPwFlow from "../../../hooks/useFindPwFlow";
import StepEmail from "./-steps/StepEmail";
import StepVerify from "./-steps/StepVerify";
import StepReset from "./-steps/StepReset";
import StepDone from "./-steps/StepDone";

export const Route = createFileRoute("/_loginLayout/findPw/")({
  component: RouteComponent,
});

function RouteComponent() {
  const flow = useFindPwFlow();
  return (
    <Wrapper>
      <Container>
        {flow.step !== "DONE" ? <Title>비밀번호 재설정</Title> : null}

        <FormBox>
          {flow.step === "EMAIL" && <StepEmail flow={flow} />}
          {flow.step === "VERIFY" && <StepVerify flow={flow} />}
          {flow.step === "RESET" && <StepReset flow={flow} />}
          {flow.step === "DONE" && <StepDone onGoLogin={flow.onGoLogin} />}
        </FormBox>
      </Container>
    </Wrapper>
  );
}

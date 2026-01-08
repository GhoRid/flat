import { createFileRoute } from "@tanstack/react-router";
import {
  Container,
  FormBox,
  SubTitle,
  Title,
  Wrapper,
} from "../../../styles/loginUi";
import useFindIdForm from "../../../hooks/useFindIdForm";
import NameSection from "../-components/NameSection";
import PhoneSection from "../-components/PhoneSection";

export const Route = createFileRoute("/_loginLayout/findId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { values, validity, setValue, onSendOtp, onVerifyOtp } =
    useFindIdForm();

  return (
    <Wrapper>
      <Container>
        <Title>아이디 찾기</Title>

        <FormBox>
          <SubTitle>본인 인증</SubTitle>
          <NameSection
            name={values.name}
            setName={(v) => setValue("name", v)}
          />

          <PhoneSection
            phone={values.phone}
            setPhone={(v) => setValue("phone", v)}
            phoneOk={validity.phoneOk}
            onSendOtp={onSendOtp}
            otpSent={values.otpSent}
            otp={values.otp}
            setOtp={(v) => setValue("otp", v)}
            otpOk={validity.otpOk}
            onVerifyOtp={onVerifyOtp}
          />
        </FormBox>
      </Container>
    </Wrapper>
  );
}

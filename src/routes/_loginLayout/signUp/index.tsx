import { createFileRoute } from "@tanstack/react-router";
import { useSignUpForm } from "../../../hooks/useAuthInputForm";
import IdSection from "../-components/IdSection";
import PasswordSection from "../-components/PasswordSection";
import NameSection from "../-components/NameSection";
import PhoneSection from "../-components/PhoneSection";
import AgreeSection from "../-components/AgreeSection";
import {
  Wrapper,
  Container,
  FormBox,
  Title,
  SubmitButton,
} from "../../../styles/loginUi";

export const Route = createFileRoute("/_loginLayout/signUp/")({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    values,
    ui,
    validity,
    setValue,
    toggleAgree,
    toggleShowPassword,
    toggleShowPassword2,
    onEmailDupCheck,
    onSendOtp,
    onVerifyOtp,
    onSubmit,
  } = useSignUpForm();

  return (
    <Wrapper>
      <Container>
        <Title>플랫 회원가입</Title>

        <FormBox>
          <IdSection
            email={values.email}
            setEmail={(v) => setValue("email", v)}
            emailOk={validity.emailOk}
            onDupCheck={onEmailDupCheck}
          />

          <PasswordSection
            pw={values.pw}
            pw2={values.pw2}
            setPw={(v) => setValue("pw", v)}
            setPw2={(v) => setValue("pw2", v)}
            showPassword={ui.showPassword}
            showPassword2={ui.showPassword2}
            onTogglePassword={toggleShowPassword}
            onTogglePassword2={toggleShowPassword2}
          />

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

          <AgreeSection agree={values.agree} toggleAgree={toggleAgree} />

          <SubmitButton
            type="button"
            disabled={!validity.canSubmit}
            onClick={onSubmit}
          >
            가입하기
          </SubmitButton>
        </FormBox>

        {/* <SignUpFooter /> */}
      </Container>
    </Wrapper>
  );
}

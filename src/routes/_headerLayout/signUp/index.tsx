import { createFileRoute } from "@tanstack/react-router";
import { useSignUpForm } from "../../../hooks/useSignUpForm";
import IdSection from "./-components/IdSection";
import PasswordSection from "./-components/PasswordSection";
import NameSection from "./-components/NameSection";
import PhoneSection from "./-components/PhoneSection";
import AgreeSection from "./-components/AgreeSection";
import { Page, Container, FormBox, Title, SubmitButton } from "../styles/ui";

export const Route = createFileRoute("/_headerLayout/signUp/")({
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
    onSubmit,
  } = useSignUpForm();

  return (
    <Page>
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
    </Page>
  );
}

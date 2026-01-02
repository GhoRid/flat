import { createFileRoute } from "@tanstack/react-router";
import styled from "styled-components";
import LoginLogoSection from "./-components/LoginLogoSection";
import LoginForm from "./-components/LoginForm";
import LoginFooterLinks from "./-components/LoginFooterLinks";
import { colors } from "../../styles/colors";

export const Route = createFileRoute("/login/")({
  component: LoginPage,
});

type LoginPayload = {
  email: string;
  password: string;
  keepLogin: boolean;
};

function LoginPage() {
  const handleSubmit = async (payload: LoginPayload) => {
    // ✅ 여기서 API 연동 제어
    // try {
    //   const res = await loginApi(payload.email, payload.password, payload.keepLogin);
    //   // TODO: 토큰 저장 / 라우팅 이동 등
    // } catch (e) {
    //   // TODO: 에러 처리
    // }
    // console.log("submit payload:", payload);
  };

  return (
    <PageWrapper>
      <Card>
        <LoginLogoSection />
        <LoginForm onSubmit={handleSubmit} />
      </Card>
      <LoginFooterLinks />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`;

const Card = styled.div`
  width: 100%;
  max-width: 480px;
  border-radius: 10px;
  padding: 40px;
  background-color: ${colors.white};
  border: 1px solid ${colors.border_gray};

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

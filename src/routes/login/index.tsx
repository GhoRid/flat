import { createFileRoute } from "@tanstack/react-router";
import styled from "styled-components";
import type { FormEvent } from "react";
import LoginLogoSection from "./-components/LoginLogoSection";
import LoginForm from "./-components/LoginForm";
import LoginFooterLinks from "./-components/LoginFooterLinks";
import { colors } from "../../styles/colors";

export const Route = createFileRoute("/login/")({
  component: LoginPage,
});

function LoginPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: 로그인 API 연동
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
  gap: 40px;
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

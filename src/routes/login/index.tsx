import { createFileRoute } from "@tanstack/react-router";
import styled from "styled-components";
import type { FormEvent } from "react";
import LoginLogoSection from "./-components/LoginLogoSection";
import LoginForm from "./-components/LoginForm";
import LoginFooterLinks from "./-components/LoginFooterLinks";
import { colors } from "../../colors";

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
        <LoginFooterLinks />
      </Card>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  padding: 24px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 640px;
  background-color: ${colors.white};
  border-radius: 24px;
  padding: 64px 72px 40px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.04);
  border: 1px solid #f0f0f0;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media (max-width: 768px) {
    padding: 40px 24px 32px;
    border-radius: 16px;
  }
`;

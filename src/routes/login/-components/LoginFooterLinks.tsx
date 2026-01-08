import { Link } from "@tanstack/react-router";
import styled from "styled-components";

export default function LoginFooterLinks() {
  return (
    <BottomLinks>
      <BottomLink to="/reset-password">비밀번호 재설정</BottomLink>
      <Divider>|</Divider>
      <BottomLink to="/findId">아이디 찾기</BottomLink>
      <Divider>|</Divider>
      <BottomLink to="/signup">회원가입</BottomLink>
    </BottomLinks>
  );
}

const BottomLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: #9ca3af;
`;

const BottomLink = styled(Link)`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  font-size: inherit;
  color: inherit;

  &:hover {
    color: #6b7280;
  }
`;

const Divider = styled.span`
  color: #e5e7eb;
`;

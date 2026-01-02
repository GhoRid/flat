import styled from "styled-components";

export default function LoginFooterLinks() {
  return (
    <BottomLinks>
      <BottomLinkButton type="button">비밀번호 재설정</BottomLinkButton>
      <Divider>|</Divider>
      <BottomLinkButton type="button">아이디 찾기</BottomLinkButton>
      <Divider>|</Divider>
      <BottomLinkButton type="button">회원가입</BottomLinkButton>
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

const BottomLinkButton = styled.button`
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

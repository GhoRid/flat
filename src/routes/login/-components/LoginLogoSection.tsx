import styled from "styled-components";

export default function LoginLogoSection() {
  return (
    <LogoArea>
      {/* 실제 로고 이미지가 있다면 아래 주석을 풀고 사용하세요. */}
      {/* <LogoImage src={FlatLogo} alt="FLAT 로고" /> */}
      <LogoText>FLAT</LogoText>
      <LogoSubText>체대입시 원장을 위한 통합 관리 솔루션</LogoSubText>
    </LogoArea>
  );
}

const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
`;

const LogoText = styled.div`
  font-size: 40px;
  letter-spacing: 0.16em;
  font-weight: 700;
  margin-bottom: 16px;
`;

const LogoSubText = styled.p`
  font-size: 14px;
  color: #6b7280;
`;

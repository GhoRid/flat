import styled from "styled-components";
import FlatLogo from "@svgs/FlatLogo.svg?react";
import { colors } from "../../../styles/colors";

export default function LoginLogoSection() {
  return (
    <LogoArea>
      <FlatLogo />
      <LogoSubText>체대입시 원장을 위한 통합 관리 솔루션</LogoSubText>
    </LogoArea>
  );
}

const LogoArea = styled.div`
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const LogoSubText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.app_black};
`;

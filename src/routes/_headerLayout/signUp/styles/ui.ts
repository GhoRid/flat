import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const Page = styled.div`
  min-height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h1`
  margin: 10px 0;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: ${colors.app_black};
`;

export const FormBox = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.p`
  font-size: 16px;
  color: ${colors.app_black};
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 10px;
  height: 55px;
`;

export const Field = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 55px;
  border-radius: 10px;
  border: 1px solid #e9e9e9;
  background: #fff;
  padding: 12px 15px;
  font-size: 14px;
  color: ${colors.app_black};
  outline: none;

  &::placeholder {
    color: ${colors.placeholder_gray};
  }

  &:focus {
    border-color: #cfcfcf;
  }
`;

export const SideButton = styled.button`
  height: 100%;
  border-radius: 10px;
  border: 0;
  background: #f3f3f3;

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    /* opacity: 0.55; */
  }

  p {
    color: ${colors.app_black};
    font-size: 14px;
  }
`;

export const IconButton = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border: 0;
  background: transparent;
  cursor: pointer;
  display: grid;
  place-items: center;
  padding: 0;
`;

export const Helper = styled.div`
  font-size: 14px;
  color: ${colors.dark_gray};
`;

export const SubmitButton = styled.button`
  /* margin-top: 22px; */
  width: 100%;
  height: 64px;
  border-radius: 10px;
  border: 0;
  background: #f1f1f1;
  color: #111;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }
`;

export const Footer = styled.div`
  margin-top: 64px;
  text-align: center;
  font-size: 14px;
  color: #9a9a9a;
`;

export const AgreeRow = styled.div`
  margin-top: 25px;
`;

export const OptionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CheckboxLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
`;

// 보이는 체크박스 박스

export const StyledCheckbox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${colors.dark_gray};
  opacity: 0.5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  color: ${colors.dark_gray};

  svg {
    width: 20px;
    height: 20px;
    color: ${colors.dark_gray};
  }
`;

// 실제 체크 상태를 담당하는 input (화면에서는 숨김)
export const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${StyledCheckbox} {
    background: ${colors.dark_gray};
    border-color: ${colors.dark_gray};
    opacity: 1;
  }

  &:checked + ${StyledCheckbox} svg {
    opacity: 1;
    color: #ffffff;
  }

  &:focus-visible + ${StyledCheckbox} {
    outline: 2px solid #111827;
    outline-offset: 2px;
  }
`;

export const CheckboxText = styled.span`
  font-size: 14px;

  color: ${colors.app_black};
`;

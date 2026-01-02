import type { FormEvent } from "react";
import { colors } from "../../../styles/colors";
import styled from "styled-components";
import ShownHideIcon from "@svgs/ShownHide.svg?react";
import DeleteIcon from "@svgs/Delete.svg?react";
import CheckIcon from "@svgs/Check.svg?react";

type LoginFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export default function LoginForm({ onSubmit }: LoginFormProps) {
  return (
    <Form onSubmit={onSubmit}>
      <FieldGroup>
        <Label htmlFor="email">아이디</Label>
        <InputBox>
          <Input
            id="email"
            type="email"
            autoComplete="username"
            placeholder="이메일 주소를 입력해 주세요."
            required
          />
          <DeleteBox>
            <DeleteIcon />
          </DeleteBox>
        </InputBox>
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="password">비밀번호</Label>
        <InputBox>
          <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            autoComplete="current-password"
            required
          />
          <DeleteBox>
            <DeleteIcon />
          </DeleteBox>
          <PasswordToggle type="button" aria-label="비밀번호 보기">
            <ShownHideIcon />
          </PasswordToggle>
        </InputBox>
      </FieldGroup>

      <OptionsRow>
        <CheckboxLabel>
          <HiddenCheckbox type="checkbox" defaultChecked id="login" />
          <StyledCheckbox aria-hidden>
            <CheckIcon />
          </StyledCheckbox>
          <CheckboxText>로그인 상태 유지</CheckboxText>
        </CheckboxLabel>
      </OptionsRow>

      <SubmitButton type="submit">로그인</SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
`;

const DeleteBox = styled.div`
  width: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${colors.border_gray};
  opacity: 0.5;
  display: none;
  cursor: pointer;
`;

const InputBox = styled.div`
  width: 100%;
  height: 56px;
  padding: 12px 15px;
  border-radius: 10px;
  gap: 4px;
  border: 1px solid ${colors.border_gray};
  display: flex;
  align-items: center;

  &:focus-within ${DeleteBox} {
    display: block;
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #82888e;
  }
`;

const PasswordToggle = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
`;

const OptionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const CheckboxLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
`;

// 보이는 체크박스 박스
const StyledCheckbox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${colors.gray};
  opacity: 0.5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  color: ${colors.gray};

  svg {
    width: 20px;
    height: 20px;
    color: ${colors.gray};
  }
`;

// 실제 체크 상태를 담당하는 input (화면에서는 숨김)
const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${StyledCheckbox} {
    background: ${colors.gray};
    border-color: ${colors.gray};
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

const CheckboxText = styled.span`
  font-size: 14px;

  color: ${colors.app_black};
`;

const SubmitButton = styled.button`
  margin-top: 8px;
  width: 100%;
  height: 60px;
  border-radius: 16px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  background: #111827;
  color: #ffffff;
  cursor: pointer;
  transition:
    background-color 0.15s ease-out,
    transform 0.05s ease-out;

  &:hover {
    background-color: #000000;
  }

  &:active {
    transform: translateY(1px);
  }
`;

import type { FormEvent } from "react";
import styled from "styled-components";

type LoginFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export default function LoginForm({ onSubmit }: LoginFormProps) {
  return (
    <Form onSubmit={onSubmit}>
      <FieldGroup>
        <Label htmlFor="email">아이디</Label>
        <Input
          id="email"
          type="email"
          placeholder="이메일 주소를 입력해 주세요."
          required
        />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="password">비밀번호</Label>
        <PasswordWrapper>
          <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            required
          />
          <PasswordToggle type="button" aria-label="비밀번호 보기">
            {/* 아이콘은 나중에 SVG로 교체해 주세요. */}
            👁
          </PasswordToggle>
        </PasswordWrapper>
      </FieldGroup>

      <OptionsRow>
        <CheckboxLabel>
          <Checkbox type="checkbox" defaultChecked />
          <CheckboxVisual />
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
  gap: 24px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #111827;
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  font-size: 14px;
  outline: none;
  background-color: #f9fafb;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #111827;
    background-color: #ffffff;
  }
`;

const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
`;

const OptionsRow = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const CheckboxLabel = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

const CheckboxVisual = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  transition: all 0.15s ease-out;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background-color: #111827;
    transform: scale(0);
    transition: transform 0.15s ease-out;
  }

  ${Checkbox}:checked + & {
    border-color: #111827;

    &::before {
      transform: scale(1);
    }
  }
`;

const CheckboxText = styled.span`
  color: #111827;
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

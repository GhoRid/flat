import { useState, type FormEvent } from "react";
import { colors } from "../../../styles/colors";
import styled from "styled-components";
import ShownHideIcon from "@svgs/ShownHide.svg?react";
import HideIcon from "@svgs/hide.svg?react";
import DeleteIcon from "@svgs/Delete.svg?react";
import CheckIcon from "@svgs/Check.svg?react";

const ERROR_MESSAGES = {
  REQUIRED: "로그인 정보를 입력해 주세요.",
  INVALID: "아이디 또는 비밀번호가 일치하지 않습니다.",
  UNKNOWN: "로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
} as const;

type LoginFormProps = {
  onSubmit: (payload: {
    email: string;
    password: string;
    keepLogin: boolean;
  }) => void | Promise<void>;
};

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepLogin, setKeepLogin] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const validate = () => {
    const trimmedEmail = email.trim();

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
    const isPasswordValid = password.length >= 8;

    // 에러 메세지는 3가지로만 제한
    if (!trimmedEmail || !isEmailValid || !isPasswordValid) {
      setError(ERROR_MESSAGES.REQUIRED);
      return false;
    }

    setError(null);
    return true;
  };

  //   console.log(error);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await onSubmit({
        email: email.trim(),
        password,
        keepLogin,
      });
      setError(null);
    } catch (err: any) {
      const status =
        err?.status ??
        err?.response?.status ??
        err?.cause?.status ??
        err?.data?.status;

      // 인증 실패 케이스(서버가 401/403 등을 주는 경우)
      if (status === 401 || status === 403) {
        setError(ERROR_MESSAGES.INVALID);
        return;
      }

      setError(ERROR_MESSAGES.UNKNOWN);
    }
  };

  const clearEmail = () => {
    setEmail("");
    setError(null);
  };
  const clearPassword = () => {
    setPassword("");
    setError(null);
  };

  const trimmedEmail = email.trim();
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
  const isPasswordValid = password.length >= 8;

  const isSubmitDisabled =
    !!error || !trimmedEmail || !isEmailValid || !isPasswordValid;

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FieldGroup>
        <Label htmlFor="email">아이디</Label>
        <InputBox>
          <Input
            id="email"
            type="email"
            autoComplete="username"
            placeholder="이메일 주소를 입력해 주세요."
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(null);
            }}
          />
          <ClearButton
            as="button"
            type="button"
            aria-label="이메일 지우기"
            onClick={clearEmail}
          >
            <DeleteIcon />
          </ClearButton>
        </InputBox>
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="password">비밀번호</Label>
        <InputBox>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호를 입력해 주세요."
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(null);
            }}
          />
          <ClearButton
            type="button"
            aria-label="비밀번호 지우기"
            onClick={clearPassword}
          >
            <DeleteIcon />
          </ClearButton>

          <PasswordToggle
            type="button"
            aria-label="비밀번호 보기"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <ShownHideIcon /> : <HideIcon />}
          </PasswordToggle>
        </InputBox>
      </FieldGroup>

      <OptionsRow>
        <CheckboxLabel>
          <HiddenCheckbox
            id="keep-login"
            type="checkbox"
            checked={keepLogin}
            onChange={(e) => setKeepLogin(e.target.checked)}
          />
          <StyledCheckbox aria-hidden>
            <CheckIcon />
          </StyledCheckbox>
          <CheckboxText>로그인 상태 유지</CheckboxText>
        </CheckboxLabel>
      </OptionsRow>

      <ErrorRow>
        {!!error && (
          <p role="alert" style={{ color: "red", fontSize: "14px" }}>
            {error}
          </p>
        )}
      </ErrorRow>

      <SubmitButton type="submit" disabled={isSubmitDisabled}>
        로그인
      </SubmitButton>
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

const ClearButton = styled.button`
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${colors.gray};
  opacity: 0.5;
  display: none;
  cursor: pointer;

  &:hover {
    background-color: ${colors.dark_gray};
  }
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

  &:focus-within ${ClearButton} {
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
  min-width: 22px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
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
const HiddenCheckbox = styled.input`
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
  background: ${colors.main_color};
  color: ${colors.app_black};
  cursor: pointer;
  transition: background-color 0.15s ease-out;

  &:active {
  }

  &:disabled {
    background: ${colors.gray};
    color: ${colors.app_black};
    cursor: not-allowed;
  }
`;

const ErrorRow = styled.div`
  height: 20px;
  text-align: center;
  margin-top: 10px;

  p {
    color: ${colors.app_red};
    font-size: 14px;
  }
`;

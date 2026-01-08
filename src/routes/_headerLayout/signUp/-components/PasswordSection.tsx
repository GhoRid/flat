import { Field, IconButton, Input, Label, Section, Helper } from "../styles/ui";
import ShownHideIcon from "@svgs/ShownHide.svg?react";
import HideIcon from "@svgs/hide.svg?react";
import styled from "styled-components";

type Props = {
  pw: string;
  pw2: string;
  setPw: (v: string) => void;
  setPw2: (v: string) => void;
  showPassword: boolean;
  showPassword2: boolean;
  onTogglePassword: () => void;
  onTogglePassword2: () => void;
};

export default function PasswordSection({
  pw,
  pw2,
  setPw,
  setPw2,
  showPassword,
  showPassword2,
  onTogglePassword,
  onTogglePassword2: onTogglePw2,
}: Props) {
  return (
    <Section>
      <Label>비밀번호</Label>

      <PasswordBox>
        <Field>
          <Input
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="비밀번호를 입력해주세요."
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
          />
          <IconButton
            type="button"
            onClick={onTogglePassword}
            aria-label="비밀번호 보기"
          >
            {showPassword ? <ShownHideIcon /> : <HideIcon />}
          </IconButton>
        </Field>

        <Field>
          <Input
            value={pw2}
            onChange={(e) => setPw2(e.target.value)}
            placeholder="비밀번호 확인"
            type={showPassword2 ? "text" : "password"}
            autoComplete="new-password"
          />
          <IconButton
            type="button"
            onClick={onTogglePw2}
            aria-label="비밀번호 확인 보기"
          >
            {showPassword2 ? <ShownHideIcon /> : <HideIcon />}
          </IconButton>
        </Field>
      </PasswordBox>

      <Helper>영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15자리</Helper>
    </Section>
  );
}

const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

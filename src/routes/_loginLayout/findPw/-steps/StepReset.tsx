import {
  Field,
  Helper,
  IconButton,
  Input,
  Label,
  PrimaryButton,
  SubTitle,
} from "../../../../styles/loginUi";
import ShownHideIcon from "@svgs/ShownHide.svg?react";
import HideIcon from "@svgs/hide.svg?react";

export default function StepReset({ flow }: { flow: any }) {
  return (
    <>
      <SubTitle>새로운 비밀번호 입력</SubTitle>

      <Label>비밀번호</Label>

      <Field>
        <Input
          value={flow.s.pw}
          onChange={(e) => flow.setValue("pw", e.target.value)}
          placeholder="비밀번호를 입력해주세요."
          type={flow.s.showPw ? "text" : "password"}
          autoComplete="new-password"
        />
        <IconButton
          type="button"
          onClick={flow.toggleShowPw}
          aria-label="비밀번호 보기"
        >
          {flow.s.showPw ? <ShownHideIcon /> : <HideIcon />}
        </IconButton>
      </Field>

      <Field style={{ marginTop: 10 }}>
        <Input
          value={flow.s.pw2}
          onChange={(e) => flow.setValue("pw2", e.target.value)}
          placeholder="비밀번호 확인"
          type={flow.s.showPw2 ? "text" : "password"}
          autoComplete="new-password"
        />
        <IconButton
          type="button"
          onClick={flow.toggleShowPw2}
          aria-label="비밀번호 확인 보기"
        >
          {flow.s.showPw2 ? <ShownHideIcon /> : <HideIcon />}
        </IconButton>
      </Field>

      <Helper>영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15자리</Helper>

      <PrimaryButton
        disabled={!flow.validity.canConfirmReset}
        onClick={flow.onConfirmReset}
      >
        확인
      </PrimaryButton>
    </>
  );
}

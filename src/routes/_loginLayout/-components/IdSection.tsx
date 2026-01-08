import {
  Input,
  Label,
  Row,
  Section,
  SideButton,
} from "../../../styles/loginUi";

type Props = {
  email: string;
  setEmail: (v: string) => void;
  emailOk: boolean;
  onDupCheck: () => void;
};

export default function IdSection({
  email,
  setEmail,
  emailOk,
  onDupCheck,
}: Props) {
  return (
    <Section>
      <Label>아이디</Label>
      <Row>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일 주소 입력를 입력해주세요."
          inputMode="email"
          autoComplete="email"
        />
        <SideButton type="button" onClick={onDupCheck} disabled={!emailOk}>
          <p>중복 확인</p>
        </SideButton>
      </Row>
    </Section>
  );
}

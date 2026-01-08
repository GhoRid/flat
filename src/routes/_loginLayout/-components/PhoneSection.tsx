import {
  Input,
  Label,
  Row,
  Section,
  SideButton,
} from "../../../styles/loginUi";

type Props = {
  phone: string;
  setPhone: (v: string) => void;
  phoneOk: boolean;
  onSendOtp: () => void;
};

export default function PhoneSection({
  phone,
  setPhone,
  phoneOk,
  onSendOtp,
}: Props) {
  return (
    <Section>
      <Label>휴대폰 인증</Label>
      <Row>
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, ""))}
          placeholder="휴대폰 번호"
          inputMode="numeric"
          autoComplete="tel"
        />
        <SideButton type="button" onClick={onSendOtp} disabled={!phoneOk}>
          인증번호 전송
        </SideButton>
      </Row>
    </Section>
  );
}

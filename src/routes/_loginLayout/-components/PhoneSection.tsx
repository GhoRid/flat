import styled from "styled-components";
import {
  Input,
  Label,
  Row,
  Section,
  SideButton,
} from "../../../styles/loginUi";
import { formatPhone } from "../../../utils/format";

type Props = {
  phone: string;
  setPhone: (v: string) => void;
  phoneOk: boolean;
  onSendOtp: () => void;

  // ✅ 추가
  otpSent: boolean;
  otp: string;
  setOtp: (v: string) => void;
  otpOk: boolean;
  onVerifyOtp: () => void;
};

export default function PhoneSection({
  phone,
  setPhone,
  phoneOk,
  onSendOtp,
  otpSent,
  otp,
  setOtp,
  otpOk,
  onVerifyOtp,
}: Props) {
  return (
    <Section>
      <Label>휴대폰</Label>
      <Guide>가입시 등록한 휴대폰 번호를 입력해주세요.</Guide>

      <Box>
        <Row>
          <Input
            value={formatPhone(phone)}
            onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, ""))}
            placeholder="휴대폰 번호"
            inputMode="numeric"
            autoComplete="tel"
          />
          <SideButton type="button" onClick={onSendOtp} disabled={!phoneOk}>
            인증번호 전송
          </SideButton>
        </Row>

        {/* ✅ 전송 후에만 보이게 */}
        {otpSent && (
          <Row>
            <Input
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value.replace(/[^\d]/g, "").slice(0, 6))
              }
              placeholder="인증번호 6자리"
              inputMode="numeric"
              autoComplete="one-time-code"
            />
            <SideButton type="button" onClick={onVerifyOtp} disabled={!otpOk}>
              인증
            </SideButton>
          </Row>
        )}
      </Box>
    </Section>
  );
}

const Guide = styled.div`
  font-size: 14px;
  color: #9a9a9a;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

import styled from "styled-components";

export default function StepDone({ onGoLogin }: { onGoLogin: () => void }) {
  return (
    <DoneWrap>
      <Logo>FLAT</Logo>

      <Center>
        {/* <SuccessCheck /> */}
        <DoneTitle>비밀번호가 성공적으로 변경되었습니다.</DoneTitle>
        <DoneDesc>보안을 위해 다시 로그인해 주세요.</DoneDesc>
      </Center>

      {/* 필요 없으면 지워도 됨 */}
      <GoLogin type="button" onClick={onGoLogin}>
        로그인으로
      </GoLogin>
    </DoneWrap>
  );
}

const DoneWrap = styled.div`
  min-height: 520px;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  font-weight: 900;
  letter-spacing: 0.5px;
  font-size: 18px;
  color: #111;
`;

const Center = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
  text-align: center;
  gap: 12px;
  padding: 60px 0 40px;
`;

const DoneTitle = styled.div`
  font-size: 15px;
  font-weight: 800;
  color: #111;
`;

const DoneDesc = styled.div`
  font-size: 13px;
  color: #8f8f8f;
`;

const GoLogin = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 14px;
  border: 0;
  background: #f1f1f1;
  font-weight: 800;
  cursor: pointer;
`;

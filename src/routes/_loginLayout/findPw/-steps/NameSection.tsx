import { Input, Label } from "../../../../styles/loginUi";

export default function NameSection({
  name,
  setName,
}: {
  name: string;
  setName: (v: string) => void;
}) {
  return (
    <>
      <Label>이름</Label>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름을 입력해주세요."
        autoComplete="name"
      />
    </>
  );
}

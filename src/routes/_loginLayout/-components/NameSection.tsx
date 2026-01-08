import { Input, Label, Section } from "../../../styles/loginUi";

type Props = {
  name: string;
  setName: (v: string) => void;
};

export default function NameSection({ name, setName }: Props) {
  return (
    <Section>
      <Label>이름</Label>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름을 입력해주세요."
        autoComplete="name"
      />
    </Section>
  );
}

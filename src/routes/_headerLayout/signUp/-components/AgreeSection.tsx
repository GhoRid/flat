import {
  AgreeRow,
  CheckboxLabel,
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxText,
} from "../../styles/ui";
import CheckIcon from "@svgs/check.svg?react";

type Props = {
  agree: boolean;
  toggleAgree: () => void;
};

export default function AgreeSection({ agree, toggleAgree }: Props) {
  return (
    <AgreeRow>
      <CheckboxLabel>
        <HiddenCheckbox
          id="agree"
          type="checkbox"
          checked={agree}
          onChange={toggleAgree}
          aria-pressed={agree}
        />
        <StyledCheckbox aria-hidden>
          <CheckIcon />
        </StyledCheckbox>
        <CheckboxText>개인정보 어쩌고 동의</CheckboxText>
      </CheckboxLabel>
    </AgreeRow>
  );
}

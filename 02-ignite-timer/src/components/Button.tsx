import style from "./Button.module.css";
import { ButtonContainer } from "./Button.styles";

interface PropsButton {
  variant?: "primary" | "secondary" | "danger" | "success";
  text?: string;
}

export function Button({ variant = "primary", text = "default" }: PropsButton) {
  return <ButtonContainer variant={variant}>{text}</ButtonContainer>;
}

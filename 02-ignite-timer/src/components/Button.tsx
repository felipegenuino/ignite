import style from "./Button.module.css";

interface PropsButton {
  color?: "primary" | "secondary" | "danger" | "success";
}

export function Button({ color = "primary" }: PropsButton) {
  return <button className={`${style.button} ${style[color]}`}>Botão</button>;
}

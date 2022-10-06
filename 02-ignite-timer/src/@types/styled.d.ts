import 'styled-components'
import { defaultTheme } from '../styles/themes/default'
type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

// Language: typescript
// Path: 02-ignite-timer/src/components/Button.styles.ts
// Compare this snippet from 02-ignite-timer/src/components/Button.tsx:
// import { ButtonContainer } from "./Button.styles";
//
// interface ButtonProps {
//   variant?: ButtonVariant;
//   onClick?: () => void;
// }
//
// export const Button = ({ variant, onClick }: ButtonProps) => {
//   return <ButtonContainer variant={variant} onClick={onClick} />;
// };

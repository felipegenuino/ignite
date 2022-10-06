import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant?: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
  default: "gray",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${(props) => props.theme.colors.blueDark};
  color: ${(props) => props.theme.colors.text};

  width: 100px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

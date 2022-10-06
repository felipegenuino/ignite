import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" text="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="success" />
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

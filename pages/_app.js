import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;

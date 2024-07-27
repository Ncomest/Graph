import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { darkTheme, lightTheme, ThemeType } from "./helper/theme/theme";
import Header from "./modules/header/header";
import { useEffect } from "react";
import i18n from "./helper/i18next/i18n";

const Container = styled.div`
 background-color: ${({ theme }) => theme.background};
 color: ${({ theme }) => theme.text};
 height: 100vh;
 transition: all 0.3s linear;
`;

const App: React.FC = () => {
 const { t } = useTranslation();

 const themeMode = useSelector((state: RootState) => state.theme.value);
 const language = useSelector((state: RootState) => state.language.value);
 const theme: ThemeType = themeMode === "lightTheme" ? lightTheme : darkTheme;

 
 useEffect(() => {
  if (language) {
    i18n.changeLanguage(language);
  }
 }, [language]);

 return (
  <ThemeProvider theme={theme}>
   <Container>
    <Header />
    <div className="App">{t("welcome")} world</div>
   </Container>
  </ThemeProvider>
 );
};

export default App;

import { useEffect, useState } from "react";
import i18n from "../../helper/i18next/i18n";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setLanguage } from "../../features/language/languageSlice";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { CSSTransition } from "react-transition-group";

const Container = styled.div`
 height: 40px;
`;

interface ThemeContainer {
 istheme: string;
}

const SelectContainer = styled.div<ThemeContainer>`
 padding: 5px;
 border-radius: 5px;
 border: 1px solid black;
 text-transform: capitalize;
 cursor: pointer;
 display: flex;
 align-items: center;
 position: relative;
`;

interface SelectProps {
 isopen: boolean;
 istheme: string;
}

const Select = styled.div<SelectProps>`
 position: absolute;
 top: 110%;
 left: 0;
 border: 1px solid black;
 width: 100%;
 opacity: ${(props) => (props.isopen ? 1 : 0)};
 max-height: ${(props) => (props.isopen ? "200px" : "0")};
 overflow: hidden;
 transition: opacity 1.3s ease, max-height 1.3s ease;
 z-index: 1;
`;

const Arrow = styled.div`
 margin-left: 10px;
 font-size: 20px;
 display: flex;
 align-items: center;
`;

const Option = styled.div<ThemeContainer>`
 padding: 5px;
 cursor: pointer;

 &:hover {
  background: gray;
 }
`;

function ChooseLang() {
 const [isMenu, setIsMenu] = useState(false);
 const dispatch = useDispatch();
 const language = useSelector((state: RootState) => state.language.value);
 const theme = useSelector((state: RootState) => state.theme.value);

 const { t } = useTranslation();

 useEffect(() => {
  if (!language) {
   const userLang = navigator.language.split("-")[0];
   const supportedLanguages = ["en", "ru"];
   const defaultLang = supportedLanguages.includes(userLang) ? userLang : "en";
   dispatch(setLanguage(defaultLang));
   i18n.changeLanguage(defaultLang);
  } else {
   i18n.changeLanguage(language);
  }
 }, [dispatch, language]);

 const changeLang = (lang: string): void => {
  i18n.changeLanguage(lang);
  dispatch(setLanguage(lang));
  setIsMenu(false);
 };

 const handleShowMenu = (): void => {
  setIsMenu(!isMenu);
 };

 return (
  <Container>
   <SelectContainer onClick={handleShowMenu} istheme={theme}>
    {t("lang")}: {language.toUpperCase()}
    {isMenu ? (
     <Arrow>
      <IoMdArrowDropupCircle />
     </Arrow>
    ) : (
     <Arrow>
      <IoMdArrowDropdownCircle />
     </Arrow>
    )}
    <CSSTransition in={isMenu} timeout={400} mountOnEnter>
     <Select isopen={isMenu} istheme={theme}>
      <Option
       onClick={() => changeLang((i18n.language = "ru"))}
       istheme={theme}
      >
       RU
      </Option>
      <Option
       onClick={() => changeLang((i18n.language = "en"))}
       istheme={theme}
      >
       EN
      </Option>
     </Select>
    </CSSTransition>
   </SelectContainer>
  </Container>
 );
}

export default ChooseLang;

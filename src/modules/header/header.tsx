import React from "react";
import styled from "styled-components";
import ChooseLang from "../../components/choose_lang/chooseLang";
import ChooseTheme from "../../components/choose_theme/chooseTheme";
import ShowDate from "../../components/show_date/showDate";

const Container = styled.div`
 height: 80px;
 display: flex;
 align-items: center;
 justify-content: flex-end;
 padding: 0 20px;
 gap: 30px;
`;

const Header: React.FC = () => {
 return (
  <Container>
   <ShowDate />
   <ChooseLang />
   <ChooseTheme />
  </Container>
 );
};

export default Header;

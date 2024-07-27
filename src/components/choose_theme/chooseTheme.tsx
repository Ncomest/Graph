import styled from "styled-components";
import { RiMoonFill } from "react-icons/ri";
import { RiSunFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/theme/themeSlice";
import { RootState } from "../../app/store";
import { useState } from "react";

const Container = styled.div`
 display: flex;
`;

const ScrollContainer = styled.div`
 background-color: gray;
 width: 50px;
 height: 22px;
 margin: auto 5px;
 border-radius: 15px;
 border: 1px solid black;
 position: relative;
`;

interface ScrollProps {
 istheme: string;
}

const Scroll = styled.div<ScrollProps>`
 width: 18px;
 height: 18px;
 background-color: #363636;
 border: 1px solid black;
 border-radius: 50%;
 position: absolute;

 left: ${(props) => (props.istheme === "lightTheme" ? "2px" : "28px")};
 top: 1px;
`;

function ChooseTheme() {
 const theme = useSelector((state: RootState) => state.theme.value);
 const dispatch = useDispatch();

 const handleToggleTheme = (): void => {
  dispatch(toggleTheme());
 };
 return (
  <Container>
   <RiMoonFill size={30} onClick={handleToggleTheme} />
   <ScrollContainer onClick={handleToggleTheme}>
    <Scroll istheme={theme} />
   </ScrollContainer>
   <RiSunFill size={30} onClick={handleToggleTheme} />
  </Container>
 );
}

export default ChooseTheme;

import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Container = styled.div`
 text-transform: capitalize;
`;

function ShowDate() {
 const { t } = useTranslation();

 const getWeekNumber = (date: any) => {
  const startOfYear: any = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear: any = (date - startOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
 };

 const today = new Date();
 const weekNumber = getWeekNumber(today);

 return (
  <Container>
   {t("currentWeek")}: {weekNumber}
  </Container>
 );
}

export default ShowDate;

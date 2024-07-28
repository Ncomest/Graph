import React from "react";

function Main() {
 async function fetchData(url: string) {
  try {
   const response = await fetch(url);
   if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
   }
   const data = await response.json();
   return data;
  } catch (e) {
   console.log("Error", e);
   throw e;
  }
 }

 fetchData("https://sandbox.creos.me/api/v1/comment/")
  .then((data) => console.log("data", data))
  .catch((err) => console.log("Error fecth", err));

 return <div>M</div>;
}

export default Main;

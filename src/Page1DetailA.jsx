import { useLocation, useNavigate } from "react-router";
import React from "react";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const navigate = useNavigate();

  return (
    <>
      <h1>Page1DetailAページです</h1>
      <button onClick={() => navigate(-1)}>戻る</button>
    </>
  );
};

import React from "react";
import { Link, useNavigate } from "react-router";

export const Page1 = () => {
  const navigate = useNavigate();

  const arr = [...Array(100).keys()];
  console.log(arr);

  const handleNavigate = (path) => {
    navigate(path, {state: arr});
  };


  return (
    <>
      <h1>Page1ページです</h1>
      <button onClick={() => handleNavigate("/page1/detailA")}>DetailA</button>
      {/* <Link to = {{pathname: "/page1/detailA", state: arr}} >DetailA</Link> */}
      <br />
      <Link to="/page1/detailB">DetailB</Link>
    </>
  );
};

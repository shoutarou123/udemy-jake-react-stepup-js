import React from "react";
import { Link, useNavigate } from "react-router";

export const Page1 = () => {
  const navigate = useNavigate();

  const arr = [...Array(100).keys()];
  console.log(arr);

  const handleNavigate = (path) => {
    navigate(path, {state: arr});
  };

  const onClickDetailC = () => navigate("/page1/detailC"); // navigate() を使って遷移する


  return (
    <>
      <h1>Page1ページです</h1>
      <button onClick={() => handleNavigate("/page1/detailA")}>DetailA</button>
      {/* <Link to = {{pathname: "/page1/detailA", state: arr}} >DetailA</Link> */}
      {/* 上記の記述だとpathnameは渡せるが、stateはnullになってしまうためuseNavigateで対応した */}
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailC}>DetailC</button>
    </>
  );
};

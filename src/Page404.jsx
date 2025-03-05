import { Link } from "react-router";

export const Page404 = () => {
  return (
    <>
      <h1>ページが見つかりません</h1>
      <Link to="/">トップへ戻る</Link>
    </>
  );
};

import { useParams, useLocation } from "react-router";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search); // javascriptが準備しているURLSearchParams
  console.log(search);
  return (
    <>
      <h1>UrlParameterページです</h1>
      <p>パラメーターは{id}です</p>
      <p>クエリパラメーターは{query.get("name")}です</p> {/* URLSearchParamsの中のgetでurlのnameを取得*/}
    </>
  );
};

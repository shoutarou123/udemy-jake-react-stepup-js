import { Route, Routes } from "react-router";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1">
        <Route index element={<Page1 />} /> {/* /page1にアクセスしたときにPage1を表示 */}

        {/* page1Routes 配列を使用してルートを動的に作成 */}
        {page1Routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.children} />
        ))}
      </Route>

      <Route path="/page2">
        <Route index element={<Page2 />} />
          {page2Routes.map((route,index) => (
            <Route key={index} path={route.path} element={route.children} />
          ))}
      </Route>

       {/* 404ページ（任意のパスにマッチしたときに表示） */}
      <Route path="*" element={<Page404 />} />
      
    </Routes>
  );
};

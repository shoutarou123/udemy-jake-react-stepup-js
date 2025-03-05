import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: ":id", //:と書くことでurlパラメーターとして扱うということになる。idというのは任意の名称
    children: <UrlParameter />
  }
]
// 親コンポーネントであるRouterに、このコンポーネントが囲まれているため、このコンポーネントの子であるUrlParameterにidを渡すことができている。
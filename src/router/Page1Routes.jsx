import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Page1DetailC } from "../Page1DetailC";

export const page1Routes = [
  {
    path: "detailA",
    children: <Page1DetailA />,
  },
  {
    path: "detailB",
    children: <Page1DetailB />,
  },
  {
    path: "detailC",
    children: <Page1DetailC />,
  },
];

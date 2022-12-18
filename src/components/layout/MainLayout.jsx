import Header from "../Header";

import { Outlet } from "react-router-dom";

export default function MainLayout({ homeFunction }) {
  return (
    <>
      <Header homeFunction={homeFunction} />
      <Outlet />
    </>
  );
}

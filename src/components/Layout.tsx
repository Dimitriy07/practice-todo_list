import { PropsWithChildren } from "react";
import Header from "./Header";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="my-5 mx-20 border-solid border-x border-y border-zinc-200 rounded ">
      <Header />
      {children}
    </div>
  );
}

export default Layout;

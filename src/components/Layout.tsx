import { PropsWithChildren } from "react";
import Header from "./Header";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="my-5 mx-auto border-solid border-x border-y border-zinc-200  md:w-[50%] sm:w-[80%]">
      <Header />
      {children}
    </div>
  );
}

export default Layout;

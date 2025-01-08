import { PropsWithChildren } from "react";
import Header from "./Header";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="py-5 px-20">
      <Header />
      {children}
    </div>
  );
}

export default Layout;

import Logo from "./Logo";

function Header() {
  return (
    <div className="h-16 flex justify-start bg-ocean-800 text-ocean-0 items-center ">
      <Logo />
      <span className="font-bold ml-6 text-xl">TodoList</span>
      <div></div>
    </div>
  );
}

export default Header;

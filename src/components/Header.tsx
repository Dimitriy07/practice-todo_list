import Logo from "./Logo";

function Header() {
  return (
    <div className="flex justify-between bg-stone-">
      <Logo /> <span className="text-center">TodoList</span>
      <div></div>
    </div>
  );
}

export default Header;
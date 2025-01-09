import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type: "primary" | "secondary";
  onClick?: () => void;
}

function Button({ children, type, onClick }: ButtonProps) {
  const styles = {
    primary: "text-sm border text-ocean-100 bg-rosewood-900 hover:bg-coral-800",
    secondary: "",
  };

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

import styles from "./button.module.css";

type ButtonProps = {
  children: JSX.Element | string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export const Button = ({
  children,
  type = "button",
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

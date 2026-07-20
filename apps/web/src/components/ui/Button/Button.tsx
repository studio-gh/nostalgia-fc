import "./Button.module.css";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: Props) {
  return (
    <button className="nf-button" onClick={onClick}>
      {children}
    </button>
  );
}

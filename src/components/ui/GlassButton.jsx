import "./ui.css";

export default function GlassButton({children, className = "", onClick, ...props }) {
  return (
    <button className={`glass-button ${className}`}onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

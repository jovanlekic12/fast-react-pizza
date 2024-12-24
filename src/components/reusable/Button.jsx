function Button({ children, type, className, onClick }) {
  const baseClass = "button";
  const modifiedClass = type === "danger" ? "button-danger" : "button-action";
  return (
    <button className={`${baseClass} ${modifiedClass}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

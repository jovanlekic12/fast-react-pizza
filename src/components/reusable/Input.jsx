function Input({ type, placeholder, onChange, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required
      onChange={onChange}
      className={className}
    />
  );
}

export default Input;

function Input({ type, placeholder, onChange, className, name }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required
      onChange={onChange}
      className={className}
      name={name}
    />
  );
}

export default Input;

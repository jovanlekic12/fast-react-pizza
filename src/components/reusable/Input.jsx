function Input({ type, placeholder, onChange, className, name, value }) {
  return (
    <input
      defaultValue={value}
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

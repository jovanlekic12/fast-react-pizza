function Input({ type, placeholder, onChange }) {
  return (
    <input type={type} placeholder={placeholder} required onChange={onChange} />
  );
}

export default Input;

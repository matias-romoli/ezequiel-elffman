function Input(props: any) {
  return (
    <div className="input">
      <input
        type={props.type}
        name={props.name}
        autoComplete="off"
        value={props.value}
        onChange={props.change}
        placeholder={props.placeholder}
      />
      <label className="label">{props.label}</label>
    </div>
  );
}

export default Input;

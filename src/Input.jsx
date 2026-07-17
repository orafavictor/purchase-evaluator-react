function Input(props) {
  return (
    <div className="input-wrapper">
      {props.prefix && <span className="input-prefix">{props.prefix}</span>}
      
      <input 
        className="input-field"
        type={props.type} 
        name={props.name} 
        placeholder={props.placeholder} 
        value={props.value} 
        onChange={props.onChangeAction}
        min={props.min}
      />
    </div>
  );
}

export default Input;
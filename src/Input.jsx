function Input(props) {
    return (
        <input type="text" 
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChangeAction}
        />
    );
}

export default Input;
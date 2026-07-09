function Button(props) {
    return (
        <button onClick={props.onClickAction}>
            {props.children}
        </button>
    );
}

export default Button;
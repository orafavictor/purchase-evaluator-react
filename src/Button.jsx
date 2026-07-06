function Button(props) {
    return (
        <button onClick={props.ClickAction}>
            {props.children}
        </button>
    );
}

export default Button;
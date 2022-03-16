function Format(number) {
    let output = "R$"+number;
    return output;
}

export function Produto(props) {
    return (
        <div>
            {props.name} : {Format(props.price)}
        </div>
    );
}
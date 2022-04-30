function Format(number) {
    let output = "R$"+number;
    return output;
}

export function Produto(props) {
    return (
        <tr>
            {/* {props.name} : {Format(props.price)} */}
            <td className="Produto--nome">{props.nome}</td>
            <td className="Produto--preco">{props.preco && Format(props.preco)}</td>
        </tr>
    );
}
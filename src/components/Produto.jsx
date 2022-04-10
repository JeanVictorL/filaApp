function Format(number) {
    let output = "R$"+number;
    return output;
}

export function Produto(props) {
    return (
        <tr>
            {/* {props.name} : {Format(props.price)} */}
            <td className="Produto--nome">Nome do produto</td>
            <td className="Produto--preco">R$19,99</td>
        </tr>
    );
}
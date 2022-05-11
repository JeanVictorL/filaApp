import { Produto } from "./Produto";
import lista from "../files/ProdutosLista.js"

export function ContainerProduto() {
    const maxNum = 6;
    let produtos = lista.map(p => {
        return <Produto nome={p.nome} preco={p.preco} />
    })

    let display = [];
    let current = 0;
    for (let i = 0; i < maxNum; i++) {
        display.push(produtos[i]);
        current = (current + 1) % maxNum;
    }

    for (let i = display.length; i < maxNum; i++) {
        display.push(<Produto />)
    }
    console.log(display)

    return (
        <table className="container--produto">

            {display}

        </table>
    )
}
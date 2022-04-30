import { Produto } from "./Produto";
import lista from "../files/ProdutosLista.js"

export function ContainerProduto() {
    let produtos = lista.map(p => {
        return <Produto nome={p.nome} preco={p.preco} />
    })
    
    for (let i=produtos.length; i<6; i++) {
        produtos.push(<Produto />)
    }

    return (
        <table className="container--produto">

            {produtos}
            {/* <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto /> */}
        </table>
    )
}
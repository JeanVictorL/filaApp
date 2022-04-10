import { Produto } from "./Produto";

export function ContainerProduto() {
    return (
        <table className="container--produto">
            {/* divide resolution by int */}
            {/* fill with as many items as possible */}
            {/* give item props based on lists of products */}
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
        </table>
    )
}
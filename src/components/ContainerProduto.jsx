import React from "react";
import { Produto } from "./Produto";
import lista from "../files/ProdutosLista.js"

let allProducts = lista.map(p => {
    return <Produto nome={p.nome} preco={p.preco} key={p.nome} />
})

const maxNum = 6;
let cur = 0;

function newDisplay() {
    let curDisplay = [];
    for (let i = 0; i < maxNum; i++) {
        curDisplay.push(allProducts[cur])
        cur = (cur + 1) % allProducts.length;
    }
    return curDisplay;
}

export function ContainerProduto() {

    const [display, setDisplay] = React.useState([]);
    const [test, setTest] = React.useState(0);

    React.useEffect(() => {
        setDisplay(newDisplay());
    }, [test]);


    const handleKeyDown = (event) => {
        const keyName = event.key;

        if (keyName === "7") {
            setTest(prevState => prevState + 1)
        }
    }

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        return () => { window.removeEventListener('keydown', handleKeyDown) }
    })

    return (
        <table className="container--produto">
            <tbody>
                {display}
            </tbody>
        </table>
    )
}
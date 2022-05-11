import React from "react";

export function Senha() {
    const [senha, setSenha] = React.useState(0);

    function add() {
        setSenha(senha + 1)
    }

    function back() {
        setSenha(senha - 1)
    }

    const handleKeyDown = (event) => {
        const keyName = event.key;
        const keyC = event.keyCode;

        if (keyName === "0") {
            add();
        }
        if (keyName === "5") {
            back();
        }
    }

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        return () => { window.removeEventListener('keydown', handleKeyDown) }
    })

    return (
        <h1 className="senha">{senha}</h1>
    )
}
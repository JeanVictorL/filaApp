import { Produto } from "./components/Produto"
import './App.css'
import { ContainerProduto } from "./components/ContainerProduto"
import { Senhas } from "./components/ContainerSenha"

function App() {
  return (
    <div className="App">
      <ContainerProduto />
      {/* <Senhas /> */}
    </div>
  )
}



export default App
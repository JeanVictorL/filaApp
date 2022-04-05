import { Produto } from "./components/produto"
import test from "./components/BakImport.js"

function App() {
  return (
    <div>
      <Produto name="teste1" price="10"/>
    </div>
  )
}

text = test();
console.log(text);

export default App

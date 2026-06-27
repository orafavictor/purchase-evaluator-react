import { useState } from 'react'
import './App.css'

function App() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productUsage, setProductUsage] = useState("");
  const [costPerUse, setCostPerUse] = useState(0);

  const handleNameChange = (e) => {
    setProductName(e.target.value); 
  };
  const handlePriceChange = (e) => {
    setProductPrice(e.target.value); 
  };
  const handleUsageChange = (e) => {
    setProductUsage(e.target.value); 
  };

  const handleEvaluateButton = () => {
    const newProductPrice = Number(productPrice);
    const newProductUsage = Number(productUsage);

    const resultEvaluate = newProductPrice / newProductUsage;

    setCostPerUse(resultEvaluate);
  }

  return (
    <>
      <header>
        <h1>Avaliador de Compras</h1>
      </header>
      <main className='container'>
        <section id='dataArea'>
          <div>
            <h3>Nome do Produto</h3>
            <input 
              type="text" 
              name="product" 
              placeholder="digite o nome do produto"
              value={productName}
              onChange={handleNameChange}/>
          </div>
          <div>
            <h3>Preço do Produto</h3>
            <input 
              type="text" 
              name="price" 
              placeholder="digite o preço do produto" 
              value={productPrice}
              onChange={handlePriceChange}/>
          </div>
          <div>
            <h3>Estimativa de Uso</h3>
            <input 
            type="text" 
            name="usageEstimate" 
            placeholder="digite a estimativa de uso do produto"
            value={productUsage}
            onChange={handleUsageChange}/>
          </div>
          <div>
            <button name="button" onClick={handleEvaluateButton}>Avaliar Compra</button>
          </div>
        </section>
        <section id='resultArea'>
          <div>
            <h2>Veredito!</h2>
            <p>
              O produto xyz custará:<br />
              R$ resultado por uso.<br />
              Compre / não compre / Atenção<br />
            </p>
          </div>
          <div>
            <button name="button">
              Fazer nova avaliação
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productUsage, setProductUsage] = useState("");
  const [costPerUse, setCostPerUse] = useState(0);
  const [verdict, setVerdict] = useState("");
  const [showVerdict, setShowVerdict] = useState(false);

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

    if (resultEvaluate <= 50) {
      setVerdict("Compre sem medo!");
    } else if (resultEvaluate > 50 && resultEvaluate <= 100) {
      setVerdict("Atenção: Avalie bem a necessidade.");
    } else {
      setVerdict("Não compre! Está caro paro o uso!")
    }

    setCostPerUse(resultEvaluate);

    setShowVerdict(true);
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
        {showVerdict && (
        <section id='resultArea'>
          <div>
            <h2>Veredito!</h2>
            <p>
              O produto {productName} custará:<br />
              R$ {costPerUse} por uso.<br />
              {verdict}<br />
            </p>
          </div>
          <div>
            <button name="button">
              Fazer nova avaliação
            </button>
          </div>
        </section>
        )}
      </main>
    </>
  )
}

export default App

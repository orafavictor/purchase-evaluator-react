import { useState } from 'react'
import ProductForm from './ProductForm';
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
  };

  const handleResetButton = () => {
    setShowVerdict(false);

    setProductName("");
    setProductPrice("");
    setProductUsage("");
  }; 

  return (
    <>
      <header>
        <h1>Avaliador de Compras</h1>
      </header>
      <main className='container'>
        
        <ProductForm 
          productName={productName}
          onNameChange={handleNameChange}
          productPrice={productPrice}
          onPriceChange={handlePriceChange}
          productUsage={productUsage}
          onUsageChange={handleUsageChange}
          onEvaluate={handleEvaluateButton}
        />
        
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
            <button name="button" onClick={handleResetButton}>
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

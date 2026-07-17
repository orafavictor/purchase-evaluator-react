import Input from './Input';
import Button from './Button';

function ProductForm(props) {
  return (
    <section id='dataArea'>
      <div>
        <h3>Product Name</h3>
        <Input 
          type="text" 
          name="product" 
          placeholder="Enter the product name"
          value={props.productName}
          onChangeAction={props.onNameChange}
        />
      </div>
      
      <div>
        <h3>Product Price</h3>
          <Input
            type="number"
            name="price"
            placeholder="Ex: 50.00"
            value={props.productPrice}
            onChangeAction={props.onPriceChange}
            prefix="R$" 
            min="0"
          />
      </div>
      
      <div>
        <h3>Usage Estimate</h3>
        <Input 
          type="text" 
          name="usageEstimate" 
          placeholder="Enter the usage estimate"
          value={props.productUsage}
          onChangeAction={props.onUsageChange}
        />
      </div>
      
      <div>
        <Button onClickAction={props.onEvaluate}>
          Rate your purchase
        </Button>
      </div>
    </section>
  );
}

export default ProductForm;
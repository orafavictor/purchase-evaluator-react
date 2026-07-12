import Button from './Button';

function VerdictPanel(props) {
    return (
        <section id='resultArea'>
          <div>
            <h2>Veredito!</h2>
            <p>
              O produto {props.productName} custará:<br />
              R$ {props.costPerUse} por uso.<br />
              {props.verdict}<br />
            </p>
          </div>
          <div>
            <Button onClickAction={props.onReset}>
                New Avaliation
            </Button>
          </div>
        </section>
    );

}

export default VerdictPanel;
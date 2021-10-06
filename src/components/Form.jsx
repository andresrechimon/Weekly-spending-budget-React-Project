import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';


const Form = ({setExpen, setCreateExpen}) => {
    const [expenseName, setExpenseName] = useState('');
    const [expenseQuantity, setExpenseQuantity] = useState(0);
    const [error, setError] = useState(false);

    //When the user adds an expense
    const addExpense = e =>{
        e.preventDefault();

        //Validation
        if(expenseQuantity < 1 || isNaN(expenseQuantity) || expenseName.trim() === ""){
            setError(true);
            return;
        }
        setError(false);
        //Build the expense
        let expen = {
            expenseName,
            expenseQuantity,
            id: shortid.generate()
        }
        //Send expense to the main component
        setExpen(expen);
        setCreateExpen(true);
        //Form reset
        setExpenseName('');
        setExpenseQuantity(0);
    }

    return ( 
        <form
        onSubmit={addExpense}
        >
            <h2>Agrega tus gastos aquí</h2>

            {error ? <Error message="Ambos campos son ogligatorios/Presupuesto Incorrecto"/> : null}

            <div className="campo">
                <label>Detalles</label>
                <input 
                className="u-full-width"
                type="text" 
                placeholder="Ej. skins de CS:GO"
                value={expenseName}
                onChange={e => setExpenseName(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Importe</label>
                <input 
                className="u-full-width"
                type="number" 
                placeholder="Ej. $350"
                value={expenseQuantity}
                onChange={e => setExpenseQuantity(parseInt(e.target.value))}
                />
            </div>

            <input 
            className="button-primary u-full-width"
            type="submit"
            value="Agregar Gasto" 
            />
        </form>
    );
}

Form.propTypes = {
    setExpen: PropTypes.func.isRequired,
    setCreateExpen: PropTypes.func.isRequired
} 

 
export default Form;
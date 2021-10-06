import React, {Fragment, useState} from 'react';
import Error from "./Error";
import PropTypes from 'prop-types';

const Question = ({setBudget, setRemaining, setShowQuestion}) => {
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false);

    //Function that reads the especify budget
    const defineBudget = e => {
        setQuantity(parseInt(e.target.value))
    }

    //Submit for Budget 
    const addBudget = e => {
        e.preventDefault();

        //Validation
        if(quantity < 0.1 || isNaN(quantity)){
            setError(true);
            return;
        }
        
        //If validation success
        setError(false);
        setBudget(quantity);
        setRemaining(quantity);
        setShowQuestion(false);
    }

    return ( 
        <Fragment>
            <h2>Especifica tu Presupuesto</h2>
            {error ? <Error message="Prespuesto no válido" /> : null}
            <form
            onSubmit={addBudget}
            >
                <input
                className="u-full-width" 
                type="number" 
                placeholder="Su Presupuesto"
                onChange={defineBudget}
                />

                <input
                className="button-primary u-full-width" 
                type="submit" 
                value="Confirmar Presupuesto"
                />
            </form>
        </Fragment>
    );
}

Question.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setRemaining: PropTypes.func.isRequired,
    setShowQuestion: PropTypes.func.isRequired
} 
 
export default Question;
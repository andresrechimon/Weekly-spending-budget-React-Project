import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({expen}) => (  
    <li className="gastos">
        <p>
            {expen.expenseName}
            <span className="gasto"> ${expen.expenseQuantity}  </span>
        </p>
    </li>
);

Expense.propTypes = {
    expen: PropTypes.object.isRequired
} 

export default Expense;
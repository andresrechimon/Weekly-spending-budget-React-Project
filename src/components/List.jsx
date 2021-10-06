import React from 'react';
import Expense from './Expense';
import PropTypes from 'prop-types';

const List = ({listExpense}) => (  
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {listExpense.map(expen => (
            <Expense
            key={expen.id}
            expen={expen}
            ></Expense>
        ))}
    </div>
);

List.propTypes = {
    listExpense: PropTypes.array.isRequired
} 

export default List;
import React, {useState, useEffect} from 'react';
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import BudgetControl from "./components/BudgetControl";

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [listExpense, setListExpense] = useState([]);
  const [expen, setExpen] = useState({});
  const [createExpen, setCreateExpen] = useState(false);

  //Use Effect
  useEffect(() => {
    if(createExpen){
      //New Budget
      setListExpense([
        ...listExpense,
        expen
      ]);

      //Take from current Budget
      const remainingBudget = remaining - expen.expenseQuantity;
      setRemaining(remainingBudget);

      //Reset to false
      setCreateExpen(false);
    }
  }, [expen, createExpen, budget, remaining])

  return (
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>
          <div className="contenido-principal contenido">
            {showQuestion ? 
            (
              <Question
                setBudget={setBudget}
                setRemaining={setRemaining}
                setShowQuestion={setShowQuestion}
              ></Question>
            ) 
            : 
            (
              <div className="row">
              <div className="one-half column">
                <Form
                setExpen={setExpen}
                setCreateExpen={setCreateExpen}
                ></Form>
              </div>

              <div className="one-half column">
                <List
                listExpense={listExpense}
                ></List>

                <BudgetControl
                budget={budget}
                remaining={remaining}
                ></BudgetControl>
              </div>
              </div>
            )
            }
          </div>
        </header>
      </div>
  );
}

export default App;

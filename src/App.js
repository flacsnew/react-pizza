import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
  let [pizzas, setPizzas] = React.useState([]);
  // onMount
  React.useEffect(() => {
    fetch('https://62a96da03b3143855432f30f.mockapi.io/items')
      .then(response => response.json())
      .then(arr => { setPizzas(arr); });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((object) => <PizzaBlock key={object.id} {...object} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

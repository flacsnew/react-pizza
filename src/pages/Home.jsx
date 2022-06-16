import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Placeholder from '../components/PizzaBlock/placeholder';

const Home = () => {
    let [pizzas, setPizzas] = React.useState([]);
    let [isLoading, setLoading] = React.useState(true);
    // fields for sorted type
    const sortedMas = [
        'rating', 'price', 'title'
    ]

    // ==== Global Data ====
    // sorting, filter
    const [categoryId, setCategoryId] = React.useState(-1);
    const [typeSortingId, setTypeSortingId] = React.useState(0);
    // =====================

    // onMount
    React.useEffect(() => {
        let getCatId = '';    
        (categoryId === -1) ? getCatId = '' : getCatId = categoryId; // fix bug
        let params = new URLSearchParams({
            category: getCatId,
            sortBy: sortedMas[typeSortingId],
            order: 'asc'
        });
        fetch(`https://62a96da03b3143855432f30f.mockapi.io/items?` + params)
            .then(response => response.json())
            .then(arr => { setLoading(false); setPizzas(arr); });
    }, [categoryId, typeSortingId]);

    return (
        <>
            <div className="content__top">
                <Categories categoryId={categoryId} setCategoryId={setCategoryId}  />
                <Sort typeSortingId={typeSortingId} setTypeSortingId={setTypeSortingId} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [... new Array(10)].map((_, index) => <Placeholder key={index} />)
                        : pizzas.map((object) => <PizzaBlock key={object.id} {...object} />)
                }
            </div>
        </>
    );
}

export default Home;
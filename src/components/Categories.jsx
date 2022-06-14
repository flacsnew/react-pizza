import React from 'react';

const Categories = () => {
    const [catActiveId, setCatActiveId] = React.useState(0);
    const catNames = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые'
    ]
    const onCategoryClick = (id) => {
        setCatActiveId(id);
    }
    return (
        <div className="categories">
            <ul>
                {catNames.map((value, i) => {
                    return <li key={i} onClick={() => onCategoryClick(i)} className={(catActiveId === i) ? 'active' : ''}>{value}</li>
                })}
            </ul>
        </div>
    )
}

export default Categories;
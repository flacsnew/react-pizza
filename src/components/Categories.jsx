import React from 'react';

const Categories = ({ categoryId, setCategoryId }) => {
    const catNames = [
        //'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые'
    ]
    const onCategoryClick = (id) => {
        setCategoryId(id);
    }
    return (
        <div className="categories">
            <ul>
                <li key="-1" onClick={() => onCategoryClick(-1)} className={(categoryId === -1) ? 'active' : ''}>Все</li>
                {catNames.map((value, i) => {
                    return <li key={i} onClick={() => onCategoryClick(i)} className={(categoryId === i) ? 'active' : ''}>{value}</li>
                })}
            </ul>
        </div>
    )
}

export default Categories;
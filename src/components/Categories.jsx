import React from 'react';

const Categories = ({ categoryId, setCategoryId }) => {
    const catNames = [
        {id: -1, title: 'Все'},
        {id: 0, title: 'Мясные'},
        {id: 1, title: 'Вегетарианская'},
        {id: 2, title: 'Гриль'},
        {id: 3, title: 'Острые'},
        {id: 4, title: 'Закрытые'}
    ]
    const onCategoryClick = (id) => {
        setCategoryId(id);
    }
    return (
        <div className="categories">
            <ul>
                {catNames.map((value, i) => {
                    return <li key={value.id} onClick={() => onCategoryClick(value.id)} className={(categoryId === value.id) ? 'active' : ''}>{value.title}</li>
                })}
            </ul>
        </div>
    )
}

export default Categories;
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

    return (
        <div className="categories">
            <ul>
                {
                    catNames.map((cat, index) => {
                        let tmp = '';
                        if (catActiveId === index) { tmp = 'active' }
                        return <li key={index} onClick={() => setCatActiveId(index)} className={tmp}>{cat}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Categories;
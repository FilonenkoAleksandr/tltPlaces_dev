import React from 'react'
import c from './FirstPage.module.css'

const FirstPage = () => {
    return (
        <div className={c.FirstPage}>
            <h1>Добрый день</h1>
            <p>
                Это небольшой проект созданный исключительно для закрепления изученного материала,
                здесь реализовано добавление/удаление примечательных мест города тольятти из базы данных, а так
                же их просмотра.<br /><br />
                Проект создавался при помощи React + Redux, для навигации используется react-router-dom, 
                формы redux-form, бэк - firebase, запросы при помощи axios.
            </p>
        </div>
    )
}

export default FirstPage;
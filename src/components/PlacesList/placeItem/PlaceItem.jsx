import React from 'react'
import c from './PlacesItem.module.css'

const PlacesItem = props => {

    let text = props.text;

    if (props.text.length > 80) {
        text = props.text.slice(0, 60) + '...';
    }

    return (
        <a className={c.item} onClick={() => props.showModalFunc(props.id)}>
            <div>
                <div onClick={(e) => { e.stopPropagation(); props.deleteFunc(props.id) }} className={c.item_close}>X</div>
                <div className={c.item_image}>
                    <img src={props.img} className={c.item_image} alt="" />
                </div>
                <div className={c.item_title}>{props.name}</div>
                <div className={c.item_text}>{text}</div>
            </div>
            <div className={c.item_adress}>{props.adress}</div>
        </a>
    )
}

export default PlacesItem;
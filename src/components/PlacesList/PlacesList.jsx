import React from 'react'
import PlacesItem from './placeItem/PlaceItem'
import c from './PlacesList.module.css'

const PlacesList = props => {

    return (
        <div className={c.list}>
            {Object.keys(props.items).map(item => (
                <PlacesItem key={item} name={props.items[item].name}
                    id={item}
                    text={props.items[item].text}
                    adress={props.items[item].adress}
                    img={props.items[item].img ? props.items[item].img : "https://perila-don.ru/img/no_photo.png"}
                    deleteFunc={props.deleteFunc}
                    showModalFunc={props.showModalFunc}
                    />
            ))}
        </div>
    )
}

export default PlacesList;
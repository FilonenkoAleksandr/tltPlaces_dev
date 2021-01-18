import React from 'react'
import c from './Modal.module.css'

const Modal = props => {
    return (
        <div className={c.modal_wrapper} onClick={() => props.closeModal()}>
            <div className={c.modal_body} onClick={(e) => e.stopPropagation()}>
                <div className={c.modal_image}>
                    <img src={props.modalItem.img ? props.modalItem.img : "https://perila-don.ru/img/no_photo.png"} 
                    alt="" />
                </div>
                <div className={c.modal_title}>{props.modalItem.name}</div>
                <div className={c.modal_text}>{props.modalItem.text}</div>
                <div className={c.modal_adress}>{props.modalItem.adress}</div>
            </div>
        </div>
    )
}

export default Modal;
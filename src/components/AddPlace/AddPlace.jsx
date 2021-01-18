import React from 'react';
import { Field, reduxForm } from "redux-form";
import { ItemsAPI } from '../../api/api';
import c from './AddPlace.module.css'
import { required } from 'redux-form-validators'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && ((error && <span className={c.error_text}>{error}</span>) || (warning && <span className={c.error_text}>{warning}</span>))}
        </div>
    </div>
)

const renderFieldTextarea = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <div>
            <textarea {...input} placeholder={label} type={type} />
            {touched && ((error && <span className={c.error_text}>{error}</span>) || (warning && <span className={c.error_text}>{warning}</span>))}
        </div>
    </div>
)

const renderRaioError = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <div>
            <input {...input} placeholder={label} type={type} className={c.hidden} disabled />
            {touched && ((error && <span className={c.error_text}>{error}</span>) || (warning && <span className={c.error_text}>{warning}</span>))}
        </div>
    </div>
)

const AddForm = (props) => {
    return <div>
        <form className={c.fields} onSubmit={props.handleSubmit}>
            <div className={c.field_text}>
                <Field type="text" label="ссылка на фото (не обязательно)" name="img" component={renderField} />
            </div>
            <div className={c.field_text}>
                <Field validate={required({ message: 'Обязательно для заполнения' })} type="text" label="Название" name="name" component={renderField} />
            </div>
            <div className={c.field_text}>
                <Field validate={required({ message: 'Обязательно для заполнения' })} type="text" label="Информация" name="text" component={renderFieldTextarea} />
            </div>
            <div className={c.field_text}>
                <Field validate={required({ message: 'Обязательно для заполнения' })} type="text" label="Адрес" name="adress" component={renderField} />
            </div>
            <div className={c.field_radio}>
                <label><Field validate={required({ message: 'Обязательно для заполнения' })} name="placeType" component={'input'} type="radio" value="park" /> Парк</label>
                <label><Field validate={required({ message: 'Обязательно для заполнения' })} name="placeType" component={'input'} type="radio" value="nature" /> Природа</label>
                <label><Field validate={required({ message: 'Обязательно для заполнения' })} name="placeType" component={'input'} type="radio" value="arcitecture" /> Архитектура</label>
                <label><Field validate={required({ message: 'Обязательно для заполнения' })} name="placeType" component={'input'} type="radio" value="art" /> Исскуство</label>
                <Field validate={required({ message: 'Необходимо выбрать один из вариантов' })} name="placeType" type="radio" label="Адрес" value="none" component={renderRaioError} />
           </div>
            <div className={c.field_button}>
                <button>Добавить</button>
            </div>
        </form>
    </div>
}

const AddFormReduxForm = reduxForm({ form: 'login' })(AddForm)

class AddPlace extends React.Component {

    onSubmit = (formData, dispatch, props) => {
        let type = formData.placeType;
        let img = formData.img ? formData.img : false;
        let dataToSend = {
            'img': img,
            'name': formData.name,
            'text': formData.text,
            'adress': formData.adress,
        }

        dispatch(props.reset())

        ItemsAPI.addItems(type, dataToSend)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <AddFormReduxForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default AddPlace
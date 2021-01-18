import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://tlt-places.firebaseio.com/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    }
});

export const ItemsAPI = {

    getItems(placeType) {
        return instance.get(`${placeType}.json`)
    },

    deleteItem(type, id) {
        return instance.delete(`${type}/${id}.json`)
    },

    addItems(placeType, data) {
        return instance.post(`${placeType}.json`, {
            'name': data.name,
            'text': data.text,
            'adress': data.adress,
            'img': data.img
        })
    },
}


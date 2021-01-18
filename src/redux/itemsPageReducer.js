import { ItemsAPI } from "../api/api";

const SET_ITEMS = 'SET_ITEMS';
const DELETE_ITEMS = 'DELETE_ITEMS';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const SET_MODAL_INFO = 'SET_MODAL_INFO';
const DISABLE_LOADING = 'DISABLE_LOADING';
const ENABLE_LOADING = 'ENABLE_LOADING';

let initialState = {
	items: {},
	pageSize: 5,
	isModalOpen: false,
	modalItem: {
		name: '',
		text: '',
		img: '',
		adress: '',
	},
	isShowLoading: true,
};

const itemsPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ITEMS: {
			let items = action.items ? action.items : {}
			return { ...state, items: items }
		}
		case DELETE_ITEMS: {
			let newItems = Object.assign({}, state.items)
			delete newItems[action.id]
			return { ...state, items: newItems }
		}
		case OPEN_MODAL: {
			return { ...state, isModalOpen: true }
		}
		case SET_MODAL_INFO: {
			let newItems = Object.assign({}, state.items)

			return { ...state, modalItem: newItems[action.id] }
		}
		case CLOSE_MODAL: {
			return { ...state, isModalOpen: false }
		}
		case DISABLE_LOADING: {
			return { ...state, isShowLoading: false }
		}
		case ENABLE_LOADING: {
			return { ...state, isShowLoading: true }
		}
		default:
			return state;
	}
}

export const setItems = (items) => ({ type: SET_ITEMS, items })
export const deleteItemInState = (id) => ({ type: DELETE_ITEMS, id })
export const openModal = () => ({ type: OPEN_MODAL });
export const setItemToModal = (id) => ({ type: SET_MODAL_INFO, id });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const disableLoading = () => ({ type: DISABLE_LOADING });
export const enableLoading = () => ({ type: ENABLE_LOADING });

export const getItems = (placeType) => {

	return (dispatch) => {
		dispatch(enableLoading());
		
		ItemsAPI.getItems(placeType).then(data => {
			dispatch(setItems(data.data));
			dispatch(disableLoading());
		});
	}
}

export const deleteItem = (type, id) => {

	return (dispatch) => {

		ItemsAPI.deleteItem(type, id).then(data => {
			dispatch(deleteItemInState(id))
		})
	}
}

export const showModal = (id) => {

	return (dispatch) => {
		dispatch(openModal())
		dispatch(setItemToModal(id))
	}
}

export default itemsPageReducer;
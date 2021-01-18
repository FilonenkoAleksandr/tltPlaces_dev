import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { getItems, deleteItem, showModal, closeModal } from '../../redux/itemsPageReducer'
import Modal from './modal/Modal';
import PlacesList from './PlacesList';


class PlacesListContainer extends React.Component {
    componentDidMount() {
        this.props.getItems(this.props.placeType);
    }

    deleteItem(id) {
        this.props.deleteItem(this.props.placeType, id)
    }

    showModal(id) {
        this.props.showModal(id)
    }

    closeModal() {
        this.props.closeModal();
    }

    renderItems() {
        return (
            <div>
                {
                    Object.keys(this.props.items).length > 0
                        ? <PlacesList items={this.props.items}
                            deleteFunc={this.deleteItem.bind(this)}
                            showModalFunc={this.showModal.bind(this)}
                        />
                        : <p>В этой категории ничего нет. <NavLink to="/addNew" exact={true} className='simple-link'>Добавьте первое место</NavLink></p>
                }

                {
                    this.props.isModalOpen ? <Modal modalItem={this.props.modalItem} closeModal={this.closeModal.bind(this)} /> : null
                }
            </div>
        )
    }

    render() {
        return (
            <>
                { this.props.isShowLoading
                    ? <div>Loading</div>
                    : this.renderItems()}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        items: state.itemsPage.items,
        pageSize: state.itemsPage.pageSize,
        isModalOpen: state.itemsPage.isModalOpen,
        modalItem: state.itemsPage.modalItem,
        isShowLoading: state.itemsPage.isShowLoading,
    }
}

export default connect(mapStateToProps, { getItems, deleteItem, showModal, closeModal })(PlacesListContainer)
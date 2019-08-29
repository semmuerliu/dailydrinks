import React, { Component } from 'react';
import styles from './styles/editorder.module.scss';
import store from 'store2';

class EditOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let order;
        if (this.props.orderId) {
            order = store.session.get(this.props.orderId)
            console.log('EditOrder', order)
        }
        return (
            <div className={styles.editOrder}>
                <p>Edit An Order</p>
                <form onSubmit={this.props.handleEdit(this.props.orderId)}>
                    <input onChange={this.props.handleChange('name')} name='name' placeholder='Name'></input>
                    <input onChange={this.props.handleChange('price')} name='price' placeholder='Price'></input>
                    <input onChange={this.props.handleChange('remark')} name='remark' placeholder='Remark'></input>
                    <button type='submit'>Confirm</button>
                </form>
            </div>
        );
    }
}

export default EditOrder;
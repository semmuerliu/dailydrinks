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
            console.log(order)
        }
        return (
            <div className={styles.editOrder}>
                <form onSubmit={this.props.handleEdit}>
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
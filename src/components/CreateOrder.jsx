import React, { Component } from 'react';
import styles from './styles/createorder.module.scss';

class CreateOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className={styles.createOrder}>
                <p>Create An Order</p>
                <form onSubmit={this.props.handleSubmit}>
                    <input onChange={this.props.handleChange('name')} name='name' placeholder='Name'></input>
                    <input onChange={this.props.handleChange('price')} name='price' placeholder='Price'></input>
                    <input onChange={this.props.handleChange('remark')} name='remark' placeholder='Remark'></input>
                    <button type='submit'>Confirm</button>
                </form>
            </div>
        );
    }
}

export default CreateOrder;
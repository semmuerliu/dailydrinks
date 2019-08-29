import React, { Component } from 'react';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleEdit = (orderId) => {
        // console.log(store.session.set(orderId));
    }

    render() {
        return (
            <div>
                Order
            </div>
        );
    }
}

export default Order;
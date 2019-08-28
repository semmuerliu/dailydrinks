import React, { Component } from 'react';
import styles from './styles/orderlist.module.scss';

class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const renderOrders = this.props.orders.map((order, index) => {
            return (
                <div key={`order-${index}`}><a href={`/orders/${order.key}`}>{order.name}</a></div>
            );
        });
        return (
            <div className={styles.orderList}>
                {renderOrders}
            </div>
        );
    }
}

export default OrderList;
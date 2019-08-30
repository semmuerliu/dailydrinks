import React, { Component } from 'react';
import styles from './styles/orderlist.module.scss';
class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let renderOrders;
        if (this.props.orders) {
            renderOrders = this.props.orders.map((order, index) => {
                return (
                    <div className={styles.order} key={`order-${index}`}>
                        <p>{index + 1}. {order.name} ${order.price}</p>
                        <p>Remark: {order.remark ? order.remark : 'N/A'}</p>
                        <button onClick={this.props.handleForm(order.key)}>Edit</button>
                        <button onClick={this.props.handleDelete(order.key)}>Delete</button>
                    </div>
                );
            });
        }

        return (
            <div className={styles.orderList}>
                {renderOrders}
            </div>
        );
    }
}

export default OrderList;
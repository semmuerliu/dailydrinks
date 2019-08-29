import React, { Component } from 'react';
import styles from './styles/orderlist.module.scss';

class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.setState({
            orders: this.props.orders,
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.orders !== prevProps.orders) {
            this.setState({
                orders: this.props.orders,
            });
        }
    }

    handleRedirect = (orderId) => () => {
        this.props.history.push(`/${orderId}`);
    }

    render() {
        let renderOrders;
        if (this.state.orders) {
            renderOrders = this.state.orders.map((order, index) => {
                return (
                    <div className={styles.order} key={`order-${index}`}>
                        <a href={`/orders/${order.key}`}>{order.name} ${order.price}</a>
                        <button onClick={this.props.handleDelete(order.key)}>Delete</button>
                        <button onClick={this.handleRedirect(order.key)}>Edit</button>
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
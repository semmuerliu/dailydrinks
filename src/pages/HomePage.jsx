import React, { Component } from 'react';
import styles from './styles/homepage.module.scss';
import OrderList from '../components/OrderList';
import CreateOrder from '../components/CreateOrder';
import EditOrder from '../components/EditOrder';
import store from 'store2';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state ={
            // orders: orders,
        };
    }

    componentDidMount() {
        this.initialState();
    }

    initialState = () => {
        this.setState({
            orders: Object.keys(store.session.getAll()).map((key) => store.session.getAll()[key]),
        });
    };

    handleSubmit = (name) => async(e) => {
        e.preventDefault();
        const { order, orders } = this.state;
        await this.setState({
            order: {
                ...order,
                key: orders.length + 1,
                [name]: e.target.value,
            },
        });
        store.session(orders.length + 1 , order);
        this.setState({
            orders: [
                ...orders,
            ],
        });
    }

    handleDelete = (orderId) => async() => {
        await store.session.remove(orderId);
        const { orders } = this.state;
        this.setState({
            orders : [
                ...orders.filter((order) => {
                    return order.key !== orderId;
                })
            ],
        });
    }

    handleChange = (name) => (e) => {
        const { order, orders, orderId } = this.state;
        this.setState({
            ...orderId,
            order: {
                ...order,
                key: orders.length + 1,
                [name]: e.target.value,
            },
        });
    }

    handleEdit = (orderId) => async(e) => {
        e.preventDefault();
        await this.setState({
            orderId,
        });
        console.log('handleEdit', this.state);
        store.session.get(this.state.orderId);
        store.session.set(this.state.orderId, this.state.order);
    }

    render() {
        const { orders, orderId } = this.state;
        return (
            <div className={styles.homePage}>
                <OrderList
                    orders={orders}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                />
                <EditOrder
                    orderId={orderId}
                    handleChange={this.handleChange}
                    handleEdit={this.handleEdit}
                />
                <CreateOrder
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default Home;
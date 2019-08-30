import React, { Component } from 'react';
import styles from './styles/homepage.module.scss';
import OrderList from '../components/OrderList';
import CreateOrder from '../components/CreateOrder';
import EditOrder from '../components/EditOrder';
import store from 'store2';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
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

    handleSubmit = (e) => {
        e.preventDefault();
        const { order, orders } = this.state;
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
    handleForm = (orderId) => () => {
        this.setState({
            showForm: !this.state.showForm,
            orderId,
        });
    }

    handleChange = (name) => (e) => {
        const { order, orderId, orders } = this.state;
        this.setState({
            ...orderId,
            order: {
                ...order,
                key: orders.length + 1,
                [name]: e.target.value,
            },
        });
    }

    handleEdit = (e) => {
        e.preventDefault();
        const { orderId, order } = this.state;
        store.session.get(orderId);
        store.session.set(orderId, order);
        this.setState({
            orders: Object.keys(store.session.getAll()).map((key) => store.session.getAll()[key]),
            showForm: !this.state.showForm,
        });
    }

    render() {
        const { orders, orderId, showForm } = this.state;
        return (
            <div className={styles.homePage}>
                <OrderList
                    orders={orders}
                    handleDelete={this.handleDelete}
                    handleForm={this.handleForm}
                />
                {showForm ?
                    <EditOrder
                        orderId={orderId}
                        handleChange={this.handleChange}
                        handleEdit={this.handleEdit}
                    />
                : null}
                <CreateOrder
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default Home;
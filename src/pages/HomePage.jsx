import React, { Component } from 'react';
import styles from './styles/homepage.module.scss';
import OrderList from '../components/OrderList';
import store from 'store2';

// fake data
const orders = [
    {
        key: 1,
        name: 'Espresso Martini',
        price: 10,
        remark: '',
    },
    {
        key: 2,
        name: 'American Dream',
        price: 20,
        remark: '',

    },
    {
        key: 3,
        name: 'Bloody Mary',
        price: 8,
        remark: '',
    },
    {
        key: 4,
        name: 'Mojito',
        price: 15,
        remark: '',
    },
];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state ={
            orders: orders,
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

    handleChange = (name) => (e) => {
        const { order, orders } = this.state;
        this.setState({
            order: {
                ...order,
                key: orders.length + 1,
                [name]: e.target.value,
            },
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { order, orders } = this.state;
        this.setState({
            orders : [
                ...orders,
                order,
            ],
        });
        store.session(orders.length + 1 , order);
    }

    handleDelete = (orderId) => async() => {
        await store.remove(orderId);
        const { orders } = this.state;
        this.setState({
            orders : [
                ...orders.filter((order) => {
                    return order.key !== orderId;
                })
            ],
        });
    }

    render() {
        const { orders } = this.state;
        return (
            <div className={styles.homePage}>
                <OrderList
                    orders={orders}
                    handleDelete={this.handleDelete}
                    history={this.props.history}
                />

                <span/>

                <div className={styles.content}>
                    <p>Create An Order</p>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange('name')} name='name' placeholder='Name'></input>
                        <input onChange={this.handleChange('price')} name='price' placeholder='Price'></input>
                        <input onChange={this.handleChange('remark')} name='remark' placeholder='Remark'></input>
                        <button type='submit'>Confirm</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;
import React, { Component } from 'react';
import styles from './styles/homepage.module.scss';
import OrderList from '../components/OrderList';
import { initialDB } from '../helper';

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

let request = window.indexedDB.open('dailyDrinksDB', 1);
let db;
let objectStore;
class Home extends Component {
    constructor(props) {
        super(props);
        this.state ={
            orders: orders,
        };
    }

    async componentDidMount() {
        await initialDB(orders);
        this.getOrders();
    }

    // initialDB = () => {
    //     request.onerror = (e) => {
    //         console.log(e.target.errorCode);
    //     };

    //     request.onsuccess = (e) => {
    //         db = request.result;
    //         console.log(e.target);
    //     };

    //     request.onupgradeneeded = (e) => {
    //         db = e.target.result;
    //         if (!db.objectStoreNames.contains('orders')) {
    //             objectStore = db.createObjectStore('orders', { keyPath: 'key', autoIncrement: true });

    //             orders.forEach((order) => {
    //                 objectStore.add(order)
    //             });
    //         }
    //     }
    // }

    getOrders = () => {
        request.onerror = (e) => {
            console.log(e.target.errorCode);
        };

        request.onsuccess = (e) => {
            db = request.result;
            const transaction = db.transaction(["orders"], "readwrite");
            objectStore = transaction.objectStore("orders");
            objectStore.getAll().onsuccess = (e) => {
                // console.log(e.target.result);
                this.setState({
                    orders: e.target.result,
                });
            };
        };
    }

    handleChange = (name) => (e) => {
        this.setState({
            order: {
                ...this.state.order,
                [name]: e.target.value,
            },
        });

        request.onupgradeneeded = (e) => {
            db = e.target.result;
            if (!db.objectStoreNames.contains('orders')) {
                objectStore = db.createObjectStore('orders', { keyPath: 'key', autoIncrement: true });

                objectStore.add(this.state.order);
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            orders : [
                ...this.state.orders,
                this.state.order,
            ],
        });
    }

    handleDelete = (orderId) => {
    }

    handleEdit = () => {
    }

    render() {
        const { orders } = this.state;
        // console.log('this.state', this.state);
        return (
            <div className={styles.homePage}>
                <OrderList
                    orders={orders}
                    handleDelete={this.handleDelete}
                />
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
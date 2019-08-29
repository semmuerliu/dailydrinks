import React, { Component } from 'react';
import styles from './styles/homepage.module.scss';
import OrderList from '../components/OrderList';

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
        this.openDB();
    }

    openDB = () => {
        let request = window.indexedDB.open('dailyDrinksDB', 1);
        let db;
        let objectStore;

        request.onerror = (e) => {
            console.log(e.target.errorCode);
        };

        request.onsuccess = (e) => {
            db = request.result;
            console.log(e.target);
        };
        request.onupgradeneeded = (event) => {
            db = event.target.result;
            if (!db.objectStoreNames.contains('orders')) {
                objectStore = db.createObjectStore('orders', { keyPath: 'id', autoIncrement: true });

                orders.forEach((order) => {
                    objectStore.add(order)
                });
            }
        }
    }

    handleSubmit = (name) => (e) => {
        console.log(name);
        console.log(e.target.value);
        // this.setState({
        //     orders: 
        // });
    }

    deleteOrder = (orderId) => {
    }

    editOrder = () => {
    }

    render() {
        const { orders } = this.state;
        return (
            <div className={styles.homePage}>
                <OrderList
                    history={this.props.history}
                    orders={orders}
                    deleteOrder={this.deleteOrder}
                />
                <div className={styles.content}>
                    <p>Create An Order</p>
                    <input onChange={this.handleSubmit('name')} name='name' placeholder='Name'></input>
                    <input onChange={this.handleSubmit('price')} name='price' placeholder='Price'></input>
                    <input onChange={this.handleSubmit('remark')} name='remark' placeholder='Remark'></input>
                    <button>Confirm</button>
                </div>
            </div>
        );
    }
}

export default Home;
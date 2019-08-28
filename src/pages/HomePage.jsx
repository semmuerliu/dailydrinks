import React, { Component } from 'react';
import Banner from '../components/Banner';
import styles from './styles/homepage.modle.scss';
import OrderList from '../components/OrderList';

// fake data
const orders = [
    {
        key: 1,
        name: 'Espresso Martini'
    },
    {
        key: 2,
        name: 'American Dream'
    },
    {
        key: 3,
        name: 'Bloody Mary'
    },
    {
        key: 4,
        name: 'Mojito'
    },
];
class Home extends Component {
    constructor(props) {
        super(props);
        this.state ={
            orders: orders,
        };
    }

    getOrder = () => {
    }

    createOrder = () => {
    }

    deleteOrder = () => {
    }

    editOrder = () => {
    }

    render() {
        const { orders } = this.state;
        return (
            <div className={styles.homePage}>
                {/* <Banner/> */}
                <OrderList orders={orders}/>
                <div className='content'>
                    this is content
                </div>
            </div>
        );
    }
}

export default Home;
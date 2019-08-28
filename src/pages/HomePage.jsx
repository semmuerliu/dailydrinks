import React, { Component } from 'react';
import Banner from '../components/Banner';
import styles from './styles/homepage.module.scss';
import OrderList from '../components/OrderList';

// fake data
const orders = [
    {
        key: 1,
        name: 'Espresso Martini',
        price: 10,
    },
    {
        key: 2,
        name: 'American Dream',
        price: 20,
    },
    {
        key: 3,
        name: 'Bloody Mary',
        price: 8,
    },
    {
        key: 4,
        name: 'Mojito',
        price: 15,
    },
];
class Home extends Component {
    constructor(props) {
        super(props);
        this.state ={
            orders: orders,
        };
    }

    redirtect = () => {
        this.props.history.push(`/createorder`)
    }

    deleteOrder = () => {
    }

    editOrder = () => {
    }

    render() {
        const { orders } = this.state;
        return (
            <div className={styles.homePage}>
                <Banner/>
                <OrderList history={this.props.history} orders={orders}/>
                <button onClick={this.redirtect}>Create An New Order</button>

                <div className='content'>
                    this is content
                </div>

            </div>
        );
    }
}

export default Home;
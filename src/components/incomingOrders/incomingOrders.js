import React, { Component } from 'react';

import './incomingOrders.css';

class IncomingOrders extends Component {
  state = {
    orders: [
      {
        "meals": [
          {
            "name": "Meat Salad",
            "price": 1500,
            "qty": 1
          },
          {
            "name": "Semo and Ewedu",
            "price": 2500,
            "qty": 2
          },
          {
            "name": "Merrazazanni",
            "price": 2000,
            "qty": 1
          }
        ],
        "status": "pending",
        "_id": "5d1b18a795268db2988ecca0",
        "customerId": "5d0e08e1006f1b58600984bd",
        "customerName": "Ike Njoku",
        "amount": 8500,
        "createdAt": "2019-07-02T08:41:11.813Z",
        "updatedAt": "2019-07-02T08:41:11.813Z",
      },
      {
        "meals": [
          {
            "name": "Meat Salad",
            "price": 1500,
            "qty": 2
          },
          {
            "name": "Semo and Ewedu",
            "price": 2500,
            "qty": 1
          },
          {
            "name": "Merrazazanni",
            "price": 2000,
            "qty": 1
          }
        ],
        "status": "confirmed",
        "_id": "5d1b191695268db2988ecca1",
        "customerId": "5d0e08e1006f1b58600984bd",
        "customerName": "Ike Njoku",
        "amount": 7500,
        "createdAt": "2019-07-02T08:43:02.372Z",
        "updatedAt": "2019-07-02T08:43:02.372Z",
      },
      {
        "meals": [
          {
            "name": "Meat Salad",
            "price": 1500,
            "qty": 2
          },
          {
            "name": "Semo and Ewedu",
            "price": 2500,
            "qty": 1
          },
          {
            "name": "Merrazazanni",
            "price": 1000,
            "qty": 5
          }
        ],
        "status": "cancelled",
        "_id": "5d1b195495268db2988ecca2",
        "customerId": "5d0e08e1006f1b58600984bd",
        "customerName": "Ike Njoku",
        "amount": 15500,
        "createdAt": "2019-07-02T08:44:04.833Z",
        "updatedAt": "2019-07-02T08:44:04.833Z",
      },
      {
        "meals": [
          {
            "name": "Meat Salad",
            "price": 1500,
            "qty": 2
          },
          {
            "name": "Semo and Ewedu",
            "price": 2500,
            "qty": 1
          },
          {
            "name": "Merrazazanni",
            "price": 2000,
            "qty": 5
          }
        ],
        "status": "completed",
        "_id": "5d1b1a51375255b372debf77",
        "customerId": "5d0e08e1006f1b58600984bd",
        "customerName": "Ike Njoku",
        "amount": 15500,
        "createdAt": "2019-07-02T08:48:17.280Z",
        "updatedAt": "2019-07-02T08:48:17.280Z",
      },
      {
        "meals": [
          {
            "name": "Meat Salad",
            "price": 1500,
            "qty": 2
          },
          {
            "name": "Semo and Ewedu",
            "price": 2500,
            "qty": 1
          },
          {
            "name": "Merrazazanni",
            "price": 2000,
            "qty": 5
          }
        ],
        "status": "pending",
        "_id": "5d1b1a88375255b372debf78",
        "customerId": "5d0e08e1006f1b58600984bd",
        "customerName": "Ike Njoku",
        "amount": 15500,
        "createdAt": "2019-07-02T08:49:12.403Z",
        "updatedAt": "2019-07-02T08:49:12.403Z",
      },
      {
        "meals": [
          {
            "name": "Meat Salad",
            "price": 1500,
            "qty": 2
          },
          {
            "name": "Semo and Ewedu",
            "price": 2500,
            "qty": 1
          },
          {
            "name": "Merrazazanni",
            "price": 2000,
            "qty": 5
          }
        ],
        "status": "pending",
        "_id": "5d1b1ad1375255b372debf79",
        "customerId": "5d0e08e1006f1b58600984bd",
        "customerName": "Ike Njoku",
        "amount": 15500,
        "createdAt": "2019-07-02T08:50:25.468Z",
        "updatedAt": "2019-07-02T08:50:25.468Z",
      },
      {
        "meals": [
          {
            "name": "Meat Salad",
            "price": 1500,
            "qty": 2
          },
          {
            "name": "Semo and Ewedu",
            "price": 2500,
            "qty": 1
          },
          {
            "name": "Merrazazanni",
            "price": 2000,
            "qty": 5
          }
        ],
        "status": "pending",
        "_id": "5d1b20ae57e74cb6188334b6",
        "customerId": "5d1b1e568d3087b54a1b5619",
        "customerName": "Ike Njoku",
        "amount": 15500,
        "createdAt": "2019-07-02T09:15:26.954Z",
        "updatedAt": "2019-07-02T09:15:26.954Z",
      },
      {
        "meals": [
          {
            "name": "Meat Salad",
            "price": 1500,
            "qty": 3
          },
          {
            "name": "Semo and Ewedu",
            "price": 2500,
            "qty": 1
          },
          {
            "name": "Merrazazanni",
            "price": 2000,
            "qty": 1
          }
        ],
        "status": "pending",
        "_id": "5d1b20d457e74cb6188334b7",
        "customerId": "5d1b1e568d3087b54a1b5619",
        "customerName": "Ike Njoku",
        "amount": 9000,
        "createdAt": "2019-07-02T09:16:04.113Z",
        "updatedAt": "2019-07-02T09:16:04.113Z",
      },
      {
        "meals": [
          {
            "name": "Meat Salad",
            "price": 1500,
            "qty": 2
          },
          {
            "name": "Semo and Ewedu",
            "price": 2500,
            "qty": 1
          },
          {
            "name": "Merrazazanni",
            "price": 2000,
            "qty": 5
          }
        ],
        "status": "completed",
        "_id": "5d1b24481944b7b7591d39db",
        "customerId": "5d0e08e1006f1b58600984bd",
        "customerName": "Ike Njoku",
        "amount": 15500,
        "createdAt": "2019-07-02T09:30:48.731Z",
        "updatedAt": "2019-07-02T12:11:45.490Z",
      }
    ]
  }
  render() {
    const { orders } = this.state;
    const pendingOrder = orders[0];
    return (
      <div className="orders-container">
      <p className="page-title">Incoming Orders</p>
        <div className="contain-order">
          <div className="order-box">
            <p>{pendingOrder.customerName}</p>
            <p>08086082224</p>
          </div>
          <div style={{ margin: '0px auto' }}>
              {
                pendingOrder.meals.map((meal, index) => (
                  <div key={index}>
                    <p><span><strong>{meal.qty}</strong>  {meal.name}</span></p>
                  </div>
                ))
              }
          </div>
          <div className="order-box">
            <p>&#8358; {pendingOrder.amount}</p>
          </div>
          <div className="order-box">
            <p>{pendingOrder.status}</p>
          </div>
          <div className="contain-pending-buttons">
            <button className="action-btn">Confirm</button>
            <button className="action-btn">Cancel</button>
          </div>
        </div>

        <div className="contain-order">
          <div className="order-box">
            <p>{pendingOrder.customerName}</p>
            <p>08086082224</p>
          </div>
          <div style={{ margin: '0px auto' }}>
              {
                pendingOrder.meals.map((meal, index) => (
                  <div key={index}>
                    <p><span><strong>{meal.qty}</strong>  {meal.name}</span></p>
                  </div>
                ))
              }
          </div>
          <div className="order-box">
            <p>&#8358; {pendingOrder.amount}</p>
          </div>
          <div className="order-box">
            <p>{pendingOrder.status}</p>
          </div>
          <div className="contain-pending-buttons">
            <button className="action-btn">Complete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default IncomingOrders;

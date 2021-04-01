import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import './Admin.css';

class Admin extends React.Component {
  state = {
    users: [],
    total: 0.0,
  };

  fetchDailySales = async () => {
    const response = await fetch(`user/report`);
    const items = await response.json();
    this.setState({ users: items });
  };

  updateDailyTotal = async () => {
    this.state.users.map((orders) =>
      orders.map((order) =>
        order.map((details) =>
          this.setState({ total: this.state.total + details.Totals.grandTotal })
        )
      )
    );
  };

  async componentDidMount() {
    await this.fetchDailySales();
    await this.updateDailyTotal();
  }

  renderDailyReport = () => {
    return (
      <div>
        <Container className="container-style">
          <Row md={24}>
            <Table className="price-breakdown-table ">
              <thead className="table-header-styles">
                <tr>
                  <th className="text-left">Order Id</th>
                  <th className="text-left"> Date</th>
                  <th className="text-left"> Food items</th>
                  <th className="text-left"> Quantity</th>
                  <th className="text-center"> Total Price</th>
                </tr>
              </thead>
              <tbody className="table-body-styles">
                {this.state.users.map((orders) =>
                  orders.map((order) =>
                    order.map((details) => {
                      return (
                        <tr>
                          <td className="text-left table-body-styles">
                            <h4>{details.OrderInfo.orderID}</h4>
                          </td>
                          <td className="text-left">
                            <h4>{String(new Date(details.OrderInfo.orderTime._seconds * 1000))}</h4>
                          </td>
                          <td className="text-left">
                            {details.Items.map((items) => {
                              return <h4>{items.caption}</h4>;
                            })}
                          </td>
                          <td className="text-left">
                            {details.Items.map((items) => {
                              return <h4> x {items.quantity}</h4>;
                            })}
                          </td>
                          <td className="text-center">${details.Totals.grandTotal}</td>
                        </tr>
                      );
                    })
                  )
                )}
                <tr>
                  <td colSpan={5}>
                    <hr className="table-divider" />
                  </td>
                </tr>
                <tr className="daily-total-style">
                  <td className="text-left daily-total-style" colSpan={4}>
                    <h3>Daily Total:</h3>
                  </td>
                  <td className="text-center daily-total-style">
                    <h3>${this.state.total.toFixed(2)}</h3>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    );
  };

  render() {
    return (
      <>
        <div>{this.renderDailyReport()}</div>
      </>
    );
  }
}

export default Admin;

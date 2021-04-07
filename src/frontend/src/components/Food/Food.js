import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import FoodCategories from './FoodCategories';
import FoodCard from './FoodCard';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchBar/SearchResults';

class Food extends Component {
  // states used to store and retreive data
  state = { category: '', cart: [], searchField: '', items: [], searchLength: 0 };

  // onClick handler for each category
  onCategoryClick = (category) => {
    this.setState({ category: category });
  };

  // onClick handler for adding/updating items to cart
  onAddToCart = async (cart) => {
    this.setState({ cart: cart });
    await this.props.receiveCart(this.state.cart);
  };

  // Searchbar handler for receiving searched items
  receiveItemsFromSearchResults = (itemsReceived) => {
    this.setState({ items: itemsReceived });
  };

  // Searchbar handler for updating search query
  handleChangeSearch = (e) => {
    this.setState({
      searchField: e.target.value,
      searchLength: e.target.value.length,
    });
  };

  // Searchbar 'x' reset handler for clearing the states used in searchbar
  handleResetSearch = () => {
    this.setState({ searchField: '', searchLength: 0 });
  };

  render() {
    const { items, searchField } = this.state;
    const filteredItems = items.filter((itemsArr) =>
      itemsArr.caption.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <>
        <Container fluid>
          <SearchBar
            handleChangeSearch={(e) => this.handleChangeSearch(e)}
            searchLength={this.state.searchLength}
            handleResetSearch={this.handleResetSearch}
            formValue={this.state.searchField}
          />
          <br />
          {this.state.searchLength < 3 ? (
            <Row>
              <Col xs={3}>
                <FoodCategories onCategoryClick={this.onCategoryClick} />
              </Col>
              <Col xs={6}>
                <FoodCard
                  category={this.state.category}
                  onAddToCart={this.onAddToCart}
                  updatedCart={this.props.updatedCart}
                />
              </Col>
            </Row>
          ) : (
            <SearchResults
              receiveItemsFromSearchResults={this.receiveItemsFromSearchResults}
              onAddToCart={this.onAddToCart}
              updatedCart={this.props.updatedCart}
              filteredItems={filteredItems}
            />
          )}
        </Container>
      </>
    );
  }
}

export default Food;

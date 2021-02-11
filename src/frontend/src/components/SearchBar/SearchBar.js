import React, { Component } from 'react';
import { Col, Row, Form, InputGroup } from 'react-bootstrap';
import { Search, XCircleFill } from 'react-bootstrap-icons';
import './SearchBar.css';

class SearchBar extends Component {
  renderSearchForm = () => {
    return (
      <>
        <Form.Group>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <Search />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="textarea"
              value={this.props.formValue}
              placeholder="Find your fave..."
              onChange={this.props.handleChangeSearch}
            />
            <InputGroup.Append>
              <InputGroup.Text
                onClick={() => {
                  if (this.props.searchLength > 0) {
                    this.props.handleResetSearch();
                  }
                }}
              >
                <XCircleFill />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </>
    );
  };

  render() {
    return (
      <Row>
        <Col xs={1} md={3} className="search-form">
          {this.renderSearchForm()}
        </Col>
      </Row>
    );
  }
}

export default SearchBar;

import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemInput extends Component {
  state = {
    name: ""
  };

  onCng = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    };
    // Add item via addItem action
    this.props.addItem(newItem);
  };

  render() {
    return (
      <div className="list_Header">
        <h2>Shopping list</h2>
        <InputGroup>
          <Input
            type="text"
            name="name"
            id="item"
            placeholder="Write here"
            onChange={this.onCng}
          />
          <InputGroupAddon addonType="append">
            <Button className="addBtn" onClick={this.onSubmit}>
              Add Item
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemInput);

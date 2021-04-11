import React, { Component } from 'react'
import { FormGroup, Input, Row, } from 'reactstrap';

class SearchBar extends Component {
  render() {
    return (
      <Row className="justify-content-center">
        <div className="col-10 col-md-6 mx-auto text-center">
          <FormGroup>
            <Input type="search" id="ing1" rows="1" placeholder="Type An Ingredient" autoFocus="autofocus" autoComplete="off" className="form-control ingInput typeahead"/>
          </FormGroup>
        </div>
      </Row>

    )
  }
}

export default SearchBar
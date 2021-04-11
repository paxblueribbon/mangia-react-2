import React from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, } from 'reactstrap';
import { affinOpen, toggleAffinityModal } from '../modalSlice'
import { useDispatch, useSelector } from 'react-redux';

function AffinityModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector(affinOpen);

    return (
      <Modal isOpen={isOpen} toggle={() => dispatch(toggleAffinityModal())}>
      <ModalHeader>
          <h5 className="modal-title" id="exampleModalLabel">New Ingredient Affinity</h5>
          <Button data-dismiss="modal" onClick={() => dispatch(toggleAffinityModal())} aria-label="Close" className="close">
            <span aria-hidden="true">&#xD7;</span>
          </Button>
        </ModalHeader>
        <ModalBody>
          <div className="container-fluid">
            <Form>
              <FormGroup>
                <Row>
                  <div className="col-12">
                    <Label for="mainIngName" className="col-form-label">Main Ingredient:</Label>
                  </div>
                </Row>
                <Row>
                  <div className="col-12">
                    <Input readOnly type="text" id="mainIngName"></Input>
                  </div>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <div className="col-12">
                    <Label for="added-ing-text" className="col-form-label">Combines Well With:</Label>
                  </div>
                </Row>
                <Row id="secondaryIngs">
                  <div className="col-10">
                    <Input type="text" id="added-ing-text" className="secIngInputs"></Input>
                  </div>
                  <div className="col-2">
                    <Button id="ingPlusButton">+</Button>
                  </div>
                </Row>
              </FormGroup>
            </Form>
          </div>
        </ModalBody><ModalFooter>
          <Button data-dismiss="modal" onClick={() => dispatch(toggleAffinityModal())} color="secondary">Close</Button>
          <Button id="submitNewIngButton" color="primary" className="submitButton">Submit</Button>
        </ModalFooter>
    </Modal >
    )
  }

export default AffinityModal
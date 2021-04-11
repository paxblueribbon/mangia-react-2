
import React from 'react';
import { Row, Container, Card, CardBody } from 'reactstrap';
import AffinityCard from './AffinityCard';
import { affinityDb } from "../shared/mockdb"
import AffinityModal from './AffinityModal';
import { useDispatch } from 'react-redux'
import { toggleAffinityModal } from '../modalSlice'

function getCard(index) {
  return (
    <AffinityCard key={index} mainIng={"broccoli"} affinities={affinityDb["broccoli"].affinities[index]} />
  )
}

function AffinitySection() {
  const dispatch = useDispatch();
  return (
    <>
      <AffinityModal />
      <Container fluid>
        <Row className="results1 pt-2">
          <div className="col">
            <p className="text-center"><span className="bg-warning">Flavor Affinities</span></p>
          </div>
        </Row>
        <Row className="results1">
          <div className="col-6 col-md-4">
            {getCard(0)}
          </div>
          <div className="col-6 col-md-4">
            {getCard(1)}
          </div>
          <div className="w-100 d-block d-md-none" />
          <div className="col-6 col-md-4 pt-3 pt-md-0">
            {getCard(2)}
          </div>
          <div className="w-100 d-none d-md-block" />
          <div className="col-6 col-md-4 pt-3 h-100">
            {getCard(3)}
          </div>
          <div className="w-100 d-block d-md-none" />
          <div className="col-6 col-md-4 pt-3 h-100">
            {getCard(4)}
          </div>
          <div className="col-6 col-md-4 pt-3 h-100">
            {getCard(5)}
          </div>
        </Row>
        <Row>
          <Card style={{ border: 'none' }} className="affinCard loadMoreCard btn col-6 ptl-3 disabled">
            <CardBody className="loadMore">
              <h3 className="text-center">Load More</h3>
            </CardBody>
          </Card>
          <Card style={{ border: 'none' }} onClick={() => dispatch(toggleAffinityModal())} className="btn col-6 ptl-3 affinCard loadMoreCard">
            <CardBody className="loadMore">
              <h3 className="text-center">Add A Flavor Profile</h3>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </>
  )
}

export default AffinitySection
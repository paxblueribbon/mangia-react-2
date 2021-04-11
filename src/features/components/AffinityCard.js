import React, { Component } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'

class AffinityCard extends Component {

  render() {
    let list = null;

    if (this.props.affinities) {
      list = this.props.affinities.map(affinity => {
        return (
          <div>
            {affinity} <br />
          </div>
        )
      })
    }
    else {
      list = []
    }


    return (
      <Card className="affinCard bg-success h-100 animate__animated animate__backInDown">
        <CardTitle>
          {this.props.mainIng}
        </CardTitle>
        <CardBody>
          {list}
        </CardBody>
      </Card>
    )
  }
}

export default AffinityCard;
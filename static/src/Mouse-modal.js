import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

import JsMouse from './Js-mouse.js';


class MouseModal extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }
  close() {
    this.setState({show:false})
  }

  open() {
    this.setState({show:true})
  }

  render() {
    return (
      <div>
        <p>Click below to play!</p>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Play jsMouse
        </Button>
        <Modal show={this.state.show} onHide={this.close}>
          <Modal.Body>
            <div>
              <JsMouse/>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default MouseModal

import React, { Component } from "react";
import { Modal } from "react-bootstrap";

import jsMouse from './Js-mouse.js';

class MouseModal extends Component {
  constructor {
    super();
    this.state = {
      show: false
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
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.open}
          >
            Play jsMouse
          </Button>
          <Modal show={this.state.show} onHide={this.close}>
            <Modal.Body closeButton>
              <jsMouse/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
}

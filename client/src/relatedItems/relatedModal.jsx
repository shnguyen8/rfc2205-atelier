import React, {useState} from 'react';
import { Modal } from 'react-bootstrap/Modal';

function comparisonModal(props) {
  const [show, setShow] = useState(False);
  const handleClose = () => setShow(False);
  const handleShow = () => setShow(True);

  return(
    <>
    <Modal>

    <Model.Header closeButton size="lg">
    <Modal.Title> Comparing </Modal.Title>
    </Model.Header>

    <Modal.Body>
    <div>
    PRODUCT TITLE
    </div>

    </Modal.Body>

    </Modal>
    </>
  )
}
import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";

export function Example() {
    const [smShow, setSmShow] = useState(false);
    const [Image, setImage] = useState("");

    return (
        <div>
            <Link onClick={() => setSmShow(true)} to="#"><i
                className="fe fe-camera"></i></Link>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Small Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Default file input example</Form.Label>
                        <Form.Control type="text" onChange={(ele)=>{setImage(ele.target.value)}} />
                        <br></br>
                        <button className='btn btn-primary' onClick={()=>{console.log(Image);}}>submit</button>
                    </Form.Group>
                </Modal.Body>
            </Modal>

        </div>
    );
}

import React, { Fragment, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { nanoid } from "nanoid";



export const Savetable = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const data = [
        {
            id: 1,
            fullName: "Bella Chloe",
            position: "System Developer",
            start: "2018/03/12",
            salary: "$654,765",
            email: "b.Chloe@datatables.net",
        },
        {
            id: 2,
            fullName: "Donna Bond",
            position: "Account Manager",
            start: "2012/02/21",
            salary: "	$543,654",
            email: "d.bond@datatables.net",
        },
        {
            id: 3,
            fullName: "Harry Carr",
            position: "Technical Manager",
            start: "2011/02/17",
            salary: "$86,000",
            email: "h.carr@datatables.net",
        },
        {
            id: 4,
            fullName: "Lucas Dyer",
            position: "Javascript Developer",
            start: "2014/08/23",
            salary: "$456,123",
            email: "l.dyer@datatables.net",
        },
        {
            id: 5,
            fullName: "Karen Hill",
            position: "Sales Manager",
            start: "2010/7/14",
            salary: "$432,230",
            email: "k.hill@datatables.net",
        },
        {
            id: 6,
            fullName: "Dominic Hudson",
            position: "Sales Assistant",
            start: "2015/10/16",
            salary: "$654,300",
            email: "d.hudson@datatables.net",
        },
    ];
    const [contacts, setContacts] = useState<any>(data);
    const [addFormData, setAddFormData] = useState({
        fullName: "",
        position: "",
        start: "",
        salary: "",
        email: "",
    });

    const [editFormData, setEditFormData] = useState({
        fullName: "",
        position: "",
        start: "",
        salary: "",
        email: "",
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            fullName: addFormData.fullName,
            position: addFormData.position,
            start: addFormData.start,
            salary: addFormData.salary,
            email: addFormData.email,
        };

        const newContacts:any = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            fullName: editFormData.fullName,
            position: editFormData.position,
            start: addFormData.start,
            salary: editFormData.salary,
            email: editFormData.email,
        };

        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === editContactId);

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            fullName: contact.fullName,
            position: contact.position,
            start: contact.start,
            salary: contact.salary,
            email: contact.email,
        };

        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);
    };

    return (
        <div className="app-container table-responsive">
            <form onSubmit={handleEditFormSubmit}>
                <Button
                    variant=""
                    className="btn btn-primary mb-3"
                    onClick={() => setModalShow(true)}
                >
                    Add New Row
                </Button>
                <table
                    id="delete-datatable"
                    className="table table-bordered text-nowrap border-bottom"
                >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>position</th>
                            <th>Start Date</th>
                            <th>Salary</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <Fragment key={contact.id}>
                                {editContactId === contact.id ? (
                                    <EditableRow
                                        editFormData={editFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                ) : (
                                    <ReadOnlyRow
                                        contact={contact}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                )}
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">Add New Row</Modal.Title>
                    <Button
                        variant=""
                        className="btn btn-close"
                        onClick={() => setModalShow(false)}
                    >
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleAddFormSubmit}>
                        <input
                            type="text"
                            name="fullName"
                            required
                            placeholder="Enter a name..."
                            onChange={handleAddFormChange}
                            className="form-control mb-2"
                        />
                        <input
                            type="text"
                            name="position"
                            required
                            placeholder="Enter an addres..."
                            onChange={handleAddFormChange}
                            className="form-control mb-2"
                        />
                        <input
                            type="text"
                            name="salary"
                            required
                            placeholder="Enter a phone number..."
                            onChange={handleAddFormChange}
                            className="form-control mb-2"
                        />
                        <input
                            type="date"
                            name="Start Date"
                            required
                            placeholder="Enter a phone number..."
                            onChange={handleAddFormChange}
                            className="form-control mb-2"
                        />
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter an email..."
                            onChange={handleAddFormChange}
                            className="form-control mb-2"
                        />
                        <Button variant="" className="btn btn-primary me-2" type="submit">
                            Add
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        className="btn btn-primary"
                        onClick={() => setModalShow(false)}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
}) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    required
                    placeholder="Enter a name..."
                    name="fullName"
                    value={editFormData.fullName}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required
                    placeholder="Enter an position..."
                    name="position"
                    value={editFormData.position}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="number"
                    required
                    placeholder="Enter a phone number..."
                    name="phone number"
                    value={editFormData.salary}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="date"
                    required
                    placeholder="Enter start date..."
                    name="Start Date"
                    value={editFormData.start}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="email"
                    required
                    placeholder="Enter an email..."
                    name="email"
                    value={editFormData.email}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <Button variant="" className="btn btn-primary me-1" type="submit">
                    <i className="fe fe-check-circle"> </i>
                </Button>
                <Button
                    variant=""
                    className="btn btn-danger me-1"

                    onClick={handleCancelClick}
                >
                    <i className="fe fe-x-circle"> </i>
                </Button>
            </td>
        </tr>
    );
};
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.fullName}</td>
            <td>{contact.position}</td>
            <td>{contact.start}</td>
            <td>{contact.salary}</td>
            <td>{contact.email}</td>
            <td>
                <Button
                    variant=""
                    className="btn btn-primary me-1"
                    type="button"
                    onClick={(event) => handleEditClick(event, contact)}
                >
                    <i className="fe fe-edit"> </i>
                </Button>
                <Button
                    variant=""
                    className="btn btn-danger me-1"
                    type="button"
                    onClick={() => handleDeleteClick(contact.id)}
                >
                    <i className="fe fe-trash-2"> </i>
                </Button>
            </td>
        </tr>
    );
};
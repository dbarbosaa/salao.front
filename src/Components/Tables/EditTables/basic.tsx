import React, { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';



export const BasicEditTable = () => {
    const data = [
        {
            id: 1,
            fullName: "Bella Chloe",
            position: "System Developer",
            salary: "$654,765",
            email: "b.Chloe@datatables.net",
        },
        {
            id: 2,
            fullName: "Donna Bond",
            position: "Account Manager",
            salary: "	$543,654",
            email: "d.bond@datatables.net",
        },
        {
            id: 3,
            fullName: "Harry	Carr",
            position: "Technical Manager",
            salary: "$86,000",
            email: "h.carr@datatables.net",
        },
        {
            id: 4,
            fullName: "Lucas Dyer",
            position: "Javascript Developer",
            salary: "$456,123",
            email: "l.dyer@datatables.net",
        },
        {
            id: 5,
            fullName: "Karen Hill",
            position: "Sales Manager",
            salary: "$432,230",
            email: "k.hill@datatables.net",
        },
        {
            id: 6,
            fullName: "Dominic Hudson",
            position: "Sales Assistant",
            salary: "$654,300",
            email: "d.hudson@datatables.net",
        },
    ];
    const [contacts, setContacts] = useState(data);

    const [editFormData, setEditFormData] = useState({
        fullName: "",
        position: "",
        salary: "",
        email: "",
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            fullName: editFormData.fullName,
            position: editFormData.position,
            salary: editFormData.salary,
            email: editFormData.email,
        };

        const newContacts:any = [...contacts];

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
        <div className="app-container">
            <form onSubmit={handleEditFormSubmit}>
                <div className='table-responsive'>
                <table
                    id="delete-datatable"
                    className="table table-bordered text-nowrap border-bottom"
                >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>position</th>
                            <th>Salary</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <Fragment key={contact.id}>
                                {editContactId === contact.id ? (
                                    <EditableRows
                                        editFormData={editFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                ) : (
                                    <ReadOnlyRows
                                        contact={contact}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                )}
                            </Fragment>
                        ))}
                    </tbody>
                </table>
                </div>
            </form>

            {/* <h2>Add a Contact</h2> */}

        </div>
    );
};
const EditableRows = ({
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
                    type="text"
                    required
                    placeholder="Enter a phone number..."
                    name="salary"
                    value={editFormData.salary}
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
const ReadOnlyRows = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.fullName}</td>
            <td>{contact.position}</td>
            <td>{contact.salary}</td>
            <td>{contact.email}</td>
            <td>
                <Button
                    variant=""
                    className="btn btn-primary me-1"
                    type="button"
                    onClick={(event) => handleEditClick(event, contact)}
                >
                    <i className="fe fe-edit"></i>
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
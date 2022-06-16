import React from 'react';

const ManageATool = ({ tool, setDeleteModal }) => {
    const { name, price, quantity, _id } = tool
    return (
        <tr className="hover">
            <th>{_id}</th>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td> <label htmlhtmlFor="my-modal" onClick={() => setDeleteModal(tool)} className="btn btn-sm">Remove</label></td>
        </tr>
    );
};

export default ManageATool;
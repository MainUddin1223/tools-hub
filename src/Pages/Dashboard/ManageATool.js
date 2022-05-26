import React from 'react';

const ManageATool = ({ tool ,setDeleteModal}) => {
    const { name, price, quantity, _id } = tool
    return (
        <tr class="hover">
            <th>{_id}</th>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td> <label htmlFor="my-modal" onClick={()=>setDeleteModal(tool)} class="btn btn-sm">Remove</label></td>
        </tr>
    );
};

export default ManageATool;
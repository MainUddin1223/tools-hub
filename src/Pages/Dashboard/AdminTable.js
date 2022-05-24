import React from 'react';

const AdminTable = ({ admin, id }) => {
    const { name, email } = admin
    return (
        <tr class="hover">
            <th>{id}</th>
            <td>{name}</td>
            <td>{email}</td>
        </tr>
    );
};

export default AdminTable;
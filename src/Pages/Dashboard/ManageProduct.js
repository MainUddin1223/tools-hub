import React, { useState } from 'react';
import useTools from '../Hooks/useTools';
import Modal from '../Modal/Modal';
import ManageATool from './ManageATool';

const ManageProduct = () => {
    const [tools] = useTools()
    const [deleteModal, setDeleteModal] = useState(null)
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th> Price</th>
                            <th> Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map(tool => <ManageATool
                                key={tool._id}
                                tool={tool}
                                setDeleteModal={setDeleteModal}
                            ></ManageATool>)
                        }

                    </tbody>
                </table>
            </div>
            {deleteModal && <Modal deleteModal={deleteModal} setDeleteModal={setDeleteModal}></Modal>}
        </div>
    );
};

export default ManageProduct;
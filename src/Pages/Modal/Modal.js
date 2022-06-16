import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Modal = ({ deleteModal, setDeleteModal }) => {
    console.log(deleteModal);
    const { _id, name } = deleteModal;
    const handleRemove = () => {
        const url = `https://nameless-tor-88457.herokuapp.com/tools/${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    toast.success('Product removed Successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
    }
    return (
        <div>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure to delete {name} !</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Cancel</label>
                        <label onClick={handleRemove} htmlFor="my-modal" className="btn">Confirm</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
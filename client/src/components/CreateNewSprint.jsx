import React, { useState } from "react";
import { fetchFromTaskPlannerApi } from "../utils/api";
import '../styles/popup.css'
import { getjwtToken } from "../utils/setJwtToken";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function CreateNewSprint({ handleClose, teamId }) {
    const [requestObject, setRequestObject] = useState({
        name: '',
        description: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const obj = {
            title: requestObject.name,
            description: requestObject.description
        }

        fetchFromTaskPlannerApi(`sprints/${teamId}`, "POST", obj, {
            "Content-Type": "application/json",
            "x-auth-token": getjwtToken()
        })
            .then((res) => {
                console.log(res);
                if (res.code == 201) {
                    toast.success(res.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }

                if (res.code == 400) {
                    toast.warning(err.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                }

                if (res.code == 403) {
                    toast.info(err.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }

                if (res.code == 404) {
                    toast.error(err.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                }

            }
            )
            .catch((err) => {
                if (err.code == 400) {
                    toast.warning(err.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                }

                if (err.code == 403) {
                    toast.info(err.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }

                if (err.code == 404) {
                    toast.error(err.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                }
            }
            );


        handleClose();
        // window.location.reload();
    };

    return (
        <div className="popup-form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Sprint Name:</label>
                <input
                    type="text"
                    id="name"
                    value={requestObject.name}
                    onChange={(e) =>
                        setRequestObject({
                            ...requestObject,
                            name: e.target.value
                        })
                    }
                />
                <br />
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    value={requestObject.description}
                    onChange={(e) =>

                        setRequestObject({
                            ...requestObject,
                            description: e.target.value
                        })
                    }
                />
                <div className="btnClose">
                    <button type="submit">Create Sprint</button>
                    <button onClick={handleClose}>Close</button>
                </div>
            </form>
        </div>
    );
}

export default CreateNewSprint;

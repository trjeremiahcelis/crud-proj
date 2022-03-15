import React, { useState, useEffect } from "react";
import axios from "axios";
import { mdiDotsVertical, mdiCloseCircle } from '@mdi/js';
import Icon from '@mdi/react';
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import Search from './Search';
import Spinner from '../assets/images/spinner.svg';
import '../styles/modal.scss';

Modal.setAppElement('#root');

const Table = (props) => {
    // modal function
    function closeModal() { setModalIsOpen = (false) };
    const [modalisOpen, setModalIsOpen] = useState(false);
    const studentInfo = props.studentInfo;
    const students = studentInfo.students;
    const getStudent = props.getStudent;
    const isLoading = props.isLoading;
    const [title, setTitle] = useState({
        title_ID: '',
        title_num: '',
        title_fname: '',
        title_lname: ''
    });

    const [updateFname, setUpdateFname] = useState('');
    const [updateStudNumber, setUpdateStudNumber] = useState('');
    const [updateAddress, setUpdateAddress] = useState('');
    const [updateContact, setUpdateContact] = useState('');

    const [searchTerm, setSearchTerm] = useState("");
    // Every time the state change it will trigger the func getStudent 
    useEffect(() => {
        getStudent();
    }, []);

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        let updateData = {
            name: updateFname,
            studentNumber: updateStudNumber,
            contact: updateContact,
            address: updateAddress
        }
        await axios.put(`http://localhost:8084/student/update/${title.title_ID}`, updateData)
            .then((res) => {
                /* console.log(res.data)
                console.log(res) */
                getStudent();
                Swal.fire({
                    text: 'Successfully updated!',
                    icon: 'success'
                })
            })
            .catch(err => {
                console.error(err);
            })
        setModalIsOpen(false)
    };

    const EditButton = (props) => {
        return (
            <div className="modalElement">
                <a onClick={(e) => {
                    e.preventDefault();
                    setModalIsOpen(true)
                    // set the title in modal form
                    setTitle({
                        //title ID was used to update the student from modal
                        title_ID: props.UpdateId,
                        title_num: props.studNum,
                        title_fname: props.fName,
                        title_lname: props.lName
                    })
                }}>Edit</a>
            </div>
        )
    };

    const DeleteButton = (props) => (
        <a onClick={(e) => {
            e.preventDefault();
            Swal.fire({
                title: 'Are you sure?',
                text: 'Do you really want to delete this?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            })
            // Delete request when button is clicked 
            axios.delete(`http://localhost:8084/student/delete/${props.DeleteId}`, {
                method: "DELETE"
            })
                /* TODO: add if else here 
                   FIXME: if press cancel it also proceeds to delete */
                .then((res) => {
                    /* console.log(res)
                    console.log(res.data) */
                    getStudent();
                    Swal.fire('Deleted!')
                })
                .catch(err => {
                    console.error(err)
                })
        }}>Delete</a>
    );

    return (
        <div className="table">
            <div className="header"><ul>
                <li className="filterTitle">Search</li>
                <li><Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /></li>
            </ul></div>
            <table className="table-content">
                <tbody className="body-container">
                    <tr className="table-header">
                        <td>Name</td>
                        <td>Student Number</td>
                        <td>Address</td>
                        <td>Contact</td>
                        <td>Action</td>
                    </tr>

                    {students
                        .filter((value) => {
                            //if the searchterm is empty then return the values of the table
                            if (searchTerm == "") {
                                return value
                                //else if the value fname, lname, address is equal to searchterm return the equal value
                            } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                value.address.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return value
                            }
                        })
                        .map((student) => {
                            return (
                                <tr key={student.id} className='data'>
                                    <td>{student.name}</td>
                                    <td>{student.studentNumber}</td>
                                    <td>{student.address}</td>
                                    <td>{student.contact}</td>
                                    <td><div className="dropdown">
                                        <Icon path={mdiDotsVertical} title="action" size={1} />
                                        <div className="dropdown-content">
                                            <li> Options</li>
                                            <EditButton UpdateId={student.id} studNum={student.studentNumber}
                                                fName={student.name} />
                                            <DeleteButton DeleteId={student.id} />
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                            )
                        }
                        )}
                </tbody>
            </table>

            <Modal isOpen={modalisOpen} shouldCloseOnOverlayClick={false} >
                <a href="" onClick={closeModal}><Icon path={mdiCloseCircle} size={1} /></a>
                <form className="student-form" onSubmit={handleUpdateSubmit}>
                    <h3>Name: {title.title_fname} {title.title_lname} </h3>
                    <div className="personal-info">
                        <h4>Personal Information</h4>
                        <div className="input-update">
                            <label> Full Name: </label>
                            <input type="text" id="txt-input" name="name"
                                value={updateFname} onChange={(e) => setUpdateFname(e.target.value)} />
                        </div>
                        <div className="input-update">
                            <label> Student Number: </label>
                            <input type="text" id="txt-input" name="studentNumber" maxLength={10}
                                value={updateStudNumber} onChange={(e) => setUpdateStudNumber(e.target.value)} />
                        </div>
                        <h4>Contact Information</h4>
                        <div className="input-update">
                            <label> Address: </label>
                            <input type="text" id="txt-input" name="address"
                                value={updateAddress} onChange={(e) => setUpdateAddress(e.target.value)} />
                        </div>
                        <div className="input-update">
                            <label> Contact: </label>
                            <input type="tel" id="txt-input" name="contact"
                                value={updateContact} onChange={(e) => setUpdateContact(e.target.value)} />
                        </div>
                        <input type="submit" value="UPDATE STUDENT" className="update-btn" />
                    </div>
                </form>
            </Modal>

            {isLoading && <div className="loading"><img src={Spinner} alt="Loading..." className="spinner" /></div>}
        </div>
    );
}

export default Table;
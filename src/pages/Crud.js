import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from '../components/Table';
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { useForm } from 'react-hook-form';

const Crud = () => {
    /* Use State */
    const [studentInfo, setStudentInfo] = useState({ students: [] });
    const [fname, setFname] = useState('');
    const [studNumber, setStudNumber] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [formData, setFormData] = useState("");
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        getStudent();
    }, []);

    const [isLoading, setLoading] = useState(true);

    /* Handle onSubmit */
    const onSubmit = async (formData, e) => {
        e.preventDefault();
        setFormData(JSON.stringify(formData));
        // AXIOS POST Request
        await axios.post('http://localhost:8084/student/add', formData)
            .then(res => {
                getStudent();
                Swal.fire({
                    title: 'Student Created!',
                    text: 'Successfully created!',
                    icon: 'success'
                })
            })
            .catch(err => { console.error(err) })
            e.target.reset();
    }

    const getStudent = async () => {
        await axios.get('http://localhost:8084/student/getall')
            .then((res) => {
                const results = res.data.student
                setStudentInfo({ students: results })
                setLoading(false)
            })
            .catch((error) => { console.error(error); })
    }

    return (
        <div className="home-content">
            <form className="student-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="personal-info">
                    <h4>Personal Information</h4>
                    <div className="input-groups">
                        <label> Full Name:</label>
                        <input type="text" {...register("name", { pattern: /^[A-Za-z/\s/g]+$/i, required: true })} />
                        
                        {/* Form error validation */}
                        {errors.name?.type === 'pattern' && 
                            <span className="reqError">Please input proper Full name</span>}
                        {errors.name?.type === 'required' && 
                            <span className="reqError">This field is required</span>}
                    </div>

                    <div className="input-groups">
                        <label> Student Number:</label>
                        <input type="text" {...register("studentNumber", { required: true })} />
                        
                        {errors.studentNumber?.type === 'required' && 
                            <span className="reqError">This field is required</span>}
                    </div>

                    <h4>Contact Information</h4>
                    <div className="input-groups">
                        <label> Address:</label>
                        <input type="text" {...register("address")} />
                    </div>

                    <div className="input-groups">
                        <label> Mobile Number:</label>
                        <input type="text" {...register("contact", { pattern: /^[0-9+-]+$/i, minLength: 11 })} />
                        
                        {errors.contact?.type === 'pattern' && 
                            <span className="reqError">The number is not valid.</span>}
                        {errors.contact?.type === 'minLength' && 
                            <span className="reqError">You must input 11 numbers</span>}
                    </div>
                    <input type="submit" value="ADD STUDENT" className="submit-btn" />
                </div>
            </form>

            <div className="table">
                <Table
                    student={{
                        state: {
                            fname: fname,
                            studNumber: studNumber,
                            address: address,
                            contact: contact
                        },
                        setState: {
                            setFname: setFname,
                            setStudNumber: setStudNumber,
                            setAddress: setAddress,
                            setContact: setContact
                        }
                    }}
                    studentInfo={studentInfo}
                    setStudentInfo={setStudentInfo}
                    getStudent={getStudent}
                    isLoading={isLoading} />
            </div>
        </div>
    );
}

export default Crud;
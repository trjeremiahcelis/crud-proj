import React, { useState, useEffect } from "react"
import axios from "axios"
import Table from '../components/Table'
import Swal from 'sweetalert2/dist/sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

const Crud = () => {
    /* Use State */
    const [studentInfo, setStudentInfo] = useState({students: []})
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [studNumber, setStudNumber] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    useEffect(() => {
        getStudent();
    }, [])

    const [isLoading, setLoading] = useState(true)
    
    /* Handle Submit */
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            stud_fname: fname,
            stud_lname: lname,
            stud_no: studNumber,
            stud_address: address,
            stud_contact: contact
        }
        // console.log(data)
        try {
            // AXIOS POST Request
            axios.post('http://localhost:8081/students/create', data)
                .then(res => {
                    //console.log(res)
                    //console.log(res.data)
                    getStudent();
                    Swal.fire({
                        title: 'Student Created!',
                        text: 'Successfully created!',
                        icon: 'success'
                    })
                })
        } catch (error) {
            console.log(error)
        }
    }
    const getStudent = () => {
        axios.get('http://localhost:8081/students/get?fields=*')
            .then((res) => {
                const results = res.data
                setStudentInfo({ students: results })
                setLoading(false)
            })
            .catch((error) => { console.error(error); })
    }
    return (
        <div className="home-content">
            <form className="student-form" onSubmit={handleSubmit}>
                <div className="personal-info">
                    <h4>Personal Information</h4>
                    <div className="input-groups">
                        <label> First Name:</label>
                        <input type="text" id="txt-input" name="fname"
                            value={fname} onChange={(e) => setFname(e.target.value)} />
                    </div>
                    <div className="input-groups">
                        <label> Last Name:</label>
                        <input type="text" id="txt-input" name="lname"
                            value={lname} onChange={(e) => setLname(e.target.value)} />
                    </div>
                    <div className="input-groups">
                        <label> Student Number:</label>
                        <input type="text" id="txt-input" name="studNo" maxLength={10}
                            value={studNumber} onChange={(e) => setStudNumber(e.target.value)} />
                    </div>
                    <h4>Contact Information</h4>
                    <div className="input-groups">
                        <label> Address:</label>
                        <input type="text" id="txt-input" name="address"
                            value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="input-groups">
                        <label> Contact:</label>
                        <input type="tel" id="txt-input" name="contact"
                            value={contact} onChange={(e) => setContact(e.target.value)} />
                    </div>

                    <input type="submit" value="ADD STUDENT" className="submit-btn" />
                </div>
            </form>

            <div className="results"></div>

            <div className="table">
                <Table 
                    student={{
                        state: { fname:fname, 
                                 lname:lname, 
                                 studNumber:studNumber, 
                                 address:address, 
                                 contact:contact },
                        setState: { setFname:setFname, 
                                    setLname:setLname, 
                                    setStudNumber:setStudNumber, 
                                    setAddress:setAddress, 
                                    setContact:setContact }
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
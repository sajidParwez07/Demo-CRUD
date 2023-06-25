import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/check.css';

const Edit = () => {
    const [name, setName] = useState("");
    const{id}= useParams();
    const navigate = useNavigate();

    const getEditData = () =>{
        fetch("https://mock-76x7.onrender.com/data/"+id)
        .then(Response=>Response.json())
        .then(data=>{
            console.log(data);
            setName(data.title)
        })
    }
    
    useEffect(()=>{
        getEditData();
    },[1]);

    const updateData = () =>{
        let url = "https://mock-76x7.onrender.com/data/"+id;
        let data = {title:name};
        let postoption = {
            headers:{'Content-Type':'application/json'},
            method:"PUT",
            body:JSON.stringify(data)
        }
        fetch(url, postoption)
        .then(Response=>Response.json())
        .then(serRes=>{
            alert("Updated");
            navigate('/');
        })
    }


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-4 offset-4 mt-5' id='check-card'>
                <div className='card shadow-lg'>
                    <div className='card-header bg-warning'>
                        <h4 className='text-center text-white'>Edit</h4>
                    </div>
                    <div className='card-body'>
                        <div className='mb-3'>
                            <label>Enter Titile</label>
                            <input type="text" className='form-control'
                           onChange={(e)=>setName(e.target.value)}
                           value={name}/>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-primary w-100' onClick={updateData}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Edit
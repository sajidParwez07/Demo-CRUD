import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/check.css';

const Check = () => {
    const [title, setTitle] = useState("");
    const[name, setName] = useState([]);

    const post = () =>{
        let url = "https://mock-76x7.onrender.com/data";
        let data = {title:title};
        let postoption = {
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(data)
        }
        fetch(url, postoption)
        .then(Response=>Response.json())
        .then(data=>{
            alert("posted");
            // console.log(data);
            setTitle("");
            getData();
        })
    };

    const getData = ()=>{
        fetch("https://mock-76x7.onrender.com/data")
        .then(Response=>Response.json())
        .then(serRes=>{
            console.log(serRes);
            setName(serRes);
        })
    } 

    useEffect(()=>{
        getData();
    },[1]);

    const delData = (tnameid) =>{
        let url = "https://mock-76x7.onrender.com/data/"+tnameid;
        let postoption = {
            headers:{'Content-Type':'application/json'},
            method:"DELETE"
        }
        fetch(url, postoption)
        .then(Response=>Response.json())
        .then(deldata=>{
            alert("Deleted");
            getData();
        })
    };


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-4 offset-4 mt-5' id='check-card'>
                <div className='card shadow-lg'>
                    <div className='card-header bg-success'>
                        <h4 className='text-center text-white'>Register</h4>
                    </div>
                    <div className='card-body'>
                        <div className='mb-3'>
                            <label>Enter Titile</label>
                            <input type="text" className='form-control'
                            onChange={(e)=>setTitle(e.target.value)}
                            value={title}/>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-primary w-100' onClick={post}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col-lg-4 offset-4' id='check-table'>
                <table className='table table-bordered text-center shadow-lg'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        name.map((tname, index)=>{
                            return(
                                <tr key={index+1}>
                                <td>{tname.id}</td>
                                <td>{tname.title}</td>
                                <td>
                                    <Link to={`/edit/${tname.id}`}>
                                        <button className='btn btn-warning'>Edit</button>
                                    </Link>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={delData.bind(this, tname.id)}>Delete</button>
                                </td>
                            </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Check
import React from 'react'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import {  useMatch, useNavigate } from 'react-router-dom';
import { edituser } from '../../JS/Actions/user';

import './EditProfile.css'

const EditProfile = () => {

    const userToGet = useSelector(state => state.userReducer.user)

    const match = useMatch("/edit/:id")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({})
  
    const handleChange = (e) => {
      setNewUser( {...newUser,[e.target.name] : e.target.value})   }
    const user = useSelector((state)=> state.userReducer.user)  
    const handleEdit = () => {
      dispatch(edituser(match.params.id ,newUser))
      navigate(`/profile/${user._id}`)
    }
    
    return (
      
      <div>
      <Helmet>
  <meta charSet="utf-8" />
  <title>profil settings</title>
  <link rel="canonical" />
</Helmet>
      <h1 className='Login'>profil settings</h1>

      <div className='cadre2'>
<div className='cadre7'>

         <Form onSubmit={handleEdit }>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label  className='forms'>lastname</Form.Label>
    <Form.Control type="text" placeholder={`${userToGet.firstname}`} name='firstname' onChange={handleChange} value={newUser.firstname} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Label  className='forms'>firstname</Form.Label>
    <Form.Control type="text" placeholder={`${userToGet.name}`}name='name' onChange={handleChange} value={newUser.name} />
    <Form.Text className="text-muted">
    </Form.Text>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='forms'> email</Form.Label>
    <div>
    <Form.Control type="email" placeholder={`${userToGet.email}`} name='email' onChange={handleChange} value={newUser.email}   /> 
    </div>
  </Form.Group>
<div className='MAJ'>
<Button variant="secondary" onClick={()=>navigate(`/profile/${userToGet._id}`)}><span >cancel</span></Button>
  <Button onClick={handleEdit} className='editbtn'variant="light"  type="submit"><span className='boutontext'  >update →</span></Button>
  </div>
</Form>

</div>
</div>
      </div>
      
    );
}

export default EditProfile
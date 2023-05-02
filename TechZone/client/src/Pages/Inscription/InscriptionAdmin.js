import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { registerAdmin } from '../../JS/Actions/admin'
import './Inscription.css'
import { useNavigate } from 'react-router-dom';
import eye from './eye.png';
import hide from './hide.png'
import { Helmet } from 'react-helmet'

const Inscription = () => {

  const [newAdmin, setNewAdmin] = useState({}) 
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuthAdmin = useSelector((state) => state.userReducer.isAuthAdmin)
   const handleChange = (e) => {
     setNewAdmin({...newAdmin , [e.target.name] : e.target.value})
   }

   const handleAdmin = (e) => {
     e.preventDefault();
     newAdmin.isAdmin=true
     dispatch(registerAdmin(newAdmin))
     
   }
   
   const [passwordShown, setPasswordShown] = useState(false);
   const togglePassword = () => {
     setPasswordShown(!passwordShown);
   };

  return (
    <div>
      <Helmet>
  <meta charSet="utf-8" />
  <title>CREATE A NEW ADMIN ACCOUNT</title>
  <link rel="canonical" />
      </Helmet>

<h1 className='Inscription'>create a new admin account</h1>
{isAuthAdmin?navigate('/')  : (
  <div className='cadre2'>
  <div className='cadres'>
          <Form  onSubmit={handleAdmin} >
  
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label  className='forms'> first name</Form.Label>
      <Form.Control type="text" placeholder="first name" name="firstname" onChange={handleChange}/>
  
      <Form.Label className='forms'>last name</Form.Label>
      <Form.Control type="text" placeholder="name" name="name" onChange={handleChange} />
  
      <Form.Label className='forms'>e-mail</Form.Label>
      <Form.Control type="email" placeholder="your email" name="email" onChange={handleChange}/>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='forms'>password</Form.Label>
    {passwordShown ? (<img src={hide} onClick={togglePassword}  className='eye5' alt='show'/>) : (<img src={eye} onClick={togglePassword}  className='eye5'alt='hide' />)}
    
      <Form.Control type={passwordShown ? "text" : "password"} placeholder="password" name="password" onChange={handleChange} />
  </Form.Group>
  
  <Button  className='bouton'variant="light" type="submit"><span className='boutontext' onClick={handleAdmin}>Créer compte </span></Button>
    <hr/>
    
    <Form.Text className="text-muted">
    Do you already have an account?
    <a href="/login">connect</a>
      </Form.Text>
     
    <Button variant="primary" href="/"><span className='boutontext'>Go back to the homepage</span></Button>{' '}
  </Form>
  </div>
  </div>
)}

                      
        </div>
  )
}

export default Inscription
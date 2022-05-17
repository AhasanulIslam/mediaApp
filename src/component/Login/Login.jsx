import React, { useState, useEffect } from "react";
import "./Login1.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [values, setValues] = useState({
  //     // fullname: "",
  //     email: "",
  //     password: "",
  // })

  
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate("/approvepage")
    }
  }, [])




  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  // const [dataIsCorrect, setDataIsCorrect] = useState(false)
  // const [errors, setErrors] = useState({});



  async function login() {
    const item = { email, password };
    try {
      const result = await axios.post("https://soapp-nodejs.herokuapp.com/users/login", item)
      console.log("scscjhvcb",result);
      
     localStorage.setItem("user-info",result.data.token)
    navigate("/approvepage")
    
    } catch (error) {
      console.log(error)
    }

    
    // if (this.User.token === 'ERROR') {
    //   this.showInvalidMessaqge();
    // } else {
    //   this.setLoginToken(this.User.token);
    //   if (this.User.access_Level === 'teacher') {
    //     this.router.navigate(['/teacher']);
    //   } else if (this.User.access_Level === 'stuff') {
    //     this.router.navigate(['/stuff/student']);
    //   }
    
    // const result = await fetch(`http://localhost:4000/users/login`,{
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: item
    // });

    // result =await result.json();
    // localStorage.setItem("user-info",JSON.stringify(result))
    // navigate("/adv")

  }

  //   const login = (event) => {
  //     event.preventDefault();
  //     setErrors(Validation(values))
  //     setDataIsCorrect(true)
  //     console.log(values);
  //     axios.post(`http://localhost:4000/users/login`,
  //  values)
  //     .then(res => console.log(res.data))
  //     .catch(e => console.log(e))
  //   }


  return (
    // <div className="container">
    //   <div className="app-wrapper">
    //     <Form onSubmit={handleSubmit} >

    //       <div className='email'>
    //         <Form.Group size="lg" controlId="email" className='from-wrapper'>
    //           <Form.Label className='label'>Email</Form.Label>
    //           <Form.Control
    //             className='input'
    //             autoFocus
    //             type="email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </Form.Group>
    //       </div>

    //       <div className="password">

    //         <Form.Group size="lg" controlId="password" className='from-wrapper'>
    //           <Form.Label className='label'>Password</Form.Label>
    //           <Form.Control
    //             className='input'
    //             type="password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </Form.Group>

    //       </div>
    //       <Button block size="lg" type="submit" disabled={!validateForm()} className='submit' onClick={login}>
    //         Login
    //       </Button>
    //     </Form>
    //   </div>
    // </div>

  //   <div className="login-page-1">
  //     <div className="row">
  //       <div className="col-md-6 d-flex align-items-center justify">
  //         <div className="text-part d-flex flex-column">
  //           <h1>LOGIN</h1>

  //           <input type="email" placeholder="email" />
  //           <input type="password" placeholder="password" />

  //           <button>LOGIN</button>

  //           <div className="d-flex">
  //             <a href="/signup">Register</a>
  //           </div>

  //         </div>

  //       </div>

  //     </div>
      
     
  //  </div>


<div className="login__container">
      <div className="login__welcome">
        {/* <div className="login__logo">
          <img src='https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/5f3c19f18169b655820bf3d4_asset%2021.svg' alt='logo'/>
        </div> */}

        <p>Social Media App</p>
      </div>


        <div className="login__form-container">
        <div className="login__form">
        <Form onSubmit={handleSubmit} >

          <div>
             <Form.Group  controlId="email" >
               <Form.Label> Email </Form.Label>
              <Form.Control
                className='input'
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </div>

          <div >

            <Form.Group controlId="password" >
              <Form.Label> Password </Form.Label>
              <Form.Control
                className='input'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

          </div>
          <Button block size="lg" type="submit" disabled={!validateForm()} className="login__submit-btn" onClick={login}>
            Login
          </Button>
          
          <span className="login__forgot-password">Forgot password?</span>
          <span className="login__signup"><a href="/signup"> Create New Account </a> </span>
        </Form>
          </div>
          </div>
    
          </div>

  
);
  
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Validation from './Validation';
import cart from "./cart.png"
import "./Login.css";
import {
  Form,
  Select,
} from 'antd';



const SignupFrom = ({ submitForm }) => {
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        gender: "",
        dateof_birth: ""
    })

    const { Option } = Select;


    const [errors, setErrors] = useState({});

    const [dataIsCorrect, setDataIsCorrect] = useState(false)

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value, 
        })
    }

 
    const handleFromSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values))
        setDataIsCorrect(true)
        console.log(values);
        axios.post(`https://nano-quiz-api.herokuapp.com/users/signup`,
     values)
        .then(res => console.log(res.data))
        .catch(e => console.log(e))

        // navigate("/login")


    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            // submitForm(true)
        }
    }, [errors])

    // useEffect(() => {
    //     axios.get(url, headers).then(res => {setValues(res.data)})
    //     .catch(e => console.log(e))
    // }, [])

  return (
    
            <div>
      <div className="login-page-10">
        <div className="row align-items-center h-100">
          <div className="col-md-5 first-part d-flex align-items-center justify-content-center flex-column">
            {/* <h1 className="text-start w-100">Welcome to Quiz App</h1> */}
            <p className="text-start w-100">
              Sign in with your credentionals to enjoy this app
            </p>
            <p className="text-start w-100">Sign In Here </p>
            {/* <img src={cart} alt="" className="my-5"/> */}

            <button><a href="/login">SIGN IN </a></button>
          </div>
          <div className="col-md-7 second-part d-flex flex-column align-items-end">
            <div className="text-part d-flex flex-column">
              <h1>SIGN UP</h1>


              <span>Use name, email and Password</span>

              {/* <input type="text" placeholder="username" />
              <input type="text" placeholder="password" />
              <button>LOGIN</button> */}

            <form className='from-wrapper'>

               <div className='email'>
                    <div className='name'>
                    <label className='label'>First Name</label>
                    <input className='input' type="text" name='first_name' value={values.first_name} onChange={handleChange}/>
                    {errors.first_name && <p className='error'>{errors.first_name}</p>}
                </div></div>

                <div className='email'>
                    <div className='name'>
                    <label className='label'>Last Name</label>
                    <input className='input' type="text" name='last_name' value={values.last_name} onChange={handleChange}/>
                    {errors.last_name && <p className='error'>{errors.last_name}</p>}
                </div>
                    <label className='label'>Email</label>
                    <input className='input' type="email"  name='email' value={values.email} onChange={handleChange}/>

                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>

                <div className='email'>
                    <div className='name'>
                    <label className='label'>Date of Birth</label>
                    <input className='input' type="date" name='last_name' value={values.last_name} onChange={handleChange}/>
                    {errors.last_name && <p className='error'>{errors.last_name}</p>}
                </div></div>
                <div className='email'>
                  
                <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
                

                

                <div className='password'>
                    <label className='label'>Password</label>
                    <input className='input' type="password" name='password' value={values.password} onChange={handleChange}/>
                    {errors.password && <p className='error'>{errors.password  }</p>}

                </div>
                <div>
                    <button className='submit' onClick={handleFromSubmit}>Sign Up</button>
                </div>
                </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupFrom
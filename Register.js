import React from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginpic1 from "../source/login6.png"
import { useForm } from 'react-hook-form'
import axios from 'axios'

function Register() {
  const{
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const registerSubmit= async(data)=>{
    if(data.password === data.cpassword){
      const userData = {
        user : data.user,
        email : data.email,
        password : data.password
      } 
        console.log(userData);  // consloe outpu
        await axios.post('auth/register', userData)
        .then(log =>{
          if(log.data.success){
            toast.success(log.data.msg, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              })
          } else{
            toast.error(log.data.msg, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              })
        }
        })
        .catch(error => {
          toast.error(error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
        })
        
      }else{
        toast.error("Password dosen't match", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
    }

  }
  return (
    <div className='row bgcolor p-4'> 
      <h1 className='text-white text-center pb-1'>Hi, Captain Register here</h1>
      <div className='col-md-4 mx-auto mt-3 py-5 px-5'>
        <div className='card p-3 bg-white'>
          <h2 className='pt-2 px-4'>Register</h2>
          <form className='mt-5 mx-4' onSubmit={handleSubmit(registerSubmit)}>
            <div className='from-group'>
              <h5 id="text1">Name</h5>
              <input type="text" className='form-control' placeholder='Enter name' required autoFocus 
                {...register("user", {required: true, minLength:6})} />
                {errors.user && <div><p className="text-danger text-md-start mt-1"> Name should be of atleast 6 charecter</p></div>}
            </div>

            <div className='from-group mt-4'>
              <h5 id="text1">Email address</h5>
              <input type="email" className='form-control' placeholder='Enter Email' required
              { ...register("email", 
              {
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
              } )} />
              {errors.email && <div><p className='text-danger text-md-start mt-1'>please enter correct email</p></div>}     
              
            </div>

            <div className='from-group mt-4'>
              <h5 id="text1">Passowrd</h5>
              <input type="Password" className='form-control' placeholder='Enter Password' required 
               {...register("password", 
               {required:true, 
               pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ })} />
               { errors.password && <div>
                <p className='text-danger mt-1 text-md-start'>Passowrd should be of length 6-15 
                 should contain atleast one uppercase, one number and one special case</p>
                </div>}
              
            </div>

            <div className='from-group mt-4'>
              <h5 id="text1">Confirm Password</h5>
              <input type="Password" className='form-control' placeholder='Enter confirm Password' required 
               {...register("cpassword", 
               {required:true, 
               pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ })} />
               { errors.password && <div>
                <p className='text-danger text-md-start mt-1'>Passowrd should be of length 6-15</p> 
                <p> should contain atleast one uppercase,one number and one special case</p>
                </div>}
              </div>
            <div className='text-center'>
              <button type='submit' className='submit-btn mt-5'>Submit</button>
            </div>
          </form>
            <NavLink className="text-primary text-center my-3" to='/'>Already Registered? Click here to login</NavLink>
        </div>
      </div>
        <div className='col-md-6'>
          <img className='img-fluid mt-5 py-4' src={loginpic1} width="600px" height="700px" alt=""></img>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Register
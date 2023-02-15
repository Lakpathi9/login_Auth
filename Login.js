import React, {useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginpic from '../source/login4.jpeg'
import axios from 'axios'
 
function Login() {
  const [email, setEmail] = useState('')
  const [password,setPassword] =useState('')
  const navigate = useNavigate()
  const loginSubmit = (e)=>{
    e.preventDefault()
    const userData ={
      email, password
    }
    try {
      axios.post('/auth/login', userData)
      .then(log=>{
        if(log.data.success){
          //console.log(userData)
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
            //store data i n local storage 
            localStorage.setItem("data",JSON.stringify(log.data.token))
            //navigate to home 
            navigate('/dashboard')
        }else{
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
    } catch (error) {
      
    }

  }
return (
    <div className="row bgcolor py-4">
      <h1 className='text-white text-center'>Hi, Captain WelCome Back</h1>
      <div className='col-md-7 mt-5'>
        <img src={loginpic} className="rounded" width="700px" height="700px" alt=""  />
      </div>
      <div className='col-md-4 py-5'>
        <div className='card p-3 bg-white'>
          <h2>Login</h2>
          <form onSubmit={loginSubmit} className='mt-5 mx-4'>
            <div className='form-group '>
              <h4 id="text1">Email address</h4>
              <input type='email' value= {email} onChange={(e)=>setEmail(e.target.value)} 
              className='form-control' placeholder='Enter Email' required autoFocus/>
            </div>
            <div className='form-group mt-4'>
              <h4 id="text1">Password</h4>
              <input type='Password' value={password} onChange={(e)=>setPassword(e.target.value)} 
              className='form-control' placeholder='Enter Password' required />
            </div>
            <div>
              <button type="submit" className='mt-5 submit-btn' >Submit</button>
            </div>
          </form>
          <NavLink className='text-primary text-center my-5' to="/Register">Not Registered? Click here</NavLink>
        </div>
      </div>
      <ToastContainer />
     </div>
  )
}

export default Login
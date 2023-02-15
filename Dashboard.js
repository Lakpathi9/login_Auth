import React from 'react'

function Dashboard() {
  return (
   <div className='container'>
    <div className='bg-success p-3'>
      <h2 className='text-white text-center'> Dashboard</h2>
    </div>

    <div className='mt-5 p-3'> 
      <button className='btn mt-3 btn-danger float-end'>logout</button>
        <br />

        <h2 className='mt-5'> Name </h2>
        <h2>Email</h2>
    </div>
    <div className='mt-4'>
      <div className='col-md-5 mx-auto mt-3 p-5'>
      </div>
          <div className='card p-3 bg-white'>
              <h2 className='pt-2 px-4'>Update Details</h2>
              <form >
                  <div className='form-group'>
                    <h5>Name</h5>
                      <input type="text" className='form-control' readOnly placeholder='Name' />
                  </div>
                  <div className='form-group'>
                      <h5>Email</h5>
                      <input type="text" className='form-control' readOnly  placeholder='Email'/>
                  </div>
                  <div className='form-group'> 
                    <h5>Current Password</h5>
                    <input type="password" className='form-control' placeholder='Enter Current password' />
                  </div>
                  <div className='form-group mt-4'> 
                    <h5>New Password</h5>
                    <input type="password" className='form-control' placeholder='Enter new password' />
                  </div>
                  <div className='form-group mt-4'> 
                    <h5>Confirm New Password</h5>
                    <input type="password" className='form-control' placeholder='confirm new password' />
                  </div>
              </form>
          </div>
    
    </div>
   </div>
  )
}

export default Dashboard
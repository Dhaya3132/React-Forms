import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [formData, setformData] = useState({
    name: 'Jhon',
    email: 'Jhon@gmail.com',
    password: 'ass',
    confirmpassword: 'ass'
  });

  const [errors, seterror] = useState({});

  const handleClick = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value
    })
  }

  const CheckingForm = () => {

    const newErrors = {};
    if (!formData.name) {
      newErrors.Name = 'The Field is required';
    } else {
      newErrors.Name = 'Success'
    }

    if (!formData.email) {
      newErrors.Email = 'The Field is required';
    } else {
      newErrors.Email = 'Success'
    }

    if (!formData.password) {
      newErrors.Password = 'The Field is required';
    } else {
      newErrors.Password = 'Success'
    }

    if (formData.confirmpassword != formData.password) {

      newErrors.Confirmpassword = 'The Field is required';

    } else {
      newErrors.Confirmpassword = 'Success'
    }


    seterror(newErrors);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    CheckingForm();
    console.log('clicked');
  }

  return (
    <section className='Container'>
      <form>
        <div>
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account</p>
          <hr />

          <label htmlFor="name"><b>Name</b></label>
          <input type="text" id='name' className='name' placeholder='Enter your Name' name="name" value={formData.name} onChange={handleClick} autoFocus />
          {errors.Name == 'The Field is required' ? <p style={{ color: 'red', fontSize: '16px' }}>{errors.Name}</p> : <p style={{ color: 'green', fontSize: '13px' }}>{errors.Name}</p>}

          <label htmlFor="Email"><b>Email</b></label>
          <input type="email" id='Email' className='Email' placeholder='Enter your Email Id' autoFocus name='email' value={formData.email} onChange={handleClick} />
          {errors.Email == 'The Field is required' ? <p style={{ color: 'red', fontSize: '16px' }}>{errors.Name}</p> : <p style={{ color: 'green', fontSize: '13px' }}>{errors.Name}</p>}

          <label htmlFor="password"><b>Password</b></label>
          <input type="password" id='password' className='password' placeholder='Enter your Password' autoFocus name='password' value={formData.password} onChange={handleClick} />
          {errors.Password == 'The Field is required' ? <p style={{ color: 'red', fontSize: '16px' }}>{errors.Name}</p> : <p style={{ color: 'green', fontSize: '13px' }}>{errors.Name}</p>}

          <label htmlFor="password"><b>Confirm Password</b></label>
          <input type="password" id='confirmpassword' className='password' placeholder='Confirm your Password' autoFocus name='confirmpassword' value={formData.confirmpassword} onChange={handleClick} />
          {errors.Confirmpassword == 'The Field is required' ? <p style={{ color: 'red', fontSize: '16px' }}>{errors.Name}</p> : <p style={{ color: 'green', fontSize: '13px' }}>{errors.Name}</p>}



          <label htmlFor="checked">
            <input type="checkbox" name='checked' />Remember me
          </label>

          <p>By creating an account you agree to our <a href="">Terms & Policy</a></p>
          <div className='btn'>
            <button className='cancel-btn'>Cancel</button>
            <button className='submit-btn' onClick={handleSubmit}>Submit</button>
          </div>

        </div>
      </form>
    </section>
  )
}

export default App

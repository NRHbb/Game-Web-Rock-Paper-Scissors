import React from 'react'

function Form () {
  return (
    <form>
        <label>
            Email
            <input type='email' name='email'/>
        </label>
        <div className='button'>
            <div>
                <button type='submit'>Login</button>
            </div>
        </div>
    </form>
  )
}

export default Form

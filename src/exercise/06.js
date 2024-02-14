// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'


function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null);
  const handleSubmit = (event)=>{
    event.preventDefault();
    // alert(event);
  
    onSubmitUsername(inputRef.current.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='forminput'>Username:</label>
        <input ref = {inputRef} id='forminput' type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const inputRef = React.useRef(null);
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm  onSubmitUsername={onSubmitUsername} />
}

export default App

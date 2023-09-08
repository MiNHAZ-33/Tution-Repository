import React, { useState } from 'react';

function FormComponent() {
  const [firstName, setFirstName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const handleFamilyNameChange = (e) => {
    setFamilyName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleClick = () => {
    setMessage(`Saved ${firstName} ${familyName} (${email})`);
  }

  return (
    <div>
      <form>
        <label>
          First name:
          <input type="text" onChange={handleFirstNameChange} />
        </label>
        <br />
        <label>
          Family name:
          <input type="text" onChange={handleFamilyNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" onChange={handleEmailChange} />
        </label>
      </form>
      <button onClick={handleClick}>Save</button>
      <p>{message}</p>
    </div>
  );
}

export default FormComponent;

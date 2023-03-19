import axios from 'axios';

import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useState } from 'react';



export default function FormExampleForm () {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData = () => {
        axios.post(`https://6415c40e351c4aed490ed729.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        })
    }

return (
    <>
  <Form className='create-form'>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' onChange={(e) => setFirstName (e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' onChange={(e) => setLastName (e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
    </Form.Field>
    <Button onClick={postData} type='submit'>Submit</Button>
  </Form>
  </>
);
}

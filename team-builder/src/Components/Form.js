import React, {useState} from 'react';

export default function Form(props) {
    console.log(props)
    const [teamMember, setTeamMember] = useState({
    first_name: '' ,
      last_name: '' ,
      email: '',
      github: ''
    })
    
    const handleChange = e => {
        setTeamMember({...teamMember, [e.target.value]: e.target.value})
    }

    const handleSubmit = e => {

    }

    return (
        <>
        Hey
        </>
    )
}
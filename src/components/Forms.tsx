import React, { ChangeEvent, FormEvent, useState } from 'react'

const Forms = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:""
    })
    const handleSubmit= (event:FormEvent)=>{
        event.preventDefault();
        console.log(formData);
        
    }
    const handleInput = (event:ChangeEvent<HTMLInputElement>) =>{
        const {name,value}= event.target;
        setFormData((prevData)=>({
            ...prevData, 
            [name]:value,
        }))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" >Name</label>
                <input name="name" value={formData.name} id="name" type="text" onChange={handleInput}/>
            </div> 
            <div>
                <label htmlFor="email" >Email</label>
                <input name="email" value={formData.email} id="email" type="email" onChange={handleInput}/>
            </div> <div>
                <label htmlFor="phone" >Name</label>
                <input name="phone" value={formData.phone} id="phone" type="number" onChange={handleInput}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Forms
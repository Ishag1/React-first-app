
// import React from "react";
import React, {useState} from "react";
import FormInfo from "./FormInfo"

const Contact = () => {
const [inputData, setData] = useState({
  fullname:'',
  phone:'',
  email:'',
  msg:'',
});

const [submittedForm, setSubmittedForm] = useState({
  fullname:'',
  phone:'',
  email:'',
  msg:'',
});

const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preval) => {
        return {
            ...preval,
            [name] : value,
        }
    })
};
    const formSubmit = (e) => {
      e.preventDefault();

      alert(`Hi ${inputData.fullname} your has been information`);

      setSubmittedForm({
        fullname: inputData.fullname,
        phone: inputData.phone,
        email: inputData.email,
        msg: inputData.msg,
      })
    
      

    };
    return (
        <>
        <div className="my-5">
        <h1 className="text-center">Contact US</h1>
         </div>
         <div className="container contact_div">
             <div className="row">
                 <div className="col-md-6 col-10 mx-auto">
                     <form onSubmit={formSubmit}>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" 
  className="form-label" >
  FullName
  </label>
  <input 
  type="text" 
  className="form-control" 
  id="exampleFormControlInput1"
  name="fullname"
  value={inputData.fullname}
  onChange={InputEvent}
  placeholder="Enter your name" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" 
  className="form-label" >
   Phone
   </label>
  <input 
  type="number" 
  className="form-control" 
  id="exampleFormControlInput1"
  name="phone"
  value={inputData.phone}
  onChange={InputEvent} 
  placeholder="mobile number" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" 
  className="form-label" >
   Email address 
   </label>
  <input 
  type="email" 
  className="form-control" 
  id="exampleFormControlInput1"
  name="email"
  value={inputData.email}
  onChange={InputEvent}
  placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" 
  className="form-label">
  Message
  </label>
  <textarea 
  className="form-control" 
  id="exampleFormControlTextarea1" 
  rows="3"
  name="msg"
  value={inputData.msg}
  onChange={InputEvent}
  ></textarea>
</div>
<div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>

  </form>
  </div>
  <FormInfo fullName={submittedForm.fullname}/>
  
</div>
</div>
</>
 );
};

export default Contact;
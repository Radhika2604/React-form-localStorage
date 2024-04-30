import { useState } from "react"
import React from 'react'


const Tab1 = () => {
  const [FName,setFName]=useState("")
  const [LNAme,setLName]=useState("")
  const [Email,setEmail]=useState("")
  const [Mobile,setMobile]=useState("")
  const [City,setCity]=useState("")
  const [Country,setCountry]=useState("")



  const handle = () => {
    localStorage.setItem('FName', FName);
    localStorage.setItem('LNAme', LNAme);
    localStorage.setItem('Email', Email);
    localStorage.setItem('Mobile', Mobile);
    localStorage.setItem('City', City);
    localStorage.setItem('Country', Country);
 };
  return (
   <div className='container'>

<form class="row g-3">
    <div class="col-md-4">
      <label for="validationDefault01" class="form-label" >First name</label>
      <input type="text" class="form-control" id="validationDefault01" placeholder='FirstName' required 
      value={FName} onChange={(e)=>{setFName(e.target.value)}}/> 
    </div>

    <div class="col-md-4">
      <label for="validationDefault02" class="form-label" >Last name</label>
      <input type="text" class="form-control" id="validationDefault02" placeholder='LastName' required 
      value={LNAme} onChange={(e)=>{setLName(e.target.value)}}/>
    </div>

    <div class="col-md-4">
      <label for="validationDefaultUsername" class="form-label">Username</label>
      <div class="input-group">
        <span class="input-group-text" id="inputGroupPrepend2">@</span>
        <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" placeholder='Email' required  value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
    </div>

    <div class="col-md-6">
      <label for="validationDefault03" class="form-label">Mobile number</label>
      <input type="text" class="form-control" id="validationDefault03" placeholder='Mobile Number' required value={Mobile} onChange={(e)=>{setMobile(e.target.value)}} />
    </div>
    
    <div class="col-md-3">
      <label for="validationDefault05" class="form-label">City</label>
      <input type="text" class="form-control" id="validationDefault03" placeholder='City' required value={City} onChange={(e)=>{setCity(e.target.value)}} />
      
    </div>
    <div class="col-md-3">
      <label for="validationDefault05" class="form-label">Country</label>
      <input type="text" class="form-control" id="validationDefault03" placeholder='Country' required value={Country} onChange={(e)=>{setCountry(e.target.value)}} />
    </div>
    
    <div class="col-12">
      <button class="btn btn-primary" type="submit" onClick={handle}>Submit form</button>
    </div>
  </form>
 
         {
            <div className="py-5">
               FName: {localStorage.getItem('FName')}
               LNAme: {localStorage.getItem('LName')}
               Email: {localStorage.getItem('Email')}
               Mobile: {localStorage.getItem('Mobile')}
               City: {localStorage.getItem('City')}
               Country: {localStorage.getItem('Country')}
            </div>
         }
   </div>  
   
  )
}

export default Tab1
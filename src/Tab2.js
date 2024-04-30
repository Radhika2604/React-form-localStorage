import React, { useState } from 'react'

const Tab2 = () => {

  const [BName,setBName]=useState("")
  const [Gst,setGST]=useState("")
  const [address,setAddress]=useState("")

  const handle = () => {
    localStorage.setItem('BName', BName);
    localStorage.setItem('Gst', Gst);
    localStorage.setItem('address', address);
 };

  return (
   <div className='container'>

<form class="row g-3">
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label" >Applicant’s Business Name</label>
          <input type="text" class="form-control" id="validationDefault01" placeholder='BusinessName' required value={BName} onChange={(e)=>setBName(e.target.value)}/> 
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label" >GST no.</label>
          <input type="text" class="form-control" id="validationDefault02" placeholder='GSTno.' required value={Gst} onChange={(e)=>setGST(e.target.value)} />
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label" >Address</label>
          <input type="text" class="form-control" id="validationDefault02" placeholder='Address' required value={address} onChange={(e)=>setAddress(e.target.value)}/>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit" onClick={handle}>Submit form</button>
        </div>
      </form>
 

      {
            <div className="py-5">
               FName: {localStorage.getItem('BName')}
               LNAme: {localStorage.getItem('Gst')}
               Email: {localStorage.getItem('address')}
    
            </div>
         }

    </div>
   
  )
}

export default Tab2
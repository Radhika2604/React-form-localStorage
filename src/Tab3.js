import React,{useState} from 'react'

const Tab3 = () => {
  const [LonName,setLoanName]=useState("")
  const [Interest,setIntrest]=useState("")
  const [LoanTenure,setLoanTenure]=useState("")

  const handle = () => {
    localStorage.setItem('LonName', LonName);
    localStorage.setItem('Interest', Interest);
    localStorage.setItem('LoanTenure', LoanTenure);
 };
  return (
   
    <div className='container'>

    <form class="row g-3">
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label" >Loan Amount</label>
          <input type="text" class="form-control" id="validationDefault01" placeholder='LoanAmount' required value={LonName} onChange={(e)=>setLoanName(e.target.value)}/> 
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label" >Interest Rate</label>
          <input type="text" class="form-control" id="validationDefault02" placeholder='InterestRate' required value={Interest} onChange={(e)=>setIntrest(e.target.value)}/>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label" >Loan Tenure</label>
          <input type="text" class="form-control" id="validationDefault02" placeholder='LoanTenure' required value={LoanTenure} onChange={(e)=>setLoanTenure(e.target.value)}/>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit"  onClick={handle}>Submit form</button>
        </div>
      </form>
      {
            <div className="py-5">
               FName: {localStorage.getItem('LonName')}
               LNAme: {localStorage.getItem('Interest')}
               Email: {localStorage.getItem('LoanTenure')}
    
            </div>
         }

       </div>  
   
  )
}

export default Tab3
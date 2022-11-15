const Cardd= () => {

    return(
    <div  className="trmoney">
<div className="col-auto"  >
    <label className="visually-hidden"  placeholder="Enter Your Username"for="autoSizingInputGroup"> Enter Your Username</label>
    <div className="input-group">
      <div className="input-group-text">@</div>
      <input type="text" className="form-control"   id="autoSizingInputGroup" placeholder="Username"></input>
      
    </div>



<br></br>



     
<div className="row g-3">
<br></br>
  <div className="col-sm-7">
 
    <input type="text" className="form-control" placeholder="Enter Full Name" aria-label="Enter Full Name"></input>
  </div>
  <div className="col-sm">
    <input type="text" className="form-control" placeholder="Enter A Mount" aria-label="Enter A Mount"></input>
  </div>
  





  <div className="col-md-3">
    
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose Coin...</option>
      <option>DOLLAR</option>
      <option>SHAKEL</option>
      <option>DENAR J</option>
    </select>
  </div>
  
 
  <div className="col-md-6">
   
    <input type="email"  placeholder="Enter A Email"className="form-control" id="inputEmail4"></input>
   <br></br>
    </div>
  </div>
  <div className="col-md-6">
   
    <input type="password"  placeholder="Enter Your Bassword" className="form-control" id="inputPassword4"></input>

    <p> Agree To Our <a href="#">Terms & Privacy</a>.</p>
  </div>
  <button type="button" className="btn btn-primary btn-sm">Sent</button>

    
</div>
</div>
)

}

export default Cardd
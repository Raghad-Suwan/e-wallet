const Cardd= () => {

    return(
    <div  className="trmoney">

      
<div className="col-auto"  id="one" >
<div className="user">
    <label className="visually-hidden"  placeholder="Enter Your Username"for="autoSizingInputGroup"> Enter Your Username</label>
    <div className="input-group">
      <div className="input-group-text">@</div>
      <input type="text" className="form-control"   id="autoSizingInputGroup" placeholder="Username"></input>
      
    </div>  </div>
     
    <div className="row g-3">
    



     
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
  </div>
 <div className="email">
  <div className="col-md-7">
   
    <input type="email"  placeholder="Enter A Email"className="form-control" id="inputEmail4"></input>
  
    </div>
    <div className="row g-1.5">
    
  </div></div>
  <div className="bassw">
  <div className="col-md-7">
   
    <input type="password"  placeholder="Enter Your Bassword" className="form-control" id="inputPassword4"></input>
    </div> </div>
    <p> Agree To Our <a href="#">Terms & Privacy</a>.</p>
  </div>
<div className="btnn">
  <button type="button" className="btn btn-outline-primary ">Sent</button>
  
</div> 
</div>
</div>
)

}


export default Cardd
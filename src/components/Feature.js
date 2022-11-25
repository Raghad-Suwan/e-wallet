const Feature= () => {

    return(
<div className="cards">
      <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          
        <div   className="card-top">
        <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="./one.jpeg" role="./" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
          <img src="/.one.jpeg " className="card-img-top" alt="/.one.jpeg" ></img>
          <div className="card-body">
            <h5 className="card-title">Friendly App</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="two.jpeg" className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Privecy</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          
       
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <div   className="card-top">
          <img src="./three.jpeg" className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Support</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   )     

}


export default Feature 
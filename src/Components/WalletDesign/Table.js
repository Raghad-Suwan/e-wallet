import './Table.css';
  

const  Table= () => {
    return (
 
  <>
  
<div className='container'>
<table className="table caption-top">
 
  <thead>
    <tr>
      <th scope=" col ">Type</th>
      <th scope=" col ">Mount </th>
      <th scope=" col ">Transaction ID</th>
   
      <th scope=" col ">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
          <td>Pay Marchants</td>
          <td>2000</td>
          <td>125.362.2</td>
         
          <td>12.12.2022</td>
    </tr>
    <tr>
          <td>Deposite Money</td>
          <td>510</td>
          <td>178.256.3</td>
        
          <td>25.3.2022</td>
    </tr>
    <tr>
          <td>Transfer Money</td>
          <td>3566</td>
          <td>258.35.4</td>
       
          <td>17.3.2022</td>
    </tr>

    <tr>
          <td>Transfer Money</td>
          <td>8256</td>
          <td>252.36.4</td>
    
          <td>26.2.2022</td>
        </tr>
        <tr>
          <td>Pay Marchants</td>
          <td>74120</td>
          <td>185.362.2</td>
      
          <td>31.12.2022</td>
        </tr>
        <tr>
          <td>Deposite Money</td>
          <td>850</td>
          <td>150.276.9</td>
      
          <td>1.8.2022</td>
        </tr>
        
        <tr>
          <td>Transfer Money</td>
          <td>8955</td>
          <td>244.75.7</td>
     
          <td>9.3.2022</td>
        </tr>
  </tbody>
</table>
</div>
  </>
  );
}
  
export default Table;



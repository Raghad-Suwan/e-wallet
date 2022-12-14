import './Table.css';
  

const  Table= () => {
    return (
 
  
      <table>
        <tr>
          <th><a>Type</a></th>
          <th><a>A mount</a></th>
          <th> <a>Transaction ID</a></th>
         
          <th><a>Adress</a></th>
          <th><a>Date</a></th>
          
     
        </tr>
        <tr>
          <td>Pay tp Marchants</td>
          <td>2000</td>
          <td>125.362.2</td>
          <td>Nablus</td>
          <td>12.12.2022</td>
        </tr>
        <tr>
          <td>Deposite</td>
          <td>510</td>
          <td>178.256.3</td>
          <td>Ramallah</td>
          <td>25.3.2022</td>
        </tr>
        <tr>
          <td>Transfer Money</td>
          <td>3566</td>
          <td>258.35.4</td>
          <td>Qalqilia</td>
          <td>17.3.2022</td>
        </tr>
            
        
      </table>

  );
}
  
export default Table;
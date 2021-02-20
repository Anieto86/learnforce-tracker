import React, {useState, useEffect} from "react";
import axios from "axios";

//todo styled and icons
// import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";

function Table() {

  const [data, setData] = useState([]); 


  useEffect(() => {
    axios
    .get("/api/tickets")
    .then((res) => {
      console.log(res);
      setData(res.data);
    })
    .catch((err) => console.log(err));
}, []);




  return (
    <table className='container table table-striped'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>TITLE</th>
          <th scope='col'>CLIENT</th>
          <th scope='col'>CRM</th>
          <th scope='col'>SUBMITED</th>
          <th scope='col'>STATUS</th>
          <th scope='col'></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
            <BsThreeDots />
          </td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
            <BsThreeDots />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;

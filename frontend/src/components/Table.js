import React, { useState, useEffect } from "react";
import axios from "axios";

//todo styled and icons

import { BsThreeDots } from "react-icons/bs";
import { FaFilter , FaCloudUploadAlt } from "react-icons/fa"
import { ImSearch } from "react-icons/im";

//todo styled and icons
import styled from "styled-components";

const ButtonStyle = styled.button`
 border: 1px solid #21262e;

`;

const InputStyle = styled.input`
border: 1px solid #21262e;
`;

const SearchStyle = styled.div`
position: relative;
  color: #aaa;
  font-size: 16px;
`;
const StyledDropdown = styled.div`
  .remove-caret.dropdown-toggle::after {
    display: none;
  }
`;

function Table() {
  const [tickets, setTickets] = useState([]);

  const [search, setSearch] = useState('');


  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tickets")
      .then((res) => {
        console.log(res);
        setTickets(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

//!filter function
  const searchTicket = tickets.filter(ticket => {
  return ticket.title.toLowerCase().includes(search.toLowerCase())
})
 
  
  return (
    <div className='container'>
      <h2> Feature Resquest Tracker</h2>
      <hr />
    <div className='row'>
        <SearchStyle className='col-7'>
          {/* <span className=''>< ImSearch/></span> */}
          <InputStyle 
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type='text'
          className='form-control'
          id='formGroupExampleInput'
          placeholder='filter by title'
        />
        </SearchStyle>
        
      <div className='col-3'>
        < ButtonStyle className="btn btn"> <FaFilter/>Show filter options</ButtonStyle>
      </div>
      <div className='col-2'>
      < ButtonStyle className="btn btn"> <FaCloudUploadAlt/> Export CSV</ ButtonStyle>
      </div>
    </div>
  
    
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
        {console.log(tickets, "tickets")}
        {searchTicket.map((ticket , i) => (
          <tr key={i}>
            <th scope='row'>{ticket.id}</th>
            <td>{ticket.title}</td>
            <td >{ticket.client}</td>
            <td >{ticket.crm}</td>
            <td >{ticket.status}</td>
            <td>
              <StyledDropdown className='dropdown open'>
                <button
                  className='btn btn dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton1'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                 <BsThreeDots/>
                </button>
                <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                  <li>
                    <a className='dropdown-item' href={"/"}>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href={"/"}>
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href={"/"}>
                      Something else here
                    </a>
                  </li>
                </ul>
              </StyledDropdown>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
}

export default Table;

import React, { useState, useEffect } from "react";
import axios from "axios";

//todo styled and icons
import Dropdown from "react-bootstrap/Dropdown";

// import { BsThreeDots } from "react-icons/bs";
import { FaFilter, FaCloudUploadAlt } from "react-icons/fa";
//import { ImSearch } from "react-icons/im";

//todo styled and icons
import styled from "styled-components";

const TitleStyled = styled.h2`
  display: flex;
  justify-content: flex-start;
`;

const LineStyled = styled.hr`
  padding: 1.5px;
  background: rgb(7, 103, 195);
  background: linear-gradient(
    90deg,
    rgba(7, 103, 195, 1) 14%,
    rgba(175, 172, 172, 1) 14%
  );
  margin-bottom: 30px;
`;

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

const TableStyle = styled.table`
  margin-top: 50px;
  text-align: left;
`;

const StyledDropdown = styled.div`
  color: #0599fd;
  .remove-caret.dropdown-toggle::after {
    display: none;
  }

`;

function Table() {
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState("");

  //!API Call
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
  const searchTicket = tickets.filter((ticket) => {
    return ticket.title.toLowerCase().includes(search.toLowerCase());
  });

 

  return (
    <div className='container'>
      <div>
        <TitleStyled> Feature Request Tracker</TitleStyled>
      </div>

      <LineStyled />

      <div className='row' style={{ marginBotton: "10px" }}>
        <SearchStyle className='col-7 d-grid block'>
          <InputStyle
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type='text'
            className='form-control'
            id='formGroupExampleInput'
            placeholder='filter by title'
          />
        </SearchStyle>

        <div className='col-3 d-grid block'>
          <ButtonStyle className='btn btn '>
            <FaFilter />
            Show filter options
          </ButtonStyle>
        </div>
        <div className='col-2 d-grid block'>
          <ButtonStyle className='btn btn '>
            <FaCloudUploadAlt /> Export CSV
          </ButtonStyle>
        </div>
      </div>

      <TableStyle className='container table table-striped'>
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
          {searchTicket.map((ticket, i) => (
            <tr key={i}>
              <th scope='row'>{ticket.id}</th>
              <td>{ticket.title}</td>
              <td>{ticket.client}</td>
              <td>{ticket.crm}</td>
              <td>{ticket.submited}</td>
              <td>{ticket.status}</td>
              <td>
              <StyledDropdown >
                <Dropdown >
                    <Dropdown.Toggle
                      style={{ color: '#0599fd', size: '20px' }}
                       variant= 'btn btn'
                       id="dropdown-basic"
                       className="remove-caret"    > ...
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey='baudratestate1200'></Dropdown.Item>
                    <Dropdown.Item eventKey='baudratestate2400'>
                      Set status
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='baudratestate4800'>
                      Planned
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='baudratestate9600'>
                      In Development
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='baudratestate9600'>
                      Actions
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='baudratestate9600'>
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='baudratestate9600'>
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </StyledDropdown >
              </td>
            </tr>
          ))}
        </tbody>
      </TableStyle>
    </div>
  );
}

export default Table;

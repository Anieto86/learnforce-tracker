import React, {useState, useEffect} from "react";
import axios from "axios";

import { TextField } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

import styled from "styled-components";


const BtnRequestStyled = styled.button`
float: left;
margin-top:20px;
background-color:#0599fd;
`;

function NewRequest() {
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
   axios
     .get("http://localhost:5000/api/tickets")
     .then((res) => {
       console.log(res);
       setTickets(res.data);
     })
     .catch((err) => console.log(err));
 }, []);


  const handleUpdate = () => {

  }

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <form className='container'>
      <div className='row'>
        <div className='col-6'>
          <TextField
            id='standard-full-width'
            label='Title*'
            style={{ margin: 8 }}
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className='col-6'>
          <TextField
            id='standard-full-width'
            label='My new feacture'
            style={{ margin: 8 }}
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>

      <div className='row'>
        <div className='col-6'>
          <TextField
            id='standard-full-width'
            label='Client*'
            style={{ margin: 8 }}
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className='col-6'>
          <TextField
            id='standard-full-width'
            label='Client*'
            placeholder='Example input placeholder'
            style={{ margin: 8 }}
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <TextField
            id='standard-full-width'
            label='e3 Contact*'
            style={{ margin: 8 }}
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className='col-6'>
          <InputLabel htmlFor='age-native-simple'>--Select crm--</InputLabel>
          <Select native value={state.age} onChange={handleChange}>
            <option aria-label='None' value='' />
            <option value={10}>Robin Bleck</option>
            <option value={20}>Ben Borin</option>
            <option value={30}>Dan Potter</option>
            <option value={40}>Johnny Zhou</option>
          </Select>
        </div>
      </div>

      <BtnRequestStyled
        onClick={handleUpdate}
        type='button' className='btn btn-primary btn-lg'>Request feature!</BtnRequestStyled>
    </form>
  );
}

export default NewRequest;

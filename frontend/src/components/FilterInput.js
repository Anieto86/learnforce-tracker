import React from "react";

function FilterInput() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <input
            type='text'
            className='form-control'
            id='formGroupExampleInput'
            placeholder='Example input placeholder'
          />
        </div>
        <div className='col-3'>
          <input
            type='text'
            className='form-control'
            id='formGroupExampleInput'
            placeholder='Example input placeholder'
          />
        </div>
        <div className='col-3'>
          <input
            type='text'
            className='form-control'
            id='formGroupExampleInput'
            placeholder='Example input placeholder'
          />
        </div>
      </div>
    </div>
  );
}

export default FilterInput;

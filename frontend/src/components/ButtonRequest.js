import React from 'react'

//todo styled and icons
// import styled from "styled-components";
import {GoPlus} from "react-icons/go";

function ButtonRequest() {
    return (
        <div>
            <button type="button" class="btn btn-primary btn-lg"><GoPlus/> Request new feature</button>
        </div>
    )
}

export default ButtonRequest

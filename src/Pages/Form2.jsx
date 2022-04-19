

import React from "react";
import { RegistrationContext } from "../Context/RegistrationContext";
import { Navigate } from "react-router-dom";


export const Form2 = () => {
    const {
        dispatch,
        stateofResidence,
        address,
        pincode,
        name,
        age,
        dateofBirth,
        handleSubmit
    } = React.useContext(RegistrationContext);

    // if(!name || !age || !dateofBirth) {
    //     return <Navigate to = "/registration/one"/>;
    // }

    return (
        <div>
            <input placeholder = "State Of Residence"
            type = "text"
            value = {stateofResidence}
            onChange = {(e) => 
            dispatch({
                type: "CHANGE_STATE_OF_RESIDENCE",
                payload: e.target.value
            })
        }
        />
        <br />
         
        <input placeholder = "Address"
            type = "text"
            value = {address}
            onChange = {(e) => 
            dispatch({
                type: "CHANGE_ADDRESS",
                payload: e.target.value
            })
        }
        />
        <br />

        <input placeholder = "Pincode"
            type = "text"
            value = {pincode}
            onChange = {(e) => 
            dispatch({
                type: "CHANGE_PINCODE",
                payload: e.target.value
            })
        }
        />
        <br />

             <button 
            enabled = {
            !stateofResidence || !address || !pincode || !name || !age|| !dateofBirth}
            onClick = {handleSubmit}
             >
            SUBMIT

             </button>
         </div>
    );
};
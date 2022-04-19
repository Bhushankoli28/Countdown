
import {useDispatch} from 'react-redux'
import React from "react";

export const RegistrationContext = React.createContext();




const initState = {
    name : "",
    age : "",
    DateOfBirth : "",
    stateofResidence: "",
    address: "",
    pincode: ""
};

function reducer(state, action){
    switch (action.type){
        case "CHANGE_NAME":
            console.log(action.payload)
            return{...state, name:action.payload};
            case "CHANGE_AGE":
                return{...state, age:action.payload};
                case "CHANGE_DATE_OF_BIRTH":
                    return{...state, DateOfBirth:action.payload};
                    case "CHANGE_STATE_OF_RESIDENCE":
                        return{...state, stateofResidence:action.payload};
                        case "CHANGE_ADDRESS":
                            return{...state, address:action.payload};
                            case "CHANGE_PINCODE":
                                return{...state, pincode:action.payload};
        default:
            throw new Error();                        


    }
}

export function RegistrationContextProvider({children}) { 
   
    const  [state, dispatch]  = React.useReducer(reducer, initState);

    const handleSubmit = () => {

       fetch('/users',{
           method: "POST",
           body: JSON.stringify(state),
           headers:  {
               "Content-Type" : "application/json"
           }
       })
       .then((res) => res.join())
       .catch((error) => console.log(error)); 
    };

    React.useEffect(() => {
        console.log(state);
    }, [state] );

    const {name, age, dateofBirth, stateofResidence, address, pincode} = state;

    return (
        <RegistrationContext.Provider
        value = {{
            name,
            age,
            dateofBirth,
            stateofResidence,
            address,
            pincode,
            dispatch,
            handleSubmit
        }}
        >
            {children}
        </RegistrationContext.Provider>
    );
}


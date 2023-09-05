import { UserData } from "./UserData"
import PostalCode from "./PostalCode"
import NipInput from "./NipInput"
import { contactData } from "../../Data/contactInputsData"
import { useReducer, useState } from "react"

export default function UserContactFields({readOnly, data}) {

    const makeValue=({contactData,data})=>{
    const initValue = {
        nip: "",
        postal_code: "",
      };
      contactData.forEach(
        (e)=>{
            initValue[e.name]='';
        }
        
      )
       if(data!=null)
       {
        Object.entries(data).forEach(
            ([key,value])=>{
                initValue[key]=value
            }
        )
       }
       
      
       return initValue
    }
    
      const reducer = (state, action) => {
     
        const id = action.target.id;
        let value = action.target.value;
        
        if(id==='nip' || id=='postal_code')
        {
        while (!value.match(/^[0-9\-]*$/) && value.length > 0) {
          const newValue = value.slice(0, -1);
    
          value = newValue;
        }
      }
        const newState = state;
        newState[id] = value;
    
        return { ...newState };
      };
    const [state, dispatch] = useReducer(reducer,{contactData: contactData, data: data},makeValue );

    const [wasPostTouched, touchPost] = useState(false);
  return (
    <div className="m-10 mt-12 flex flex-wrap gap-8">
            <UserData onChange={dispatch} value={state[contactData[0].name]} {...contactData[0]} readOnly={readOnly} />
            <NipInput onChange={dispatch}
                value={state.nip} readOnly={readOnly}/>
           
            <UserData onChange={dispatch} value={state[contactData[1].name]} {...contactData[1]} />
            <PostalCode wasPostTouched={wasPostTouched} value={state.postal_code} onChange={dispatch} onBlur={() => touchPost(true)}
                readOnly={readOnly}/>
            <UserData onChange={dispatch} value={state[contactData[2].name]} {...contactData[2]} readOnly={readOnly} />
          </div>
  )
}
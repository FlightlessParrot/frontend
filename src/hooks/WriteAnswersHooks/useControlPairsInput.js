import { useReducer } from "react"

export default function useControlPairsInput(number) {
    const lazyCreator=(number)=>{
    
        const state=[]
        for(let i=1;i<=number;i++)
        {
            state.push(['',''])
        }
   
        return [...state]
    }
    const reducer=(state, action)=>{
        if(action?.reset)
        {
            const initialState=lazyCreator(action.reset)
            return [...initialState]
        }
        const newState=state
        const element=action.target
        const name=element.name
        const value=element.value
        const metaArray=name.split('-')
        newState[Number(metaArray[1])][Number(metaArray[2])]=value

        return[...newState]
    }
    const [state, dispatch]=useReducer(reducer,number, lazyCreator)

    return[state, dispatch]
}
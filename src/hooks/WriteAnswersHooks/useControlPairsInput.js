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
        if(action?.edit)
        {
            const editState=[]
            const currentElements=[]
            action.edit.forEach(e => {
                currentElements.push(e)
                if(currentElements.filter((s)=>s.brother===e.id).length>0)
                {
                    const brotherIndex=currentElements.findIndex(b=>b.brother===e.id);
                    const index = editState.findIndex(element=>element[0]===currentElements[brotherIndex].text);
                    editState[index].push(e.text)
                    
                }else{
                    editState.push([e.text])
                }

            });
            console.log(editState)
            return [...editState]
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
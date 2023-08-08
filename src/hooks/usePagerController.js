import { useReducer } from "react"
export default function usePagerController(blocks, howManyPerPage) {
    const pages=Math.ceil(blocks.length/howManyPerPage)
    const initValue={
        currentPage: 1,
        howManyPages:pages,
        allElements: blocks,
        elements: blocks.filter((e,i)=>Math.ceil((i+1)/howManyPerPage)===1)
    }
    const [state, dispatch]=useReducer(reducer, initValue)


    function reducer(state, action)
    {
        const newState=state
        switch(action)
        {

            case 'next':
            if(state.currentPage<state.howManyPages)
            {
                newState.currentPage++
            }
            break;

            case 'last':
            newState.currentPage=state.howManyPages
            break;

            case 'back':
                if(state.currentPage>1)
                {
                    newState.currentPage--
                }
            break;

            case 'first':
                newState.currentPage=1
            break;

            default:
                if(action>=1 && action<=state.howManyPages)
                {
                newState.currentPage=action
                }
                break;
                
        }
        newState.elements=newState.allElements.filter((e,i)=>Math.ceil((i+1)/howManyPerPage)===newState.currentPage)
        return {...newState}
    }
  return [state, dispatch]
}
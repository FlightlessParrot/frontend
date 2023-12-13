import { useReducer } from "react"
export default function useControlCategoriesAndUndercategories() {
    const categoriesReducer=(state, action)=>{
      if(action?.type==='new')
      {
        return {...action.data}
      }
        const name=action.target.name.slice(0,-2)
        const ifExists=state[name].find(e=>e===action.target.value)
      
        if(ifExists)
        {
          const newState=state
          newState[name]=state[name].filter(e=>e!==action.target.value)
          return {...newState}
        }else{
          const newState=state
          newState[name].push(action.target.value)
          return {...newState}
        }
  
      }
      const [checkedCategories, dispatchCheckedCategories]=useReducer(categoriesReducer,{
        categories: [], undercategories: []
      })

      return [checkedCategories, dispatchCheckedCategories]
}

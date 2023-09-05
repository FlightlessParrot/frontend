import { Box, Wrap, Checkbox } from "@chakra-ui/react"

export default function CategoriesCheckboxes({name, categoriesArray, children, isChecked, onChange}) {
  
    
    const categoryjsx= categoriesArray.map((e)=>{
    const checked= isChecked? isChecked[name.slice(0,-2)].includes(e.id.toString()) :undefined
   
    return <Checkbox name={name} key={e.id} value={e.id} onChange={onChange} isChecked={checked}>{e.name} </Checkbox>
    }
    
    )
    
  return (
  <Box>
  <b>{children}</b>
  <Wrap spacing={6}>
  {categoryjsx}
  </Wrap></Box>
  )
}
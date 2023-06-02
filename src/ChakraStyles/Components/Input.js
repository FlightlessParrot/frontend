export const Input= {
    parts: ['addon', 'field', 'element'],
    variants: {
      outline: (props)=>({
        field:{
        bg:  props.project==='project' ?  'white': 'transparent',
        color: props.project==='project' ?  'black': 'white', 
        }
      })
    }
  }
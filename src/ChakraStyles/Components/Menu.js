import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    // this will style the MenuButton component
    fontWeight: 'medium',
    bg: 'transparent',
    
    
  },
  list: {
    // this will style the MenuList component
    py: '4',
    borderRadius: 'xl',
    border: 'none',
   
   // bg: 'teal.500',
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    color: 'gray.900',
   
  },
  groupTitle: {
    // this will style the text defined by the title prop
    // in the MenuGroup and MenuOptionGroup components
    textTransform: 'uppercase',
    color: 'black',
    textAlign: 'center',
    letterSpacing: 'wider',
    opacity: '0.7',
  },
 
  divider: {
    // this will style the MenuDivider component
    my: '4',
    borderColor: 'gray.900',
    borderBottom: '2px dotted',
  },
})
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle })
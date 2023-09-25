import PageSwitcher from "../../../Components/PageSwitcher"
import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
export default function Categories() {
 
    const pageSwitcherLinks=[
        {
            url: '/user/admin/categories/new',
            name: 'Stwórz kategorie'
        },{
            url: '/user/admin/categories/delete',
            name: 'Usuń kategorie'
        }
    ]
  return <Box>
    <PageSwitcher  links={pageSwitcherLinks} />
    <Outlet />
    
    </Box>
  
}
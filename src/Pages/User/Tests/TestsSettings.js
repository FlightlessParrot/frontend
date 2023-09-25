import { Box } from "@chakra-ui/react";
import PageSwitcher from "../../../Components/PageSwitcher";

import { Outlet } from "react-router-dom";
export default function TestsSettings() {
    const pageSwitcherLinks=[
        {
            url: '/user/tests/settings/new',
            name: 'Stwórz pakiet'
        },{
            url: '/user/tests/settings/delete',
            name: 'Usuń pakiet'
        }
    ]
  return (
  <>
    <PageSwitcher links={pageSwitcherLinks} />
    <Box padding={[2,4,4,8,16]}>
    <Outlet />
    </Box></>
  )
}
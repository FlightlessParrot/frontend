import { Box } from "@chakra-ui/react";
import PageSwitcher from "../../../Components/PageSwitcher";

import { Outlet } from "react-router-dom";
export default function TestsSettings() {
    const PageSwitcherLinks=[
        {
            url: '/user/tests/settings/new',
            name: 'Stwórz test'
        },{
            url: '/user/tests/settings/delete',
            name: 'Usuń test'
        }
    ]
  return (
  <>
    <PageSwitcher links={PageSwitcherLinks} />
    <Box padding={[2,4,4,8,16]}>
    <Outlet />
    </Box></>
  )
}
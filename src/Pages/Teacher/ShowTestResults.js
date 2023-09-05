import { useLoaderData } from "react-router-dom";
import UniversalTable from "../../Components/Tables/UniversalTable";
import { Box } from "@chakra-ui/react";
export default function ShowTestResults() {
    const loaderData = useLoaderData()
    console.log(loaderData)

  return (
    <Box my={[4,8,8,16,32]}>
    <UniversalTable data={loaderData.results} headersObject={loaderData.headers} name='Wyniki egzaminu' />
    </Box>
  )
}
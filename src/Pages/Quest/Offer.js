import { Box } from "@chakra-ui/react";
import Title from "../../Components/Title";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../../Components/Cards/ProductCard";
import Pager from "../../Components/Pager/Pager";
import QuestLayout from "../../Components/Layouts/QuestLayout";

export default function Offer() {
    const loaderData=useLoaderData()
    console.log(loaderData)
    const subscriptions=loaderData.subscriptions.map(e=><ProductCard {...e} key={e} />)
  return (
    <QuestLayout>
        <Title title='Zobacz naszą ofertę' />
    <Box p={[2,4,4, 8, 16]}>
        <Pager blocks={subscriptions} howManyPerPage={25} wrap/>
    </Box>
    </QuestLayout>
  )
}
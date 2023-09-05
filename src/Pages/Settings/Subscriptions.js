import { Box, Wrap } from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"
import Title from "../../Components/Title"
import OwnedSubscriptionCard from "../../Components/Cards/OwnedSubscriptionCard"
import ProductCard from "../../Components/Cards/ProductCard"
import {useEffect, useState} from "react"
export default function Subscriptions() {
    const loaderData=useLoaderData()
    const [productId, setProductId]=useState(null)
    console.log(productId);
    console.log(loaderData)
    const ownedSubscriptions= loaderData.ownedSubscriptions.map(e=><OwnedSubscriptionCard key={e.id} name={e.name} expiration_date={e.pivot.expiration_date} />)
    const unownedSubscriptions=loaderData.unownedSubscriptions.map(e=><ProductCard key={e.id} {...e} OnClickReturnId={setProductId}/>)

    useEffect(
        ()=>{
            if(productId)
            {
                alert('Użytkownik jest przekierowywany do płatności za subskrypcję o id: '+productId)
                setProductId(null)
            }
        },[productId, setProductId]
    )
  return (
    <Box >
        <Title title='Subskrypcje' />
        <Box p={[2,4,4,8,16]}>
            <Box >
        <h2 className="lead">Aktywne subskrypcje</h2> 
        <Wrap spacing={'25px'} justify={['center','start']} py={[4,8,16]}>
            {ownedSubscriptions}
        </Wrap>
        </Box>

    <Box my={[4,4,8,16]}>
        <h2 className="lead">Zakup subskrypcję</h2>
        <Wrap  py={[4,8,16]} spacing={'25px'} justify={['center','start']}>
            {unownedSubscriptions}
        </Wrap>
        </Box>
        </Box>
    </Box>
  )
}
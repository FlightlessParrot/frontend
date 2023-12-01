import { Form, useLoaderData} from "react-router-dom";
import ProductCard from "../../Components/Cards/ProductCard";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";
import { TestUserLayout } from "../../Components/Layouts/UserLayout";
import { useCallback, useEffect, useState } from "react";
import GreenPrice from "../../Components/Price/GreenPrice";
import universalFetchSchema from "../../fetch/universalFetchSchema";

export default function BuyProduct() {
  const loaderData = useLoaderData();
  const [price, setPrice] = useState('');
  const [code, setCode]=useState('')
  const [error, setError]=useState(false)
  console.log(loaderData)
    const howMuch =
      loaderData.subscription?.discount_price !== null
        ? loaderData.subscription.discount_price : loaderData.subscription.price
        
  useEffect(() => {
  
    setPrice(howMuch);
  },[loaderData, setPrice, howMuch]);
 
  const getDiscount=useCallback(
    async (code, setPrice,setError)=>{
      const response = await universalFetchSchema(null,'/code/'+code,'get', '/login',true )
      const discount=response.discount===null ? 0 : response.discount;
      setPrice((howMuch*(100-discount)/100).toFixed(2))
      setError(response.discount===null)
    },[]
  )
  const clickHandler=(e)=>{
    e.preventDefault()
    if(code!=='')
    {
      getDiscount(code,setPrice, setError)
    }else{
      setPrice(howMuch)
    }
    
  }
  return (
    <TestUserLayout>
      <Form method='post' >
       <input name='price' hidden readOnly value={price} />
      <Box p={[2, 4, 4, 8, 16]}>
        <div className="flex flex-col md:grid grid-cols-3 gap-20   md:gap-6  align-center p-12">
          <div className="">
            <ProductCard {...loaderData.subscription} />
          </div>{" "}
          <div className="col-span-2 ">
            <img src={process.env.REACT_APP_BACKEND + loaderData.subscription.path}  className="w-full mb-8"/>
          <section
            
            dangerouslySetInnerHTML={{
              __html: loaderData.subscription.description,
            }}
          /></div>
        </div>
        <div method='post' onSubmit={e=>e.preventDefault()} className="flex my-12">
            <FormControl isInvalid={error}>
              <FormLabel>Podaj kod rabatowy (opcjonalnie)</FormLabel>
              <Input name='code' value={code} onChange={e=>setCode(e.target.value)} />
              <FormErrorMessage>Kod jest niepoprawny</FormErrorMessage>
            </FormControl>
            <button onClick={clickHandler} className="action-button">Zastosuj</button>
        </div>
        <div className="float-right p-12 my-20 border-sel border-t-2 pr-[20%]">
          <p className="bold-serif text-xl gap-6 flex items-center ">
            Cena po uwzględnieniu zniżek <GreenPrice>{price}</GreenPrice>{" "}
          </p>
          <div className="flex p-4 justify-center">
            {" "}
            <Button type='submit' colorScheme="green" paddingX={20} margin={6}>Zobacz więcej</Button>
          </div>
        </div>
      </Box>
      </Form>
    </TestUserLayout>
  );
}

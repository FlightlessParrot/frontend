import { useLoaderData, Form, useActionData } from "react-router-dom";
import { useState } from "react";
import SubscriptionForm from "./SubscriptionForm";
import { useEffect } from "react";
import useShowToast from "../../hooks/useShowToast";


export default function EditSubscription() {
  const loaderData = useLoaderData();
  const actionData =useActionData()
  const [price, setPrice] = useState(loaderData.subscription.price);
  const [name, setName] = useState(loaderData.subscription.name);
  const [date, setDate] = useState(loaderData.subscription.license_duration);
  const [lowestPrice, setLowestPrice]=useState(0);
  const [newPrice, setNewPrice] = useState(0);
  const [check, setCheck] = useState(false);
  const toast=useShowToast()
  useEffect(() => {
    setPrice(loaderData.subscription.price);
    setName(loaderData.subscription.name);
    setDate(loaderData.subscription.license_duration);
  }, [setDate, setName, setPrice, loaderData.subscription]);
  useEffect(
    ()=>{
        if(actionData?.subscription)
        {
            toast(
                {
                    title: 'Sukces',
                    description:'Zmieniono subskrypcję',
                    status:'success'
                }
            )
        }
        if(actionData?.error)
        {
            toast(
                {
                    title: 'Błąd',
                    description:'Nie zmieniono subskrypcji',
                    status:'error'
                }
            )
        }
    },[actionData]
  )
   useEffect(
    ()=>{
        if(loaderData.subscription.discount_price!==null )
        {
            setNewPrice(loaderData.subscription.discount_price)
            setCheck(true)
        }
    },[loaderData.subscription.discount_price, setNewPrice, setCheck]
   )
   useEffect(
    ()=>{
        if(loaderData.subscription.lowest_price!==null )
        {
            setLowestPrice(loaderData.subscription.discount_price)
        }
    },[loaderData.subscription.lowest_price_price, setLowestPrice]
   )
  return (
   
      <Form method="post">

        <input hidden readOnly name='_method' value='put' />
        <SubscriptionForm
          setName={setName}
          name={name}
          date={date}
          setDate={setDate}
          price={price}
          setPrice={setPrice}
          discountPrice={newPrice}
          setDiscountPrice={setNewPrice}
          discountCheckbox={check}
          setDiscountCheckbox={setCheck}
          lowestPrice={lowestPrice}
          setLowestPrice={setLowestPrice}
        />
        <button className="action-button float-right">
          Edytuj subskrypcję
        </button>
      </Form>
  
  );
}

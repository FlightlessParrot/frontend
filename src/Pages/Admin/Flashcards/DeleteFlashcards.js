import { Box, FormControl, FormLabel, Select, Stack, Wrap } from "@chakra-ui/react";
import Title from "../../../Components/Title";
import { useLoaderData, useNavigate, } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import SearchBar from "../../../Components/SearchBars/SearchBar";
import getCSRFToken from "../../../cookies/getCSRFToken";
import FlashcardCard from "../../../Components/Cards/FlashcardCard";

import universalFetchSchema from "../../../fetch/universalFetchSchema";
import useShowToast from "../../../hooks/useShowToast"
import Pager from "../../../Components/Pager/Pager";
export default function DeleteFlashcards() {
  const loaderData = useLoaderData();
  const [subscription, setSubscription]=useState('')
  const [search, setSearch]=useState('')
  const [flashcards, setFlashcards]=useState([])
  const [removeId, setRemoveId]=useState(null)
  const toast=useShowToast()
  const navigate=useNavigate()
  const options = loaderData.subscriptions.map((e) => (
    <option key={e.id} value={e.id}>
      {e.name}
    </option>
    
  ));
  const flashcardsElements=flashcards.map(e=><FlashcardCard key={e.id} {...e} onClick={event=>setRemoveId(e.id)} />)
  useEffect(
    ()=>{
        if(loaderData.subscriptions[0]?.id)
        {
            setSubscription(loaderData.subscriptions[0]?.id)
        }
    },[loaderData, setSubscription]
)
  const getFlashcards=useCallback(async ()=> {
            const token = await getCSRFToken()
            const response=await fetch(
                process.env.REACT_APP_BACKEND+`/subscriptions/${subscription}/flashcards/find?search=${search}`,
                {
                    method:'get',
                    credentials: "include",
                headers: { "X-XSRF-TOKEN": token, 'Accept': "application/json" },
                }
            )
            if(response.ok)
            {
                const data=await response.json()
                setFlashcards(data.flashcards)
            }

  },[subscription,setFlashcards, search])
  useEffect(
    ()=>{
      const deleteFn=async ()=>{
        console.log(removeId )
        const url='/flashcards/'+removeId+'/delete'
        const response =await universalFetchSchema(null,url,'delete');
        if(response)
        {
          toast({title:'Udało się',
          description: 'Element został usunięty',
          status: 'success'

          })
        }else{
          toast({title:'Błąd',
          description: 'Element nie został usunięty',
          status: 'error'

          })
        }
        
         setRemoveId(null)
       
      }
      if(removeId)
      {
        deleteFn()
        
      }
    },[removeId, setRemoveId, removeId,toast, ]
  )
    useEffect(
        ()=>{
            getFlashcards()
        },[getFlashcards]
    )
  return (
    <div>
      <Title title="Usuń fiszkę" />
      <Box padding={[2, 4, 4, 8, 16]}>
        <Stack spacing={20}>
        <FormControl>
          <FormLabel>
            Wybierz subskrypcję, z której chcesz usunąć fiszkę
          </FormLabel>
          <Select
            required
            name="subscription"
            value={subscription}
            onChange={(e) => setSubscription(e.target.value)}
          >
            {options}
          </Select>
        </FormControl>
        <SearchBar labelText={'Znajdź fiszkę'} value={search} onChange={e=>setSearch(e.target.value)} name='search' />
       
        <div className="my-8">
        <Pager blocks={flashcardsElements} howManyPerPage={30} wrap/>
        </div>
     </Stack>

      </Box>
    </div>
  );
}

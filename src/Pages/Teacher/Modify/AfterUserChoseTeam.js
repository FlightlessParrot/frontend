import { FormControl, FormLabel, Input, Stack,  Wrap, useToast } from "@chakra-ui/react"
import { useLoaderData,  useRevalidator } from "react-router-dom"
import SearchBar from "../../../Components/SearchBars/SearchBar"
import { useEffect, useState } from "react"
import UserCard from "../../../Components/Cards/UserCard"
import universalFetchSchema from "../../../fetch/universalFetchSchema"
import UniversalTable from '../../../Components/Tables/UniversalTable'
import useShowToast from "../../../hooks/useShowToast"
export default function AfterUserChoseTeam() {
    const loaderData=useLoaderData()
    const [search, setSearch]=useState('')
    const [users, setUsers]=useState([])
    const [newUser, setNewUser]=useState()
    const revalidator=useRevalidator()
    const [toastData, setToastData]=useState(null)
    const toast=useShowToast()
    const usersCardJsx=users.map(
      (e)=><UserCard userModel={e} key={e.id} getUserIdOnClick={setNewUser} members={loaderData.members} />
    )
    useEffect(
      ()=>{
     
        if(toastData?.title && toastData?.description)
        {
          toast( toastData)
      
         
        }else{
          if(toastData!==null)
          {
            toast( {title: 'Wystąpił błąd',
              description: 'Spróbuj ponownie później.',
              status: 'error'})
             
          } 
           
        }
        setToastData(null)
      },[toastData, toast]
    )
    useEffect(
      ()=>{ 
          searchUsers(search, setUsers)
      },[search]
    )

    useEffect(
      ()=>{
        if(newUser)
        {
          const isMember=loaderData.members.filter(
            e=>e.id===newUser
          )
        
          if(isMember[0])
          {
            removeUserFromTeam(newUser, loaderData.team.id, revalidator, setToastData)
            
          }
          else{addUserToTeam(newUser, loaderData.team.id, revalidator, setToastData)}
       
          
          setNewUser(undefined)
          
        }
      }
    )

  return (<Stack spacing={'60px'}>
    <FormControl>
        <FormLabel>Wybrany zespół</FormLabel>
        <Input readOnly value={loaderData?.team?.name && loaderData.team.name} />
    </FormControl>
    <SearchBar labelText={'Wyszukaj i dodaj członków zespołu'} value={search} onChange={(e)=>setSearch(e.target.value)} maxWidth="500px"  />
    <Wrap spacing='40px'>
      {usersCardJsx}
      </Wrap>
      <UniversalTable data={loaderData.members} /></Stack>
  )
}

async function searchUsers(search, setUsers)
{
const response = await universalFetchSchema(null, '/users/find?search='+search,'get', '/login', true)

Array.isArray(response) && setUsers(response)
}

async function addUserToTeam(user, team, revalidator, setToastData)
{
  const response=await universalFetchSchema(null, `/teams/${team}/users/${user}/add`,'post','/login', true)
  revalidator.revalidate();
  setToastData(response)
}

async function removeUserFromTeam(user,team, revalidator, setToastData)
{
  const response=await universalFetchSchema(null, `/teams/${team}/users/${user}/remove`,'delete','/login', true)
  revalidator.revalidate();
 setToastData(response)
}


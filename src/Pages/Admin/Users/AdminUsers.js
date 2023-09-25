import { useCallback, useEffect,  useState } from "react";
import { UniversalUserCard } from "../../../Components/Cards/UserCard";
import SearchBar from "../../../Components/SearchBars/SearchBar";
import universalFetchSchema from "../../../fetch/universalFetchSchema";
import {Box, } from "@chakra-ui/react";
import Title from "../../../Components/Title";
import Pager from "../../../Components/Pager/Pager"
import useShowToast from '../../../hooks/useShowToast'
export default function AdminUsers
() {
    const [searchTeacher, setSearchTeacher]=useState('')
    const [teachers, setTeachers]=useState([])
    const [downgrade, setDowngrade]=useState()
    const [searchUser, setSearchUser]=useState('')
    const [standardUsers, setStandardUsers]=useState([]);
    const [upgrade, setUpgrade]=useState()
    const toast=useShowToast()
    const jsxTeacher=teachers.map(e=><UniversalUserCard key={e.id} userModel={e} getUserIdOnClick={setDowngrade} buttonText={'Zdegraduj'} red/>)
    const jsxUsers=standardUsers.map(e=><UniversalUserCard key={e.id} userModel={e} getUserIdOnClick={setUpgrade}  buttonText={'Awansuj'}/>)
    const toasting=useCallback((isResponseOk, successTitle)=>{
            if(isResponseOk)
                {
                    toast({
                        title: successTitle,
                        description: 'Udało się zmienić uprawnienia użytkownika',
                        status:'success'
                    })
                }else{
                    toast({
                        title: 'Błąd',
                        description: 'Nie udało się zmienić uprawnień użytkownika',
                        status:'error'
                    })
                }
            
    },[toast])
    const usersFn=useCallback(async ()=>{
                const response =await universalFetchSchema(null,'/users/student/find?search='+searchUser,'get','/',true)
                  setStandardUsers(response.users)  
            },[setStandardUsers, searchUser])
    const teachersFn=useCallback(async ()=>{
               const response =await universalFetchSchema(null,'/users/teacher/find?search='+searchTeacher,'get','/',true) 
        
                setTeachers(response.users)
              
            },[setTeachers, searchTeacher])
    useEffect(
        ()=>{
            const downgradeFn=async ()=>{
                const response=await universalFetchSchema(null,'/users/'+downgrade+'/downgrade','put')
                setDowngrade(null)
               toasting(response,'Nauczyciel został uczniem' )
               usersFn()
               teachersFn()
            }
            if(downgrade)
            {
                downgradeFn()   
            }
        },[toasting, downgrade, setDowngrade, setTeachers, setStandardUsers, usersFn, teachersFn]
    )



    useEffect(
        ()=>{
            const upgradeFn=async ()=>{
                const response=await universalFetchSchema(null,'/users/'+upgrade+'/upgrade','put')
                setUpgrade(null)
                toasting(response,'Nauczyciel został uczniem' )
                usersFn()
                teachersFn()
            }
            if(upgrade)
            {
                upgradeFn()
            }
        },[toasting, upgrade, setUpgrade, setTeachers, setStandardUsers, usersFn, teachersFn]
    )   
    
   
    useEffect(
        ()=>{
           teachersFn()
           console.log('refresh')
        },[teachersFn, searchTeacher]
    )


    useEffect(
        ()=>{
            usersFn()
        },[usersFn, searchUser]
    )


  return (
    <div>
        <Title title='Nadawaj i odbieraj uprawnienia' />
        <Box padding={[2,4,4,8,16]}>
            <div className="p-4">
                <SearchBar labelText={'Znajdź nauczyciela'} value={searchTeacher} onChange={e=>setSearchTeacher(e.target.value)} name='teacherSearch' />
                <Box my={[4,8]}>
                   <Pager blocks={jsxTeacher} howManyPerPage={25} wrap />
               
                </Box>
            </div>
        </Box>
        <Box padding={[2,4,4,8,16]}>
            <div className="p-4">
                <SearchBar labelText={'Znajdź użytkownika'} value={searchUser} onChange={e=>setSearchUser(e.target.value)} name='teacherSearch' />
                <Box my={[4,8]}>
                   <Pager blocks={jsxUsers} howManyPerPage={25} wrap />
               
                </Box>
            </div>
        </Box>
    </div>
  )
}
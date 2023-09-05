import { Form } from "react-router-dom";
import useGetAllCategoriesAndUndercategories from "../../hooks/useGetAllCategoriesAndUndercategories";
import CategoriesAndUndercategoriesCheckboxes from "../Forms/CategoriesAndUndercategoriesCheckboxes";
import SearchBar from "../SearchBars/SearchBar";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
export default function ModifyQuestion({title,underTitle, onChange, value, children, searchButtonHandler, formRef })
{
    const getAllCategoriesAndUndercategories=useGetAllCategoriesAndUndercategories();
    const [categoryObject, setCategoryObject]=useState({categories:[], undercategories: []})

    useEffect(
        ()=>{
            const fn=async ()=>{
                const response=await getAllCategoriesAndUndercategories()
                setCategoryObject(response)
            }
            fn()
        },[getAllCategoriesAndUndercategories,setCategoryObject]
    )
    return(
        <div>
            <h2 className="lead">{title}</h2>
            <i className="m-4 mt-2 mb-8 block ">{underTitle}</i>
            <Form ref={formRef} onSubmit={e=>e.preventDefault()}>
            <SearchBar maxWidth="600px" name='search' labelText={'Wyszukaj pytanie'} onChange={onChange} value={value} onClick={searchButtonHandler}/>
            <CategoriesAndUndercategoriesCheckboxes categories={categoryObject.categories} undercategories={categoryObject.undercategories}/>
            </Form>
            <Flex wrap={'wrap'} justify={['center', 'start']} className='my-16 gap-16'>
                {children}
            </Flex>
            
        </div>
    )
}
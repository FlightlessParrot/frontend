import { Form } from "react-router-dom";
import useGetAllCategoriesAndUndercategories from "../../hooks/useGetAllCategoriesAndUndercategories";
import CategoriesAndUndercategoriesCheckboxes from "../Forms/CategoriesAndUndercategoriesCheckboxes";
import SearchBar from "../SearchBars/SearchBar";
import { Flex } from "@chakra-ui/react";
import { useEffect} from "react";
import Pager from "../Pager/Pager";
import useControlCategoriesAndUndercategories from "../../hooks/useControlCategoriesAndUndercategories";
export default function ModifyQuestion({title,underTitle, onChange, value, children, searchButtonHandler, formRef, pageChildren })
{
    const getAllCategoriesAndUndercategories=useGetAllCategoriesAndUndercategories();
    const [checkedCategories, dispatchCheckedCategories]=useControlCategoriesAndUndercategories()
    useEffect(
        ()=>{
            const fn=async ()=>{
                const response=await getAllCategoriesAndUndercategories()
              
                dispatchCheckedCategories({type: 'new', data: response})
            }
            fn()
        },[getAllCategoriesAndUndercategories,dispatchCheckedCategories]
    )
    return(
        <div>
            <h2 className="lead">{title}</h2>
            <i className="m-4 mt-2 mb-8 block ">{underTitle}</i>
            <Form ref={formRef} onSubmit={e=>e.preventDefault()}>
            <SearchBar maxWidth="600px" name='search' labelText={'Wyszukaj pytanie'} onChange={onChange} value={value} onClick={searchButtonHandler}/>
            <CategoriesAndUndercategoriesCheckboxes categoryState={checkedCategories} categoryDispatch={dispatchCheckedCategories} categories={checkedCategories['categories']} undercategories={checkedCategories['undercategories']}/>
            </Form>
            {pageChildren ?
            <Pager blocks={children} howManyPerPage={20} wrap />:
            <Flex wrap={'wrap'} justify={['center', 'start']} className='my-16 gap-16'>
                {children}
            </Flex> 
            }
           
            
        </div>
    )
} 



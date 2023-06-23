import { FormControl, FormLabel, Switch, useBoolean,} from "@chakra-ui/react";
import Questions from "../../../Components/Questions";

import SearchTest from "../../../Components/SearchBars/SearchTest";
import Title from "../../../Components/Title";

import ModifyQuestion from "../../../Components/ModifyQuestion";
import { useState } from "react";
export default function QuestionsSettings()
{
    const [search, setSearch]=useState('')
    const [showAddQuestions, setShowAddQuestions]=useBoolean()
    
    const dummyQuestion={
        type: 'jednokrotnego wyboru.',
        question: 'Definicja chromosomu to:'
    }
    
    const generateDummyQuestions=(color, text)=>{
        const questions=[]
       for(let i=0; i<4; i++)
    {
        questions.push(<Questions {...dummyQuestion} buttonText={text} color={color} />)
    }  
    
    return questions
    }
   const addQuestions=generateDummyQuestions('sel','Dodaj' )
    const removeQuestion=generateDummyQuestions('red', 'Usuń')
    return(
        <>
        <Title title='Zarządzaj pytaniami' /> 
        <div className="p-4">
        <i>Możesz zarzadzać tylko pytaniami z własnych testów. 
        Jesli chcesz zmodyfikować pytania w zakupionym pakiecie możesz to zrobić
         tworząc własny test na jego bazie 
        (zakładka testy), a nastepnie zmodyfikować tak utworzony test.</i>
       
            <h2 className="lead">Wybór testu</h2>
        <SearchTest search={search} setSearch={setSearch}>
            
            <div className="w-[200px] h-[200px] bg-c_gray"></div>
            <div className="w-[200px] h-[200px] bg-c_gray"></div>
            
        </SearchTest>
        <h2 className="lead mt-10">Wybrany test</h2>
        <div className="mb-16 mt-4">
        <div className="w-[200px] h-[200px] bg-c_gray"></div>
        </div>
        <FormControl display='flex' gap={6} marginBottom='40px' marginTop='80px'>
        <Switch name='add-question-settings' value={showAddQuestions} onChange={setShowAddQuestions.toggle} /><FormLabel>Chcę wybrać pytania, które mają być dodane do testu</FormLabel>
        </FormControl>

        {showAddQuestions &&<ModifyQuestion title='Dodaj pytanie' undertitle='Możesz dodać pytanie do testu'>
            {addQuestions}
        </ModifyQuestion >}
        <ModifyQuestion underTitle={'Możesz usunąć pytanie z własnego testu'}>
            {removeQuestion}
        </ModifyQuestion>
        </div>
        </>
    )

}
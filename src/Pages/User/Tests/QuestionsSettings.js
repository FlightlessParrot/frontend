import SearchBar from "../../../Components/SearchBar";
import SearchTest from "../../../Components/SearchBars/SearchTest";
import Title from "../../../Components/Title";
import { useState } from "react";
export default function QuestionsSettings()
{
    const [search, setSearch]=useState('')
    const searchData={
        labelText: 'Wyszukaj test',
        value: search,
        onChange: (e)=>setSearch(e.target.value),
        maxWidth: '600px'
    }
    return(
        <>
        <Title title='Zarządzaj pytaniami' />
        <i className="pl=4">Możesz zarzadzać tylko pytaniami z własnych testów. 
        Jesli chcesz zmodyfikować pytania w zakupionym pakiecie możesz to zrobić
         tworząc własny test na jego bazie 
        (zakładka testy), a nastepnie zmodyfikować tak utworzony test.</i>
        <div>
            <h2 className="lead">Wybór testu</h2>
        <SearchTest>
            <div className="w-[200px] h-[200px bg-red]"></div>
            <div className="w-[200px] h-[200px] bg-red"></div>

        </SearchTest>
        <h2 className="lead">Wybrany test</h2>
        <div className="w-[200px] h-[200px] bg-red"></div>

        </div>
        </>
    )

}
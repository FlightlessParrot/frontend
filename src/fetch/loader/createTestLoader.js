
export default async function createTestLoader({params, request})
{
return {
   standart: [{name: 'Anatomia dla programistów - czyli to, co przegapiłeś w szkole', id: 0},
    {name: 'Podstawy biologii - czyli dlaczego klepanie w kąkuter to nie wszystko', id: 1}],
    custom: [
       {name: 'Jak leczyć uzależnienie od klikania w kąkuter', id: 2}
    ]
}
}
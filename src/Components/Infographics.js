
export default function Infographics(props)
{
    const infographicsJSX=props.infographicsData.map(
        (e,i)=><div className=" flex gap-2" key={e.id}>
            <div className="bg-sel p-[12px] w-fit h-fit rounded">
                <div className=' w-[24px] h-[24px]'>
            <img src={e.path} alt='' className=''/></div>
            </div>
            <div className="shrink">
            <b className="bold-serif">{e.title}</b>
            <p className="regular-sans-serif text-c_gray ">{e.desc}</p></div>
        </div>
    )

    return(
        <div className="w-full relative min-h-screen flex items-center">
            <div>
            <h2 className="bold-sans-serif text-mediterranian block text-center">O nas</h2>
            <h1 className="text-center block article-title-font mb-14">Ucz się <span className="text-mediterrianian">mobilnie</span></h1>
            <div className="flex flex-col md:grid grid-cols-3 gap-12 ">
                {infographicsJSX}
            </div></div>

        </div>
    )

}
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
    <div className="perspective-one">
        <div className="rotate-me relative top-0 w-[200px] h-[40px] bg-sel">
            <div className="absolute top-0 w-full h-full bold-sans-serif p-2 text-center card">ŁADOWANIE...</div>
            <div className="absolute top-0 w-full h-full backface p-2 text-center card">Daj mi chwilę...</div>
        </div>
    </div>
    </div>
  )
}
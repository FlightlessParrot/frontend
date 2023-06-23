export default function ProgressBar({width}) {
  return (
    <div className="bg-baltic border rounded-2xl h-8 m-8"><div className=" bg-sel flex items-center justify-center" style={{width: width+'%'}}>{width}%</div></div>
  )
}
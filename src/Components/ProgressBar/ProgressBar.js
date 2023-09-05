export default function ProgressBar({width}) {
  return (
    <div className="bg-baltic border rounded-2xl h-10 m-8 flex"><div className=" rounded-2xl bg-sel items-center flex justify-center" style={{width: width+'%', minWidth: '50px'}}>{Math.ceil(width)}%</div></div>
  )
}
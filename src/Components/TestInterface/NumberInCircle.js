export default function NumberInCircle({children, clickHandler}) {
  return (
    <button className="bg-transparent border border-white w-12 h-12 rounded-full" onClick={clickHandler}>{children}</button>
  )
}
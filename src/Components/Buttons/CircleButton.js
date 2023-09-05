export default function CircleButton({children, onClick}) {
  return (
    <button onClick={onClick} className=" translate-x-1 translate-y-1 flex items-center justify-center w-10 h-10 rounded-full border bg-gray-800 hover:bg-gray-500 border-gray-400 text-2xl p-1 font-black select-none" aria-label="Usuń pozycję">{children}</button>
  )
}
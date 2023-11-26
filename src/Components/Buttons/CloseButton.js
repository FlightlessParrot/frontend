export default function CloseButton({onClick}) {
  return (
    <button onClick={onClick} className="bg-black text-white font-bold text-4xl rounded-full opacity-50 absolute top-2 right-2 z-50 w-10 h-10 pt-1 flex justify-center items-center">
        X
    </button>
  )
}
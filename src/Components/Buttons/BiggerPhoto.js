import { Link } from "react-router-dom";

export default function BiggerPhoto({onClick}) {
  return (
    <button onClick={onClick} className="flex align-center justify-center absolute top-1 right-1 rounded bg-gray-300 opacity-70">
        <img src='/Storage/Images/resize.png' width='32px' height={'32px'} alt='Kliknij, aby powiększyć'/>
    </button>
  )
}
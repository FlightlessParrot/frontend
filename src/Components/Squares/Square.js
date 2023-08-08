export default function Square({color,element, clickHandler, halo=false, rounded=false}) {
   const showHalo= halo ? ' shadow-md shadow-white ':'';
   const round= rounded? 'rounded': '';
  return (
<button id={element.id} onClick={clickHandler} style={{backgroundColor: color}} className={"p-4 "+showHalo+round} > 
    {element.text}
</button>

  )
}
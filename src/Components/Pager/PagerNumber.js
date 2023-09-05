export default function PagerNumber({children, onClick, currentNumber, dataTestId}) {
    const bg=currentNumber ? "bg-baltic":"bg-sel"
  return (
    <button data-testid={dataTestId} className= {`rounded p-2 min-w-[2.5rem] h-10 ${bg}`} onClick={onClick}>{children}</button>
  )
}
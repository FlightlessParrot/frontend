export default function PagerNumber({children, onClick, currentNumber, dataTestId}) {
    const bg=currentNumber ? "bg-baltic":"bg-sel"
  return (
    <button data-testid={dataTestId} className= {`rounded w-4 h-4 ${bg}`} onClick={onClick}>{children}</button>
  )
}
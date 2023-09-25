export default function GreenPrice({children, additionalClassNames}) {
  return (
    <b className={"bold-serif text-xl p-2 rounded-md border-2  border-green-300 "+additionalClassNames}>{children} zł</b>
  )
}
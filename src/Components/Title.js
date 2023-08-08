export default function Title({title, newClass=''}) {
  return (<>

    <h1 data-testid='Title-h1' className={`inline-block text-center p-4 md:p-8 px-12 border-b-4 article-title-font border-b-baltic ${newClass}`}>
    {title}
    </h1>
    </>
  )
}
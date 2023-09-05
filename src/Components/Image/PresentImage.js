import { Image } from "@chakra-ui/react"

export default function PresentImage({fileRef}) {
  return (<>
    {fileRef.current?.files[0]!=null && <Image src={URL.createObjectURL(fileRef.current.files[0])} alt='podgląd zdjęcia' />}
    </>
  )
}
import { Box } from "@chakra-ui/react"

export default function DataLayout({title, children}) {
  return (
    <Box padding={[2,4,6]}>
        <b className="bold-serif">{title}</b>
        <Box padding={[2,4,6]}>
            {children}
        </Box>
    </Box>
  )
}
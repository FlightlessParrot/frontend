import { FormControl, Switch, FormLabel } from "@chakra-ui/react"

export default function Switcher({name,value, onChange, isChecked, label}) {
  return (
    <FormControl display={"flex"} gap="6">
                <Switch
                  name={name}
                  onChange={onChange}
                  isChecked={isChecked}
                 value={value}
                />
                <FormLabel>{label}</FormLabel>
              </FormControl>
  )
}
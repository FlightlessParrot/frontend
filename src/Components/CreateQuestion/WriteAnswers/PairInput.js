import { Stack } from "@chakra-ui/react";
import { MyInput } from "./SingleInputInPair";
export default function PairInput({name, value, onChange}) {

  return (
    <Stack direction="row" spacing="20px">
      <MyInput name={name} value={value} onChange={onChange} number={0} />
      <MyInput name={name} value={value} onChange={onChange} number={1} />
    </Stack>
  );
}

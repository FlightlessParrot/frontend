import { Checkbox, Wrap } from "@chakra-ui/react"

export default function SubscriptionsCheckboxes({subscriptions, onChange, checkedSubscrptions}) {
    const jsx=subscriptions.map(
        e=><Checkbox  key={e.id} value={e.id} isChecked={checkedSubscrptions.filter(ownedE=>ownedE.id===e.id).length} onChange={onChange} >{e.name}</Checkbox>
    )
  return (
   <Wrap spacing='40px'>
    {jsx}

   </Wrap>
  )
}
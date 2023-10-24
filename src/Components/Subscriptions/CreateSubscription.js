import { useState } from "react";

import { Form } from "react-router-dom";
import SubscriptionForm from "./SubscriptionForm";

export default function CreateSubscription() {
  const [price, setPrice] = useState(100);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [newPrice, setNewPrice] = useState(100);
  const [check, setCheck] = useState(false);
  const [lowestPrice, setLowestPrice]=useState(0);
  const [desc, setDesc]=useState('')
  return (
    <Form method="post">
      <SubscriptionForm
        setName={setName}
        name={name}
        date={date}
        setDate={setDate}
        price={price}
        setPrice={setPrice}
        discountCheckbox={newPrice}
        setDiscountCheckbox={setNewPrice}
        setCheck={setCheck}
        check={check}
        lowestPrice={lowestPrice}
        setLowestPrice={setLowestPrice}
        setDesc={setDesc}
        desc={desc}
      />
      <button className="action-button float-right">Stwórz subskrypcję</button>
    </Form>
  );
}

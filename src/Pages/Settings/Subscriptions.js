import { Box, Wrap } from "@chakra-ui/react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Title from "../../Components/Title";
import OwnedSubscriptionCard from "../../Components/Cards/OwnedSubscriptionCard";
import ProductCard from "../../Components/Cards/ProductCard";

export default function Subscriptions() {
  const loaderData = useLoaderData();

  const navigate = useNavigate();

  const ownedSubscriptions = loaderData.ownedSubscriptions.map((e) => (
    <OwnedSubscriptionCard
      key={e.id}
      name={e.name}
      expiration_date={e.pivot.expiration_date}
    />
  ));
  const unownedSubscriptions = loaderData.unownedSubscriptions.map((e) => (
    <ProductCard
      key={e.id}
      {...e}
      OnClickReturnId={(e) => navigate("/user/shop/" + e)}
    />
  ));

  return (
    <Box>
      <Title title="Subskrypcje" />
      <Box p={[2, 4, 4, 8, 16]}>
        <Box>
          <h2 className="lead">Aktywne subskrypcje</h2>
          <Wrap spacing={"25px"} justify={["center", "start"]} py={[4, 8, 16]}>
            {ownedSubscriptions}
          </Wrap>
        </Box>

        <Box my={[4, 4, 8, 16]}>
          <h2 className="lead">Zakup subskrypcję</h2>
          <Wrap py={[4, 8, 16]} spacing={"25px"} justify={["center", "start"]}>
            {unownedSubscriptions}
          </Wrap>
        </Box>
      </Box>
    </Box>
  );
}

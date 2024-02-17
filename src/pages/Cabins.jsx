import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import getCabins from "../services/getCabins";

function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://imoyztcjssgbwpnmrpbk.supabase.co/storage/v1/object/public/cabins-images/cabin-008.jpg?t=2024-02-17T05%3A41%3A12.201Z" />
    </Row>
  );
}

export default Cabins;

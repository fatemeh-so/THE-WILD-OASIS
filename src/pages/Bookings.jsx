import BookingTableOperations from "../features/bookings/BookingTableOperations";
import BookingTable from "../features/bookings/BookingTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Pagination from "../ui/Pagination";


function Bookings() {
  
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations/>
      </Row>
      <BookingTable />
      <Pagination />
    </>
  );
}

export default Bookings;

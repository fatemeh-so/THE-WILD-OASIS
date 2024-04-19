import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCabin } from "../cabins/useCabin";
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
function DashboardLayout() {
  const { data: bookings, isLoading } = useRecentBookings();
  const {
    data: stays,
    isLoading: isLoading2,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { data: cabins, isLoading: isLoading3 } = useCabin();
  if (isLoading || isLoading2 || isLoading3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        numDays={numDays}
        confirmedStays={confirmedStays}
        cabins={cabins}
      />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;

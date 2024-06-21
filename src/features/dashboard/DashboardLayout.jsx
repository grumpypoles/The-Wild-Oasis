import styled from "styled-components";
import { useRecentBookings } from "./useRecentBooking";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading} = useRecentBookings()
  const { stays, isLoading: isLoadingStays, confirmedStays} = useRecentStays()

  if(isLoading || isLoadingStays) return <Spinner />
  console.log((bookings))

  return (
   <StyledDashboardLayout>
    <div>Stats</div>
    <div>Todays Activities</div>
    <div>Chart Duration</div>
    <div>Chart Sales</div>
   </StyledDashboardLayout>
  )
}

export default DashboardLayout

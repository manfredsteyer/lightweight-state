import { Flight } from "./flight"

export interface Ticket {
  id: number
  passengerId: number
  flightId: number
  bookingDate: string
  flightClass: number
  seat: string
  flight: Flight
}


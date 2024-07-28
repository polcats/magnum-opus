'use client';

import { FlightTrackerAPI } from './flight-tracker';

export class API {
  readonly flightTracker: FlightTrackerAPI;

  constructor() {
    this.flightTracker = new FlightTrackerAPI();
  }
}

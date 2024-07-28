import axios from 'axios';

import { appConfig } from '@/app.config';

export class FlightTrackerAPI {
  constructor() {}

  async fetchIcao24ByFlightNumber(flightNumber: string) {
    const url = appConfig.OPENSKY_API_URL_STATES_ALL;

    try {
      const response = await axios.get(url);
      const data = response.data;

      if (process.env.NODE_ENV === 'development') {
        console.log('OpenSky API response:', data);
      }

      for (let i = 0; i < data.states.length; ++i) {
        if (data.states[i]?.[1].trim() === flightNumber) {
          return data.states[i][0];
        }
      }
      throw new Error(
        'No data found for this flight number. Either the aircraft has not departed or has already landed.'
      );
    } catch (error: any) {
      console.log('Error fetching icao24:', error);
      throw error;
    }
  }

  async fetchAircraftData(icao24: string) {
    const url = `${appConfig.OPENSKY_API_URL_STATES_ALL}?icao24=${icao24}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching airplane data:', error);
      throw error;
    }
  }

  async fetchAirplaneTracks(icao24: string) {
    const url = `${appConfig.OPENSKY_API_URL_TRACKS}?icao24=${icao24}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching airplane tracks:', error);
      throw error;
    }
  }
}

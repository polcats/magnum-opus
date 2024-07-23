'use client';

import axios from 'axios';

import { AircraftData } from '@/types/flight-tracker';

const API_URL = 'https://opensky-network.org/api';

export const fetchIcao24ByFlightNumber = async (flightNumber: string) => {
  const url = 'https://opensky-network.org/api/states/all';
  try {
    const response = await axios.get(url);
    const data: AircraftData = response.data;

    console.log(data);

    for (let i = 0; i < data.states.length; ++i) {
      if (data.states[i]?.[1].trim() === flightNumber) {
        console.log(data.states[i][0]);
        return data.states[i][0];
      }
    }

    throw new Error(
      'No data found for this flight number. Either the aircraft has not departed or has not landed.'
    );
  } catch (error: any) {
    throw error;
  }
};

export const fetchAircraftData = async (icao24: string) => {
  const url = `${API_URL}/states/all?icao24=${icao24}`;

  try {
    const response = await axios.get(url);
    return response.data as AircraftData;
  } catch (error) {
    console.error('Error fetching airplane data:', error);
    throw error;
  }
};

export const fetchAirplaneTracks = async (icao24: string) => {
  const url = `${API_URL}/tracks/?icao24=${icao24}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching airplane tracks:', error);
    throw error;
  }
};

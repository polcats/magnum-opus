export type State = [
  string, // Unique identifier (e.g., "e8027e")
  string, // Flight number or callsign (e.g., "LPE2378 ")
  string, // Country (e.g., "Chile")
  number, // Unix timestamp of the data (e.g., 1721653820)
  number, // Unix timestamp of the last update (e.g., 1721653820)
  number, // Longitude (e.g., -77.0444)
  number, // Latitude (e.g., -12.3903)
  number, // Altitude in meters (e.g., 3947.16)
  boolean, // On ground (e.g., false)
  number, // Velocity (e.g., 186.59)
  number, // Heading (e.g., 334)
  number, // Vertical rate (e.g., -11.05)
  number | null, // Squawk (e.g., null)
  number, // Altitude in feet (e.g., 4236.72)
  number | null, // Geoaltitude (e.g., null)
  boolean, // Special purpose indicator (e.g., false)
  number, // Position source (e.g., 0)
];

export type AircraftData = {
  time: number;
  states: State[];
};

export type PathPoint = [
  number, // timestamp
  number, // latitude
  number, // longitude
  number, // altitude
  number, // true track
  boolean, // onGround
];

export type AircraftTrack = {
  icao24: string;
  callsign: string;
  startTime: number; // Unix timestamp
  endTime: number; // Unix timestamp
  path: PathPoint[];
};

export type SnackBar = {
  open: boolean;
  message: string;
};

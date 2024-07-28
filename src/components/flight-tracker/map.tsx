'use client';

import React, { useMemo } from 'react';
import { MapContainer, TileLayer, Polyline, Marker } from 'react-leaflet';
import { LatLngExpression, LatLngTuple, PointExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import { MapUpdater } from './map-updater';
import { Box } from '@mui/material';

const svgIcon = `
<svg xmlns="http://www.w3.org/2000/svg" height="249.84" width="248.25" version="1.0">
  <path d="M 247.51404,152.40266 139.05781,71.800946 c 0.80268,-12.451845 1.32473,-40.256266 0.85468,-45.417599 -3.94034,-43.266462 -31.23018,-24.6301193 -31.48335,-5.320367 -0.0693,5.281361 -1.01502,32.598388 -1.10471,50.836622 L 0.2842717,154.37562 0,180.19575 l 110.50058,-50.48239 3.99332,80.29163 -32.042567,22.93816 -0.203845,16.89693 42.271772,-11.59566 0.008,0.1395 42.71311,10.91879 -0.50929,-16.88213 -32.45374,-22.39903 2.61132,-80.35205 111.35995,48.50611 -0.73494,-25.77295 z" fill-rule="evenodd"/>
</svg>`;

const createIcon = (heading: number) => {
  const iconSize: PointExpression = [32, 32];
  const rotation = heading || 0;

  return L.divIcon({
    className: 'custom-icon',
    html: `
        <div style="
          transform: rotate(${rotation}deg);
          transform-origin: bottom center;
          width: ${iconSize[0]}px;
          height: ${iconSize[1]}px;
          background-image: url('data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgIcon)}');
          background-size: cover;
          background-repeat: no-repeat;
        "></div>
      `,
    iconSize,
    iconAnchor: [iconSize[0] / 2, iconSize[1]],
    popupAnchor: [0, -iconSize[1]],
  });
};

type Props = {
  heading: number | undefined;
  positions: LatLngExpression[] | undefined;
};

export const AirplaneMap: React.FC<Props> = ({ heading, positions }) => {
  const latestPosition = useMemo(
    () => (positions ? positions[positions?.length - 1] : [51.505, -0.09]) as LatLngTuple,
    [positions]
  );

  return (
    <Box
      sx={{
        width: '100%',
        mt: 2,
        pl: 3,
        pr: 3,
      }}
    >
      <MapContainer
        center={latestPosition}
        zoom={4}
        style={{
          height: '500px',
          width: '100%',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors;'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {positions && positions.length > 0 && (
          <Marker position={latestPosition} icon={createIcon(heading || 0)} />
        )}
        <MapUpdater center={latestPosition} />
        <Polyline positions={positions ?? []} color="blue" />
      </MapContainer>
    </Box>
  );
};

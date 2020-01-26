import socketio from 'socket.io';
import http from 'http';

import { Dev } from './models/Dev';
import { parseStringAsArray, calculateDistance } from './utils';
import { Coordinates } from './types';

interface Connection {
  id: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  techs: string[];
}

let io: socketio.Server;
const connections: Connection[] = [];

export const setupWebsocket = (server: http.Server) => {
  io = socketio(server);

  io.on('connection', socket => {
    const { latitude, longitude, techs } = socket.handshake.query;

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      techs: parseStringAsArray(techs),
    });
  });
};

export const findConnections = (coordinates: Coordinates, techs: string[]) => {
  return connections.filter(connection => {
    return (
      calculateDistance(coordinates, connection.coordinates) < 10 &&
      connection.techs.some(item => techs.includes(item))
    );
  });
};

export const sendMessage = (to: Connection[], message: string, data: Dev) => {
  to.forEach(connection => {
    io.to(connection.id).emit(message, data);
  });
};

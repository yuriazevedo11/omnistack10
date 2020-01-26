import socketio from 'socket.io-client';
import { Dev } from '../types';

const socket = socketio('http://192.168.1.3:3333', {
  autoConnect: false,
});

export const connect = (latitude: number, longitude: number, techs: string) => {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  };

  socket.connect();
};

export const disconnect = () => {
  if (socket.connected) {
    socket.disconnect();
  }
};

export const subcribeToNewDevs = (subscribeFunction: (dev: Dev) => void) => {
  socket.on('new-dev', subscribeFunction);
};

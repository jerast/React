import { io } from 'socket.io-client';

const URL = 'http://192.168.0.13:3000';

export const socket = io(URL, { /* autoConnect: false */ });
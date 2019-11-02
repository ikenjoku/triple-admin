import socketIOClient from 'socket.io-client';
import { notification } from 'antd';
import { fetchPendingOrders } from '../redux/actions/orderActions';
import notificationSound from '../assets/notification.mp3';
import store from '../redux/configureStore';
import API from '../redux/axiosConfig';

const baseUrl = API.defaults.baseURL;

const serverUrl = baseUrl.replace('/api/v1', '');

export const io = socketIOClient(serverUrl, {transports: ['websocket', 'polling']});

export default function handleManagerNotification(userId) {
  io.on('new-order', (data) => {
      const { message } = data;
      store.dispatch(fetchPendingOrders());
      notification.success({
        message
      });
      const audio = new Audio(notificationSound);
      audio.play();
  });

  io.on('new-reservation', (data) => {
    const { message } = data;
    store.dispatch(fetchPendingOrders());
    notification.success({
      message
    });
    const audio = new Audio(notificationSound);
    audio.play();
});
}

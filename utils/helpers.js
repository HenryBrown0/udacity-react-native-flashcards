import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'UdacityFlashcards:notifications';

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}

function createNotification() {
  return {
    title: 'Time to work your brain!',
    body: "Don't forget to quiz yourself today",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      virbrate: true,
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY).then(JSON.parse).then(data => {
    if(data === null) {
      Permissions.askAsync(Permissions.NOTIFICATIONS).then(({status}) => {
        if(status === 'granted') {
          console.log("Helpers - Granted")
          Notifications.cancelAllScheduledNotificationsAsync();
          let tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          tomorrow.setHours(17);
          tomorrow.setMinutes(0);

          Notifications.scheduleLocalNotificationAsync(
            createNotification(),
            {
              time: tomorrow,
              repeat: 'day',
            }
          );
          AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          
        } else { console.error("Helpers - Permissions denied") }
      }).catch(error => console.error("Helpers - setLocalNotification" + error))
    }
  })
}

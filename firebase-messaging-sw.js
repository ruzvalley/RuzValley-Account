importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDHPzV22QAopJCpwvwnsmiPEYSd6pRNamc",
  authDomain: "ruz-valley-pos.firebaseapp.com",
  projectId: "ruz-valley-pos",
  storageBucket: "ruz-valley-pos.firebasestorage.app",
  messagingSenderId: "1070715442602",
  appId: "1:1070715442602:web:d8087969200c8c7aee87d3"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Ruz Valley Pre-Order";
  const options = {
    body: payload.notification?.body || "",
    icon: "./icons/icon-192.png",
    badge: "./icons/icon-192.png",
    data: { url: "https://script.google.com/macros/s/AKfycbyIuYkLguUh-ZBkEcFFrd0SakRZ2Mo6QqObWzfOqIuvwOzxsCiIxsV_Ea6UNvKi-_cc/exec" }
  };
  self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data?.url || "./")
  );
});

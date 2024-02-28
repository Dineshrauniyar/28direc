// this is for use only first

// importScripts('https://www.gstatic.com/firebasejs/9.1.1/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.1.1/firebase-messaging-compat.js');

// const firebaseConfig = {
//   apiKey: "AIzaSyDpvg_yU_5Vy50xhmazhQttRzJrmiNoHXw",
//   authDomain: "nakshtratalk-c3e11.firebaseapp.com",
//   databaseURL: "https://nakshtratalk-c3e11-default-rtdb.firebaseio.com",
//   projectId: "nakshtratalk-c3e11",
//   storageBucket: "nakshtratalk-c3e11.appspot.com",
//   messagingSenderId: "564770298148",
//   appId: "1:564770298148:web:81b471c099e45a05eabbb1"
// };


// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();



// messaging.onBackgroundMessage(async (payload) => {
//   // console.log("Background message received:", payload.data);

//   // Store the data in Cache Storage
//   const cache = await caches.open("fcm-data-cache");
//   await cache.put("fcm-data", new Response(JSON.stringify(payload.data)));


//   // Send a message to all connected clients (including the React app)
//   self.clients.matchAll().then(clients => {
//     clients.forEach(client => {
//       client.postMessage({
//         type: "fcmDataUpdate",
//         data: payload.data
//       });
//     });
//   });

//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.icon,

//     // other notification options
//   };



//   await self.registration.showNotification(payload.notification.title, notificationOptions);
// });











// importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
// importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

//  //the Firebase config object 
// const firebaseConfig = {
//   apiKey: "AIzaSyBlnFJEsVdi4s45zWiAvs9btBJSB8NV2mo",
//   authDomain: "boricuadirectory-9f271.firebaseapp.com",
//   projectId: "boricuadirectory-9f271",
//   storageBucket: "boricuadirectory-9f271.appspot.com",
//   messagingSenderId: "139457079925",
//   appId: "1:139457079925:web:33578599c6ec3a0b34263c",
//   };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();


// messaging.onBackgroundMessage(function(payload) {
//   console.log('Received background message ', payload);
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

//   self.addEventListener('push', function (event) {
//     const payload = event.data.json();
//     console.log('Received a push message:', payload);
  
//     const title = payload.notification.title;
//     const options = {
//       body: payload.notification.body,
//     };
  
//     event.waitUntil(
//       self.registration.showNotification(title, options)
//     );
//   });
  

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });









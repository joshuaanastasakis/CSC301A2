// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Promotions from './components/Promotions'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjr_Ja1ZpMnH_qTLOms0X2ON_ttQTB140",
  authDomain: "csc301a2-fc4e2.firebaseapp.com",
  projectId: "csc301a2-fc4e2",
  storageBucket: "csc301a2-fc4e2.appspot.com",
  messagingSenderId: "503817182609",
  appId: "1:503817182609:web:ce533927ec2163bd540e30"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, Cart, Checkout, Promotions },
  template: '<App/>'
})

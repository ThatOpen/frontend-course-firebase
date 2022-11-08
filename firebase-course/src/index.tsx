import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const firebaseConfig = {
  apiKey: "AIzaSyDvpjNyY3P-UBK-jf2oAOuHB70o431zE7U",
  authDomain: "fir-course-30f70.firebaseapp.com",
  projectId: "fir-course-30f70",
  storageBucket: "fir-course-30f70.appspot.com",
  messagingSenderId: "356558900686",
  appId: "1:356558900686:web:7495c1141c4459b9792f9f",
};
initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

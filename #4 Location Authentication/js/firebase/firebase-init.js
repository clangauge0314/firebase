import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
  // 여러분들의 firebaseConfig로 덮어쓰기 해주세요.
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
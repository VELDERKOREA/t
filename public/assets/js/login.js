// Firebase 설정
const firebaseConfig = {
    apiKey: "AIzaSyBdCs8WbciifFZ9tLBjC8l7bYIBsKZMJjk",
    authDomain: "velder-381f3.firebaseapp.com",
    projectId: "velder-381f3",
    storageBucket: "velder-381f3.appspot.com",
    messagingSenderId: "1024405768460",
    appId: "1:1024405768460:web:f129e18ddc2f354895a129",
    measurementId: "G-40QV2X2M8Z"
  };

// Firebase 초기화
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Google 로그인 제공자 설정
const provider = new firebase.auth.GoogleAuthProvider();

// 로그인 함수
function googleLogin() {
    auth.signInWithPopup(provider)
        .then((result) => {
            // 로그인 성공 후 처리
            const user = result.user;
            console.log('User Info:', user);
            window.location.href = 'index.html'; // 로그인 후 이동할 페이지
        })
        .catch((error) => {
            // 로그인 실패 처리
            console.log('Error:', error.message);
        });
}

// 로그인 버튼 클릭 이벤트
document.getElementById('googleLoginBtn').addEventListener('click', googleLogin);

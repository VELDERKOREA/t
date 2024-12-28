import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import firebaseConfig from "/assets/js/firebase-config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 인증 상태에 따른 네비게이션 바 업데이트
onAuthStateChanged(auth, (user) => {
    const loginBtn = document.getElementById("loginBtn");

    if (user) {
        // 로그인된 상태
        loginBtn.textContent = `${user.displayName}님, 로그아웃`;
        loginBtn.setAttribute("id", "logoutBtn");
        loginBtn.addEventListener("click", logoutUser);
    } else {
        // 로그인되지 않은 상태
        loginBtn.textContent = "로그인";
        loginBtn.setAttribute("id", "loginBtn");
        loginBtn.addEventListener("click", loginUser);
    }
});

// 로그인 함수
function loginUser() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            alert("VELDER에 오신 것을 환영합니다, " + user.displayName + "!");
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.error("Error during sign-up:", error);
            alert("가입에 실패했습니다: " + error.message);
        });
}

// 로그아웃 함수
function logoutUser() {
    signOut(auth)
        .then(() => {
            alert("로그아웃되었습니다.");
            window.location.href = "signup.html"; // 로그인 페이지로 리디렉션
        })
        .catch((error) => {
            console.error("Error during sign-out:", error);
            alert("로그아웃에 실패했습니다: " + error.message);
        });
}

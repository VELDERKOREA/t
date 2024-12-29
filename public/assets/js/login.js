// Firebase 초기화 - firebase-config.js에서 불러온 설정 사용
import { firebaseConfig } from './firebase-config.js';
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// 로그인 버튼 클릭 이벤트
document.getElementById('google-login').addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            displayUserInfo(user);
        })
        .catch((error) => {
            console.error('로그인 실패:', error.message);
        });
});

// 로그아웃 버튼 클릭 이벤트
document.getElementById('logout').addEventListener('click', () => {
    auth.signOut()
        .then(() => {
            console.log('로그아웃 성공');
            clearUserInfo();
        })
        .catch((error) => {
            console.error('로그아웃 실패:', error.message);
        });
});

// 사용자 정보 표시
function displayUserInfo(user) {
    const userInfoSection = document.getElementById('user-info');
    userInfoSection.innerHTML = `
        <p>안녕하세요, ${user.displayName}님!</p>
        <p>Email: ${user.email}</p>
        <img src="${user.photoURL}" alt="Profile Picture" style="width:50px; height:50px; border-radius:50%;">
        <button id="logout">로그아웃</button>
    `;
    userInfoSection.style.display = 'block';
}

// 사용자 정보 숨기기
function clearUserInfo() {
    const userInfoSection = document.getElementById('user-info');
    userInfoSection.innerHTML = '';
    userInfoSection.style.display = 'none';
}

// 인증 상태 변경 감지
auth.onAuthStateChanged((user) => {
    if (user) {
        displayUserInfo(user);
    } else {
        clearUserInfo();
    }
});

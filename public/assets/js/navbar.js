var navBar_temp = `      
<div class="container-fluid container-xl position-relative d-flex align-items-center">

<a href="index.html" class="logo d-flex align-items-center me-auto">
  <h1 class="sitename">VELDER</h1>
</a>

<nav id="navmenu" class="navmenu">
  <ul>
    <li><a href="index.html" class="active">홈</a></li>
    <li><a href="about.html">회사소개</a></li>
    <li><a href="#about">YOUTUBE</a></li>
    <li><a href="pricing.html">멤버십</a></li>
    <li><a href="community.html">커뮤니티</a></li>
  </ul>
  <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
</nav>

<a class="btn-getstarted" href="#" id="loginBtn">로그인</a>

</div>
`;

$("#header").append(navBar_temp);

// Firebase 로그인 이벤트 연결
$("#loginBtn").on("click", function () {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // 로그인 성공 처리
      console.log("로그인 성공:", result.user);
      alert(`${result.user.displayName}님 환영합니다!`);
      // 필요시 페이지 리다이렉션 처리
      // window.location.href = "redirect_page.html";
    })
    .catch((error) => {
      // 에러 처리
      console.error("로그인 에러:", error);
      alert("로그인 중 문제가 발생했습니다.");
    });
});

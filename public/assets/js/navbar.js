var navBar_temp = `      
<div class="container-fluid container-xl position-relative d-flex align-items-center" style="border-bottom: 5px solid #007bff;">

<a href="index.html" class="logo d-flex align-items-center me-auto">
  <h1 class="sitename" style="color: #007bff; font-size: 24px; font-weight: bold;">VELDER</h1>
</a>

<nav id="navmenu" class="navmenu">
  <ul style="list-style: none; margin: 0; padding: 0; display: flex; gap: 15px;">
    <li><a href="index.html" class="active" style="text-decoration: none; color: #333; font-weight: 500;">홈</a></li>
    <li><a href="about.html" style="text-decoration: none; color: #333; font-weight: 500;">회사소개</a></li>
    <li><a href="#about" style="text-decoration: none; color: #333; font-weight: 500;">YOUTUBE</a></li>
    <li><a href="pricing.html" style="text-decoration: none; color: #333; font-weight: 500;">멤버십</a></li>
    <li><a href="community.html" style="text-decoration: none; color: #333; font-weight: 500;">커뮤니티</a></li>
  </ul>
</nav>

<a class="btn-getstarted" href="signup.html" id="loginBtn" style="background-color: #007bff; color: white; padding: 7px 15px; border-radius: 5px; text-decoration: none;">로그인</a>

</div>
`;

$("#header").append(navBar_temp);

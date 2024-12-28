var navBar_temp = `      
<div class="container-fluid container-xl position-relative d-flex align-items-center">

<a href="index.html" class="logo d-flex align-items-center me-auto">
  <!-- Uncomment the line below if you also wish to use an image logo -->
  <!-- <img src="assets/img/logo.png" alt=""> -->
  <h1 class="sitename">VELDER</h1>
</a>

<nav id="navmenu" class="navmenu">
  <ul>
    <li><a href="index.html" class="active">홈</a></li>
    
    <li><a href="about.html">회사소개</a></li>
    <li><a href="#about">YOUTUBE</a></li>
    <!--<li><a href="trainers.html">멘토</a></li>-->
    <!--<li><a href="events.html">이벤트</a></li>-->
    <li><a href="pricing.html">멤버십</a></li>
     <li><a href="community.html">커뮤니티</a></li>
    <!--<li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
      <ul>
        <li><a href="#">Dropdown 1</a></li>
        <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
          <ul>
            <li><a href="#">Deep Dropdown 1</a></li>
            <li><a href="#">Deep Dropdown 2</a></li>
            <li><a href="#">Deep Dropdown 3</a></li>
            <li><a href="#">Deep Dropdown 4</a></li>
            <li><a href="#">Deep Dropdown 5</a></li>
          </ul>
        </li>
        <li><a href="#">Dropdown 2</a></li>
        <li><a href="#">Dropdown 3</a></li>
        <li><a href="#">Dropdown 4</a></li>
      </ul>
    </li>-->
    <!--<li><a href="contact.html">Contact</a></li>-->
  </ul>
  <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
</nav>

<a class="btn-getstarted" href="signup.html" id="loginBtn">로그인</a>

</div>
    `;

$("#header").append(navBar_temp);
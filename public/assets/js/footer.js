var navBar_temp = `


<div class="container footer-top">
  <div class="row gy-4">
    <div class="col-lg-4 col-md-6 footer-about">
      <a href="index.html" class="logo d-flex align-items-center">
        <span class="sitename">VELDER</span>
      </a>
      <div class="footer-contact pt-3">
        
        <p class="mt-3"><strong>Phone:</strong> <span>010-3305-7949</span></p>
        <p><strong>Email:</strong> <span>mike1890@naver.com</span></p>
      </div>
      <div class="social-links d-flex mt-4">
        <a href=""><i class="bi bi-facebook"></i></a>
        <a href=""><i class="bi bi-instagram"></i></a>
        <a href=""><i class="bi bi-youtube"></i></a>
      </div>
    </div>

    <div class="col-lg-2 col-md-3 footer-links">
      <h4></h4>
      <ul>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
      </ul>
    </div>

    <div class="col-lg-2 col-md-3 footer-links">
      <h4></h4>
      <ul>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
      </ul>
    </div>

    <div class="col-lg-4 col-md-12 footer-newsletter">
      <h4>동기부여 글 매일 받기(준비중)</h4>
      <p>이메일이나 카카오톡 아이디, 전화번호 중에 적어주시면 매일 동기부여가 가능한 글을 보내드립니다.</p>
      <form action="forms/newsletter.php" method="post" class="php-email-form">
        <div class="newsletter-form"><input type="email" name="email"><input type="submit" value="Subscribe"></div>
        <div class="loading">Loading</div>
        <div class="error-message"></div>
        <div class="sent-message">Your subscription request has been sent. Thank you!</div>
      </form>
    </div>

  </div>
</div>

<div class="container copyright text-center mt-4">
  <p>© <span>Copyright</span> <strong class="px-1 sitename">Mentor</strong> <span>All Rights Reserved</span></p>
  <div class="credits">
    <!-- All the links in the footer should remain intact. -->
    <!-- You can delete the links only if you've purchased the pro version. -->
    <!-- Licensing information: https://bootstrapmade.com/license/ -->
    <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
  </div>
</div>



`;

$("#footer").append(navBar_temp);
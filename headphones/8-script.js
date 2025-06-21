<script>
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu').querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
</script>

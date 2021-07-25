const sidebar = document.getElementById('sidebar');
const header = document.getElementById('header');
const menuBar = document.getElementById('menuBar');

if (sidebar && header && menuBar) {

  menuBar.addEventListener('click', function (e) {
    header.classList.toggle('active');
    document.body.classList.toggle('hidden');
  });

  sidebar.addEventListener('click', function (e) {
    if (e.target === this) {
      header.classList.remove('active');
      document.body.classList.remove('hidden');
    }
  });
}

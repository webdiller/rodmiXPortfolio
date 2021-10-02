export function defaultScripts() {
  const sidebar = document.getElementById('sidebar');
  const header = document.getElementById('header');
  const menuOpen = document.getElementById('menuOpen');
  const menuClose = document.getElementById('menuClose');

  const callbackModal = document.getElementById('callbackModal');
  const callbackModalClose = document.getElementById('callbackModalClose');

  const callbackModalButtons = document.querySelectorAll('[data-id="callbackModal"]');
  const callbackSuccess = document.getElementById('callbackSuccess');

  const callbackForm = document.getElementById('callbackForm');
  const modals = document.querySelectorAll('[data-type="modal"]');

  const pins = document.querySelectorAll("[data-type='pin'][data-description]");
  pins.forEach((pin) => {
    pin.addEventListener('click', function (e) {
      const childElements = Array.from(e.target.parentElement.children);
      const filtered = [];
      childElements.forEach((el) => {
        if (el !== e.target) filtered.push(el);
      });
      filtered.forEach(el=>el.classList.remove('active'))
      e.target.classList.toggle('active');
    });
  });

  const pinChilds = document.querySelectorAll('[data-pins] [data-description]');
  pinChilds.forEach((el) => {
    el.addEventListener('click', function (e) {
      e.target.classList.toggle('active');
    });
  });

  if (modals) {
    modals.forEach((modal) => {
      modal.addEventListener('click', function (e) {
        if (e.target === this) {
          modal.classList.remove('active');
        }
      });
    });
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      console.log('Escape');
      modals.forEach((modal) => {
        modal.classList.remove('active');
      });
    }
  });

  if (callbackForm) {
    callbackForm.addEventListener('submit', function (e) {
      e.preventDefault();
      setTimeout(() => {
        callbackSuccess.classList.add('active');
      }, 250);
    });
  }

  if (callbackModalButtons && callbackModal) {
    callbackModalButtons.forEach((element) => {
      element.addEventListener('click', function () {
        callbackModal.classList.toggle('active');
      });
    });

    callbackModal.addEventListener('click', function (e) {
      if (e.target === this) {
        callbackModal.classList.remove('active');
      }
    });
  }

  callbackModalClose.addEventListener('click', function (e) {
    callbackSuccess.classList.remove('active');
    callbackModal.classList.remove('active');
  });

  window.addEventListener('scroll', function (e) {
    if (window.scrollY > 0 && window.innerWidth >= 1915) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (sidebar && header && menuOpen && menuClose) {
    menuOpen.addEventListener('click', function (e) {
      sidebar.classList.add('active');
    });

    menuClose.addEventListener('click', function (e) {
      sidebar.classList.remove('active');
    });

    sidebar.addEventListener('click', function (e) {
      if (e.target === this) {
        sidebar.classList.remove('active');
      }
    });
  }
}

export function defaultScripts() {
  const html = document.documentElement;
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

  const lists = document.querySelectorAll('[data-type="dropdown"]');
  const buttons = document.querySelectorAll('[data-type="dropdown] div');

  if (lists && lists.length > 0) {
    try {
      lists.forEach((list) => {
        list.addEventListener('click', function (e) {
          e.target.classList.toggle('active');
        });
      });
    } catch (error) {
      console.log('Handle error uiDropdown: ', error);
    }
  }

  if (modals && modals.length > 0) {
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
      modals.forEach((modal) => {
        modal.classList.remove('active');
      });
      try {
        youtubeTarget.classList.remove('active');
        youtubeIframe.src = youtubeIframe.src;
        youtubeOverlay.classList.remove('active');
      } catch (error) {}
    }
  });

  if (callbackForm) {
    try {
      callbackForm.addEventListener('submit', function (e) {
        e.preventDefault();
        setTimeout(() => {
          callbackSuccess.classList.add('active');
        }, 250);
      });
    } catch (error) {}
  }

  if (callbackModalButtons && callbackModal) {
    try {
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
    } catch (error) {}
  }
  if(callbackModalClose){
    try {
      callbackModalClose.addEventListener('click', function (e) {
        callbackSuccess.classList.remove('active');
        callbackModal.classList.remove('active');
      });
    } catch (error) {}
  }

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
      html.classList.add('disabled');
    });

    menuClose.addEventListener('click', function (e) {
      sidebar.classList.remove('active');
      html.classList.remove('disabled');
    });

    sidebar.addEventListener('click', function (e) {
      if (e.target === this) {
        sidebar.classList.remove('active');
        html.classList.remove('disabled');
      }
    });
  }
}

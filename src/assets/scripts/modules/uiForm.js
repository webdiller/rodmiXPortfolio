const forms = document.querySelectorAll('[data-ui-form]');

export const uiForms = () => {
  const forms = document.querySelectorAll('[data-ui-form]');
  if (forms.length > 0) {
    forms.forEach((element) => {
      const btnSubmit = element.querySelector('button[type="button"]');
      if (btnSubmit) {
        btnSubmit.addEventListener('click', function (e) {
          this.previousElementSibling.classList.toggle('active');
        });
      }
    });
  }
};

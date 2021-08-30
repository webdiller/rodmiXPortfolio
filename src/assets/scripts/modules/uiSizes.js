export const uiSizes = () => {
  const dataTables = document.querySelectorAll('[data-sizes]');
  if (dataTables.length > 0) {
    dataTables.forEach((element) => {
      const rows = element.querySelectorAll('.ui-sizes__body-row');
      rows.forEach((row) => {
        if (!row.parentElement.classList.contains('ui-sizes__body_inner')) {
          row.addEventListener('click', function () {
            this.classList.toggle('active');
            row.nextElementSibling.classList.toggle('active');
          });
        }
      });
    });
  }
};

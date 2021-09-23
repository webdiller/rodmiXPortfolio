const tabs = document.querySelectorAll('[data-ui-tabs]');

export const uiTabs = () => {
  if (tabs && tabs.length > 0) {
    tabs.forEach((element) => {
      const triggers = element.querySelectorAll('[data-ui-tabs-trigger]');

      triggers.forEach((trigger) => {
        trigger.addEventListener('click', function (e) {
          let targetId = e.target.dataset.uiTabsTrigger;
          element.querySelectorAll(`[data-ui-tabs-target]`).forEach(parantElement=>parantElement.classList.remove('active'))
          element.querySelectorAll(`[data-ui-tabs-trigger]`).forEach(childrenElement=>childrenElement.classList.remove('active'))
          element.querySelector(`[data-ui-tabs-target='${targetId}']`).classList.add('active')
          e.target.classList.add('active')
        });
      });
    });
  }
};

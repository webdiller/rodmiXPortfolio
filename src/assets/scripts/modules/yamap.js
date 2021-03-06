import yamap from 'ymaps';

export async function yamapInit() {
  const mapWrapper = document.getElementById('mapWrapper');

  if(mapWrapper){
  try { 
      const maps = await yamap.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU');
      const mapContainer = document.createElement('div');
      mapContainer.style.height = `100%`;
      mapContainer.style.width = `100%`;
      mapWrapper.appendChild(mapContainer);
      let map = new maps.Map(mapContainer, {
        center: [57.631575, 39.873934],
        zoom: 15
      });
      map.container.fitToViewport();
      // console.log(yamap.Placemark)
      map.geoObjects.add(new maps.Placemark([57.631575, 39.873934], {
          balloonContent: '<h5 style="font-weight: bold;">Родмикс</h5><div>Россия, г. Ярославль, ул. Некрасова, д. 39Б</div>'
      }, {
          preset: 'islands#red',
      }))
      // window.addEventListener('resize', () => {
      //   try {
      //     mapContainer.style.height = `${mapWrapper.offsetHeight}px`;
      //     mapContainer.style.width = `${mapWrapper.offsetWidth}px`;
      //   } catch (error) {}
      //   try {
      //     setTimeout(() => {
      //       map.destroy();
      //       mapWrapper.querySelector('div').remove();
      //       const mapContainer = document.createElement('div');
      //       mapContainer.style.height = `${mapWrapper.offsetHeight}px`;
      //       mapContainer.style.width = `${mapWrapper.offsetWidth}px`;
      //       mapWrapper.appendChild(mapContainer);
      //       new maps.Map(mapContainer, {
      //         center: [-8.369326, 115.166023],
      //         zoom: 8
      //       });
      //       map = new maps.Map(mapContainer, {
      //         center: [-8.369326, 115.166023],
      //         zoom: 8
      //       });

      //       // Временное решение
      //       // Удаляем вторую карту, если сгенерировалась
      //       const d = mapWrapper.querySelectorAll('div ymaps');
      //       if (d.length > 1) {
      //         mapWrapper.querySelector('div ymaps:nth-child(1)').remove();
      //       }
      //     }, 1000)
      //   } catch (error) {}
      // });
    } catch (error) {
      console.error('Something went wrong', error);
    }
  }
}










// import yamap from 'ymaps';

// export async function yamapInit() {
//   const mapWrapper = document.getElementById('mapWrapper');

//   try {
//     const maps = await yamap.load();
//     const mapContainer = document.createElement('div');
//     mapContainer.style.height = `${mapWrapper.offsetHeight}px`;
//     mapContainer.style.width = `${mapWrapper.offsetWidth}px`;
//     mapWrapper.appendChild(mapContainer);
//     const map = new maps.Map(mapContainer, {
//       center: [-8.369326, 115.166023],
//       zoom: 8
//     });
//     window.addEventListener('resize', () => {
//       try {
//         mapContainer.style.height = `${mapWrapper.offsetHeight}px`;
//         mapContainer.style.width = `${mapWrapper.offsetWidth}px`;
//       } catch (error) {}
//     });
//   } catch (error) {
//     console.error('Something went wrong', error);
//   }
// }

import yamap from 'ymaps';

export async function yamapInit() {
  const mapWrapper = document.getElementById('mapWrapper');

  try {
    const maps = await yamap.load();
    const mapContainer = document.createElement('div');
    mapContainer.style.height = `${mapWrapper.offsetHeight}px`;
    mapContainer.style.width = `${mapWrapper.offsetWidth}px`;
    mapWrapper.appendChild(mapContainer);
    let map = new maps.Map(mapContainer, {
      center: [-8.369326, 115.166023],
      zoom: 8
    });
    window.addEventListener('resize', () => {
      try {
        mapContainer.style.height = `${mapWrapper.offsetHeight}px`;
        mapContainer.style.width = `${mapWrapper.offsetWidth}px`;
      } catch (error) {}
      try {
        setTimeout(() => {
          map.destroy();
          mapWrapper.querySelector('div').remove();
          const mapContainer = document.createElement('div');
          mapContainer.style.height = `${mapWrapper.offsetHeight}px`;
          mapContainer.style.width = `${mapWrapper.offsetWidth}px`;
          mapWrapper.appendChild(mapContainer);
          new maps.Map(mapContainer, {
            center: [-8.369326, 115.166023],
            zoom: 8
          });
          map = new maps.Map(mapContainer, {
            center: [-8.369326, 115.166023],
            zoom: 8
          });

          // Временное решение
          // Удаляем вторую карту, если сгенерировалась
          const d = mapWrapper.querySelectorAll('div ymaps');
          if (d.length > 1) {
            mapWrapper.querySelector('div ymaps:nth-child(1)').remove();
          }
        }, 1000)
      } catch (error) {}
    });
  } catch (error) {
    console.error('Something went wrong', error);
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

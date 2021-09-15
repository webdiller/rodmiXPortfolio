import yamap from 'ymaps';

export async function yamapInit() {
  const mapWrapper = document.getElementById('mapWrapper');

  try {
    const maps = await yamap.load();
    const mapContainer = document.createElement('div');
    mapContainer.style.height = `${mapWrapper.offsetHeight}px`;
    mapContainer.style.width = `${mapWrapper.offsetWidth}px`;
    mapWrapper.appendChild(mapContainer);
    const map = new maps.Map(mapContainer, {
      center: [-8.369326, 115.166023],
      zoom: 8
    });
    window.addEventListener('resize', () => {
      try {
        mapContainer.style.height = `${mapWrapper.offsetHeight}px`;
        mapContainer.style.width = `${mapWrapper.offsetWidth}px`;
      } catch (error) {}
      try {
        map.invalidateSize();
      } catch (error) {}
    });
  } catch (error) {
    console.error('Something went wrong', error);
  }
}

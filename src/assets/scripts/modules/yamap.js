import yamap from 'ymaps';

export async function yamapInit () {
  console.log('yamapScript start');
  const mapWrapper = document.getElementById("mapWrapper");
  try {
    const maps = await yamap.load();
    const mapContainer = document.createElement("div");
    mapContainer.style.height = `${mapWrapper.offsetHeight}px`;
    mapContainer.style.width = `${mapWrapper.offsetWidth}px`;
    mapWrapper.appendChild(mapContainer);
    new maps.Map(mapContainer, {
      center: [-8.369326, 115.166023],
      zoom: 8
    });
  } catch (error) {
    console.error("Something went wrong", error);
  }
}
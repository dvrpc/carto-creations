const sources = {
  boundaries: {
    type: "vector",
    url: "https://tiles.dvrpc.org/data/dvrpc-municipal.json",
  },
  MCD: {
    type: "geojson",
    data: "https://arcgis.dvrpc.org/portal/rest/services/Demographics/Forecast_2015to2050_MCD/FeatureServer/0/query?where=1%3D1&outFields=*&geometryPrecision=6&outSR=4326&f=geojson",
    generateId: true,
  },
  housing: {
    type: "geojson",
    data: "https://dvrpc.github.io/carto-creations/data/submarkets_v1.geojson",
    generateId: true,
  },
  CNTY: {
    type: "geojson",
    data: "https://arcgis.dvrpc.org/portal/rest/services/Demographics/Forecast_2015to2050_County/FeatureServer/0/query?where=1%3D1&outFields=*&geometryPrecision=5&outSR=4326&f=geojson",
    generateId: true,
  },
};

export default sources;

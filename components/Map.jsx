import ReactMapboxGl, { Marker } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  // accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
  accessToken:
    "pk.eyJ1IjoibWF4amdydWJlciIsImEiOiJja2xjM3E3MmcxYzBrMm9sYnp1MW81cGs2In0.A0nMg1Jdr81usX1IZRhggQ",
});

const AppMap = () => (
  <Map
    // eslint-disable-next-line
    style="mapbox://styles/mapbox/outdoors-v11"
    zoom={[14]}
    containerStyle={{
      width: "380px",
      height: "380px",
    }}
    center={[0.2916974797318405, 44.62779481310214]}
  >
    <Marker coordinates={[0.2916974797318405, 44.62779481310214]}>
      <div className="marker temporary-marker">
        <span></span>
      </div>
    </Marker>
  </Map>
);

export default AppMap;

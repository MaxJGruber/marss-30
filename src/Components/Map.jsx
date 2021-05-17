import ReactMapboxGl, { Marker } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
});

const AppMap = () => {
  return (
    <>
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
          {" "}
          <div className="marker temporary-marker">
            <span></span>
          </div>
        </Marker>
      </Map>
    </>
  );
};

export default AppMap;

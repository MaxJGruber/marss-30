import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
});
// const hairdressIcon = new Image(30, 30);
// hairdressIcon.src = "../Assets/hairdresser-15.svg";

const AppMap = () => {
  return (
    <>
      <Map
        // eslint-disable-next-line
        style="mapbox://styles/mapbox/outdoors-v11"
        zoom={[14]}
        containerStyle={{
          width: "100%",
          height: "100%",
        }}
        center={[0.2916974797318405, 44.62779481310214]}
      >
        <Layer
          type="symbol"
        //   images={["hairdresser-icon", hairdressIcon]}
          layout={{ "icon-image": "hairdresser-icon" }}
        >
          <Feature
            coordinates={[0.2916974797318405, 44.62779481310214]}
          ></Feature>
        </Layer>
      </Map>
    </>
  );
};

export default AppMap;

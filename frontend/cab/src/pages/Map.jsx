import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
// import "../pages/styles/mapStyle.css"
import styled from "styled-components";



const MapContainer = styled.div`

margin-top: 3%;
margin-left: 10%;
  width: 80%;
  height: 600px;
`;



const Map = () => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken =
    'pk.eyJ1IjoidGFuaXNocS0yOCIsImEiOiJjbGY2a245Z2Mxbm52NDBzOTAzd21lOXdoIn0.t54Xj-liRz-dB8fCEoPW5A';

    const newMap = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [77.2706013, 28.5458541,],
      zoom: 12,
    });


    const centerMarkerEl = document.createElement("div");
    centerMarkerEl.className = "center-marker";
    
    const centerMarker = new mapboxgl.Marker(centerMarkerEl)
      .setLngLat([77.2706013, 28.5458541])
      .addTo(newMap);
    

    centerMarker.addTo(newMap);


    newMap.on("load", () => {
      setMap(newMap);

      // Add a source and layer for displaying the path
      newMap.addSource("path", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });

      newMap.addLayer({
        id: "path",
        type: "line",
        source: "path",
        paint: {
          "line-color": "#d90000",
          "line-width": 2,
        },
      });
    });

 // Add a click event listener to the map
 newMap.on("click", (e) => {
  const { lng, lat } = e.lngLat;
  console.log(`Clicked at lng: ${lng}, lat: ${lat}`);
  // Store the coordinates in state or dispatch an action
  // to update the store
});


return () => newMap.remove();
}, []);
  useEffect(() => {
    if (!map) return;

  const centerMarkerEl = document.createElement("div");
  centerMarkerEl.className = "center-marker";

  const centerMarker = new mapboxgl.Marker(centerMarkerEl)
    .setLngLat([77.2706013, 28.5458541])
    .addTo(map);


    centerMarker.addTo(map);

    const updatePath = (endLngLat) => {
      const source = map.getSource("path");
      
      // create a new path with the start and end points
      const newFeature = {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [[77.2706013, 28.5458541], [...endLngLat]],
        },
      };
      
      source.setData({
        type: "FeatureCollection",
        features: [newFeature],
      });
    };
    

    const handleClick = (e) => {
      const endLngLat = [e.lngLat.lng, e.lngLat.lat];

      // Update the path with the new end point
      updatePath(endLngLat);

      // Update the marker position to the new end point
      centerMarker.setLngLat(endLngLat);
    };

    map.on("click", handleClick);

    return () => {
      map.off("click", handleClick);
      centerMarker.remove();
    };
  }, [map]);

  return <MapContainer ref={mapContainerRef} />;
};

export default Map;

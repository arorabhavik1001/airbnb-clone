import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

function Map({ searchResults, popupIndex }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/arorabhavik1001/cks77jvzp0vm518p1dmpjdc6q"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              className="cursor-pointer text-2xl animate-bounce"
              onClick={() => setSelectedLocation(result)}
              aria-label="push-pin"
            >
              📍
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              longitude={result.long}
              latitude={result.lat}
            >
              <div className="max-w-sm z-50">
                <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 mx-auto m-3">
                  <Image
                    src={result.img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
                <h4 className="text-xl font-semibold p-3">{result.title}</h4>
                <p className=" font-light pl-3">{result.description}</p>
                <hr className="m-3" />
                <div className="flex justify-between items-end">
                  <p className="flex items-center">
                    <StarIcon className="h-5 text-red-500" />
                    {result.star}
                  </p>
                  <div>
                    <p className="text-lg font-semibold pb-2">
                      {result.price}
                    </p>
                    <p className="text-right font-extralight">{result.total}</p>
                  </div>
                </div>
              </div>
            </Popup>
          ) : null}
        </div>
      ))}
      {popupIndex != 0 && (
        <Popup
          closeOnClick={true}
        //   onClose={() => popup.remove()}
          offsetLeft={-5}
          offsetTop={-10}
          longitude={searchResults[popupIndex].long}
          latitude={searchResults[popupIndex].lat}
        >
          <div className="max-w-sm z-50">
                <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 mx-auto m-3">
                  <Image
                    src={searchResults[popupIndex].img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
                <h4 className="text-xl font-semibold p-3">{searchResults[popupIndex].title}</h4>
                <p className=" font-light pl-3">{searchResults[popupIndex].description}</p>
                <hr className="m-3" />
                <div className="flex justify-between items-end">
                  <p className="flex items-center">
                    <StarIcon className="h-5 text-red-500" />
                    {searchResults[popupIndex].star}
                  </p>
                  <div>
                    <p className="text-lg font-semibold pb-2">
                      {searchResults[popupIndex].price}
                    </p>
                    <p className="text-right font-extralight">{searchResults[popupIndex].total}</p>
                  </div>
                </div>
              </div>
        </Popup>
      )}
      {popupIndex === 0 && (
        <Popup
        closeOnClick={true}
          offsetLeft={-5}
          offsetTop={-10}
          longitude={searchResults[0].long}
          latitude={searchResults[0].lat}
        >
          <div className="max-w-sm z-50">
                <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 mx-auto m-3">
                  <Image
                    src={searchResults[popupIndex].img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
                <h4 className="text-xl font-semibold p-3">{searchResults[popupIndex].title}</h4>
                <p className=" font-light pl-3">{searchResults[popupIndex].description}</p>
                <hr className="m-3" />
                <div className="flex justify-between items-end">
                  <p className="flex items-center">
                    <StarIcon className="h-5 text-red-500" />
                    {searchResults[popupIndex].star}
                  </p>
                  <div>
                    <p className="text-lg font-semibold pb-2">
                      {searchResults[popupIndex].price}
                    </p>
                    <p className="text-right font-extralight">{searchResults[popupIndex].total}</p>
                  </div>
                </div>
              </div>
        </Popup>
      )}
    </ReactMapGL>
  );
}

export default Map;

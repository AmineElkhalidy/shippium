import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useState, memo, useCallback } from "react";

function Map() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
    });

    const containerStyle = {
        width: "100%",
        height: "400px",
    };

    const center = {
        lat: -3.745,
        lng: -38.523,
    };

    return (
        <>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    {/* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            )}
        </>
    );
}

export default memo(Map);

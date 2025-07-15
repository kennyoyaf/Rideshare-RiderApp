// hooks/useLocation.ts
import * as Location from "expo-location";
import { useState } from "react";

export function useCurrentLocation() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = async () => {
    console.log("📍 Requesting location...");
    setLoading(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log("📍 Permission status:", status);
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return false;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      console.log("📍 Got location:", currentLocation);
      setLocation(currentLocation);
      return true;
    } catch (error) {
      console.error("❌ Failed to get location", error);
      setErrorMsg("Failed to get location");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { location, errorMsg, loading, getCurrentLocation };
}

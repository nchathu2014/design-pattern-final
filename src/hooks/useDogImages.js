import { useState, useEffect } from "react";

export default function useDogImages() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    async function fetchDogData() {
      const res = await fetch(
        "https://dog.ceo/api/breed/labrador/images/random/6"
      );
      const { message } = await res.json();
      setDogs(message);
    }

    fetchDogData();
  }, []);

  return dogs;
}

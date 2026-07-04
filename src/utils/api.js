const BASE_URL = "https://rickandmortyapi.com/api";

export function getCharacters() {
  return fetch(`${BASE_URL}/character`).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }

    return res.json();
  });
}

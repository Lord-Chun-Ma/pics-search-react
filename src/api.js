import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID -f5wIkNHGA3HHBSvjbVy0RUf9s5QBUgx6YuG8cAAY0E",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;

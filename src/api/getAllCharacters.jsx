const getAllCharacters = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return { initialCharacters: data.results, initialPagination: data.info };
  } catch (error) {
    console.error("Error:", error);
  }
};

export default getAllCharacters
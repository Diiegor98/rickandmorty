export const getCharacterById = async ({ params }) => {
  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/${params.id}`
    );
    const data = await res.json();
    return { character: data };
  } catch (error) {
    console.error("Error:", error);
  }
};

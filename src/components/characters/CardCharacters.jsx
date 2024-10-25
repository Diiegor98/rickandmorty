export const CardCharacters = ({ data }) => {
  const { name, status } = data;

  return (
    <div>
      <p>{name}</p>
      <p>{status}</p>
      <hr />
    </div>
  );
};

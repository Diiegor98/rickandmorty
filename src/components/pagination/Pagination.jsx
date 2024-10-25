export const Pagination = ({ onNextPage, onPreviousPage, pagination }) => {

  return (
    <div>
      <button onClick={onPreviousPage} disabled={pagination.prev === null ? true : false}>
        Anterior
      </button>
      <button onClick={onNextPage} disabled={pagination.next === null ? true : false}>Siguiente</button>
    </div>
  );
};

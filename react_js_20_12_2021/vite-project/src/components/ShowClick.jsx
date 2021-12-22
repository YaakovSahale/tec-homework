const ShowClick = () => {
  let count = 0;
  return (
    <div>
      <button
        onClick={() => {
          count++;
          document.title = count;
        }}
      >
        click
      </button>
    </div>
  );
};

export default ShowClick;

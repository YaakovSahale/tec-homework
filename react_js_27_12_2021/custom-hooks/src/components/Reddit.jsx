import useFetch from "../hooks/useFetch";

const Reddit = () => {
  const [data, isLoading, error] = useFetch(
    `https://www.reddit.com/r/reactjs.json`
  );

  return (
    <div>
      {isLoading ? <div className="loader">loading</div> : null}

      <ul>
        {data
          ? data.data.children.map((post, i) => {
              return <li key={i}>{post.data.title}</li>;
            })
          : null}
      </ul>
      {error ? (
        <div className="pError">
          <p> {error ? error.message : null}</p>
          <p> {error ? error.stack : null}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Reddit;

export default function BookDetails({ currentBook }) {
  return (
    <div>
      <h1>BookDetails Page</h1><br />
      <img src={currentBook.img} alt="" />
      <br />
      <br />
      <h2>{currentBook.title}</h2>
      <br />
      <p>{currentBook.pages}</p>
      <br />
      <p>{currentBook.summary}</p>
    </div>
  );
}

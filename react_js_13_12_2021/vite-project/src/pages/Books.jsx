import { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Books extends Component {
  state = {
    isRedirectToDetails: false,
    isRedirectToEdit: false,
  };
  render() {
    if (this.state.isRedirectToDetails) {
      return <Redirect to="/BookDetails" />;
    }
    if (this.state.isRedirectToEdit) {
      return <Redirect to="/EditBook" />;
    }
    return (
      <div>
        <h1>Books Page</h1>
        <br />
        <table className="booksTable">
          <thead>
            <tr>
              <th>Title</th>
              <th>Pages</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.books.map((book, i) => (
              <tr key={i}>
                <td>{book.title}</td>
                <td>{book.pages}</td>
                <td>
                  <button
                    onClick={() => {
                      this.props.showBookDetails(book);
                      this.setState({ isRedirectToDetails: true });
                    }}
                  >
                    Details
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      this.props.showBookToEdit(book,i);
                      this.setState({ isRedirectToEdit: true });
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <img
                    onClick={() => this.props.deleteBook(i)}
                    src="https://img.icons8.com/material-rounded/24/000000/trash.png"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

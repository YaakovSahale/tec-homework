import { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import BookDetails from "./pages/BookDetails";
import "./App.css";

export default class App extends Component {
  state = {
    books: [
      {
        title: "lamur",
        pages: 10,
        img: "https://cdn.pixabay.com/photo/2019/08/22/10/35/wild-4423156__340.jpg",
        summary: "aaaaaaa",
      },
      {
        title: "turtle",
        pages: 20,
        img: "https://cdn.pixabay.com/photo/2019/08/21/18/31/animel-4421748__340.jpg",
        summary: "bbbbbbb",
      },
      {
        title: "monkey",
        pages: 30,
        img: "https://cdn.pixabay.com/photo/2019/08/22/20/46/ape-4424386__340.jpg",
        summary: "ccccccc",
      },
      {
        title: "lama",
        pages: 40,
        img: "https://cdn.pixabay.com/photo/2019/04/26/01/09/kamel-4156460__340.jpg",
        summary: "ddddddd",
      },
      {
        title: "lion",
        pages: 50,
        img: "https://cdn.pixabay.com/photo/2019/04/29/00/54/lions-4164870__340.jpg",
        summary: "eeeeeee",
      },
      {
        title: "eagle",
        pages: 60,
        img: "https://cdn.pixabay.com/photo/2019/08/24/15/02/wild-4427795__340.jpg",
        summary: "fffffff",
      },
      {
        title: "zebra",
        pages: 70,
        img: "https://cdn.pixabay.com/photo/2019/08/22/10/35/wild-4423158__340.jpg",
        summary: "gggggggg",
      },
    ],
  };

  currentBook = {};
  bookToEdit = {};
  bookToEditIndex = null;

  showBookDetails = (book) => {
    this.currentBook = book;
  };

  showBookToEdit = (book, i) => {
    this.bookToEdit = book;
    this.bookToEditIndex = i;
  };

  editBook = (editedBook) => {
    const tempBooks = [...this.state.books];
    tempBooks[this.bookToEditIndex] = editedBook;
    this.setState({ books: tempBooks });
  };

  addNewBook = (newBook) => {
    const tempBooks = [...this.state.books];
    tempBooks.push(newBook);
    this.setState({ books: tempBooks });
  };

  deleteBook = (i) => {
    console.log("deleted");
    const tempBooks = [...this.state.books];
    tempBooks.splice(i, 1);
    this.setState({ books: tempBooks });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"Books"}>Books</Link>
            <Link to={"AddBook"}>AddBook</Link>
          </nav>
          <div className="appContainer">
            <Switch>
              <Route exact path={"/"} render={() => <Home />} />
              <Route
                exact
                path={"/Books"}
                render={() => (
                  <Books
                    books={this.state.books}
                    showBookDetails={this.showBookDetails}
                    showBookToEdit={this.showBookToEdit}
                    deleteBook={this.deleteBook}
                  />
                )}
              />

              <Route
                exact
                path={"/AddBook"}
                render={() => (
                  <AddBook
                    addNewBook={this.addNewBook}
                    pageTitle={"Add Book Page"}
                  />
                )}
              />

              <Route
                exact
                path={"/EditBook"}
                render={() => <EditBook bookToEdit={this.bookToEdit} editBook={this.editBook}/>}
              />

              <Route
                exact
                path={"/BookDetails"}
                render={() => <BookDetails currentBook={this.currentBook} />}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

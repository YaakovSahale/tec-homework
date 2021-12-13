import { Component } from "react";
import { Redirect } from "react-router-dom";

export default class AddBook extends Component {
  state = {
    isDisabled: true,
    isRedirectToBooks: false,
  };

  newBook = {};

  titleInput = "";
  pagesInput = null;
  imgInput = "";
  summaryInput = "";

  onChangeInputs = (e) => {
    switch (e.target.name) {
      case "title":
        this.titleInput = e.target.value;
        this.newBook.title = this.titleInput;

        break;
      case "pages":
        this.pagesInput = e.target.value;
        this.newBook.pages = this.pagesInput;
        break;
      case "img":
        this.imgInput = e.target.value;
        this.newBook.img = this.imgInput;
        break;
      case "summary":
        this.summaryInput = e.target.value;
        this.newBook.summary = this.summaryInput;
        break;

      default:
        console.log("error");
        break;
    }

    if (
      this.pagesInput > 0 &&
      this.titleInput &&
      this.imgInput &&
      this.summaryInput
    ) {
      this.setState({ isDisabled: false });
    }
  };

  render() {
    if (this.state.isRedirectToBooks) {
      return <Redirect to="/Books" />;
    }
    return (
      <div>
        <h1>Add Book Page</h1>
        <br />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addNewBook(this.newBook)
            this.setState({ isRedirectToBooks: true });
          }}
        >
          title:
          <br />
          <input
            name="title"
            type="text"
            onChange={(e) => this.onChangeInputs(e)}
          />
          <br />
          <br />
          pages: <br />
          <input
            name="pages"
            type="number"
            onChange={(e) => this.onChangeInputs(e)}
          />
          <br />
          <br />
          img url: <br />
          <input
            name="img"
            type="text"
            onChange={(e) => this.onChangeInputs(e)}
          />
          <br />
          <br />
          summary: <br />
          <textarea
            name="summary"
            cols="22"
            rows="8"
            onChange={(e) => this.onChangeInputs(e)}
          ></textarea>
          <br />
          <br />
          <input
            type="submit"
            value={"submit"}
            disabled={this.state.isDisabled}
          />
        </form>
      </div>
    );
  }
}

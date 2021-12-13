import { Component } from "react";
import { Redirect } from "react-router-dom";

export default class AddBook extends Component {
  state = {
    isDisabled: true,
    isRedirectToBooks: false,
  };

  newEditedBook = {};

  titleInput = "";
  pagesInput = null;
  imgInput = "";
  summaryInput = "";

  onChangeInputs = (e) => {
      console.log(e.target.value);
    switch (e.target.name) {
      case "title":
        this.titleInput = e.target.value;
        this.newEditedBook.title = this.titleInput;

        break;
      case "pages":
        this.pagesInput = e.target.value;
        this.newEditedBook.pages = this.pagesInput;
        break;
      case "img":
        this.imgInput = e.target.value;
        this.newEditedBook.img = this.imgInput;
        break;
      case "summary":
        this.summaryInput = e.target.value;
        this.newEditedBook.summary = this.summaryInput;
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
    else{
        console.log("no");
    }
  };

  render() {
    if (this.state.isRedirectToBooks) {
      return <Redirect to="/Books" />;
    }
    return (
      <div>
        <h1>Edit Book Page</h1>
        <br />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.editBook(this.newEditedBook)
            this.setState({ isRedirectToBooks: true });
          }}
        >
          title:
          <br />
          <input
            name="title"
            type="text"
            onChange={(e) => this.onChangeInputs(e)}
            defaultValue={this.props.bookToEdit.title}
          />
          <br />
          <br />
          pages: <br />
          <input
            name="pages"
            type="number"
            onChange={(e) => this.onChangeInputs(e)}
            defaultValue={this.props.bookToEdit.pages}
          />
          <br />
          <br />
          img url: <br />

          <textarea
            name="img"
            cols="22"
            rows="5"
            onChange={(e) => this.onChangeInputs(e)}
            defaultValue={this.props.bookToEdit.img}
          ></textarea>


          <br />
          <br />
          summary: <br />
          <textarea
            name="summary"
            cols="22"
            rows="8"
            onChange={(e) => this.onChangeInputs(e)}
            defaultValue={this.props.bookToEdit.summary}
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

import { Component } from "react";
import "./ChooseEvenGame.css";

export default class ChooseEvenGame extends Component {
  state = {
    arrayDisabled: [],
    gameOverDisplay: "",
    gameScore: null,
    gameOver: false,
  };

  tempArrayDisabled = [];
  rngNums = [];
  gameOverCount = null;
  setTimeoutId = null;
  tempGameScore = 0;

  render() {
    const { arrayDisabled } = this.state;

    // localStorage.setItem("gameScore", "[]");

    const startBtn = () => {
      this.setState({gameOver:false})
      this.rngNums = new Array(10)
        .fill(0)
        .map(() => Math.floor(Math.random() * 20 + 1));

      this.tempArrayDisabled = new Array(10).fill(false);

      this.rngNums.map((num) => (num % 2 == 0 ? this.gameOverCount++ : null));
      this.setState({ arrayDisabled: this.tempArrayDisabled });

      this.setTimeoutId = setInterval(() => {
        this.tempGameScore++;
      }, 1000);
    };

    const clickHandler = (num, i) => {
      this.tempArrayDisabled[i] = true;
      this.setState({ arrayDisabled: this.tempArrayDisabled });

      if (num % 2 == 0) {
        this.gameOverCount--, this.gameOverCount == 0 ? gameOver() : null;
      }
      this.tempGameScore++;
    };

    const gameOver = () => {
      this.setState({
        gameOverDisplay: "Game over",
        gameScore: `your score is : ${this.tempGameScore}  secondes`,
      });
      clearTimeout(this.setTimeoutId);

      let localGameScore = getLocalStorageScores();

      localGameScore.push(this.tempGameScore);
      localStorage.setItem("gameScore", JSON.stringify(localGameScore));
      console.log(localGameScore);
      this.setState({ gameScore: localGameScore });
      this.setState({ gameOver: true });

      console.log(this.state.gameScore);
    };

    const getLocalStorageScores = () => {
      let jsonGameScore = localStorage.getItem("gameScore");
      return JSON.parse(jsonGameScore) ? JSON.parse(jsonGameScore) : [];
    };

    return (
      <>
        <h1>Choose even</h1>
        <div className="numsContainer">
          {this.rngNums.map((num, i) => {
            return (
                <button key={i}
                  disabled={arrayDisabled[i]}
                  onClick={() => clickHandler(num, i)}
                >
                  {num}
                </button>
            );
          })}
        </div>
        <br />
        <br />
        <button onClick={startBtn}>Start game</button>
        {this.state.gameOver ? (
          <>
            <h3>{this.state.gameOverDisplay}</h3>
            <table>
              <thead>
                <tr>
                  <th>table score</th>
                </tr>
              </thead>
              <tbody>
                {this.state.gameScore.map((score, i) => {
                  return (
                    <tr key={i}>
                      <td>{score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) : null}
      </>
    );
  }
}

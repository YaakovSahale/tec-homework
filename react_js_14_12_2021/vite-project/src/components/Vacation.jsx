import { useState } from "react";

export default function Vacation() {
  const [vacationsList, setVacationsList] = useState([]);
  const [newVacation, setNewVacation] = useState("");
  const [{ isAllBtn, isActiveBtn, isCompletedBtn }, setButtons] = useState({
    isAllBtn: true,
    isActiveBtn: false,
    isCompletedBtn: false,
  });

  const addNewVacation = (e) => {
    if (!newVacation) {
      return;
    }
    e.preventDefault();
    const tempVacationsList = [...vacationsList];
    tempVacationsList.push(newVacation);
    setVacationsList(tempVacationsList);

    e.target.vacationInput.value = "";
    setNewVacation("");
  };

  const completeTheVacation = (i,id) => {
    const tempVacationsList = [...vacationsList];
    const tempVacation = vacationsList.find(vacation => vacation.id === id)
    tempVacation.isCompleted = !tempVacation.isCompleted
    setVacationsList(tempVacationsList);
  };

  const switchButtons = (e) => {
    switch (e.target.name) {
      case "All":
        setButtons({
          isAllBtn: true,
          isActiveBtn: false,
          isCompletedBtn: false,
        });
        break;
      case "Active":
        setButtons({
          isAllBtn: false,
          isActiveBtn: true,
          isCompletedBtn: false,
        });
        break;
      case "Completed":
        setButtons({
          isAllBtn: false,
          isActiveBtn: false,
          isCompletedBtn: true,
        });
        break;

      default:
        console.log("switch error");
        break;
    }
  };

  const checkButton = () => {
    if (isAllBtn) {
      return vacationsList;
    } else if (isActiveBtn) {
      return vacationsList.filter((vacation) => vacation.isCompleted == false);
    }
    return vacationsList.filter((vacation) => vacation.isCompleted == true);
  };

  const showCurrentList = () => {
    const currentList = checkButton();

    return currentList.map((vacation, i) => (
      <>
        <li
          key={i}
          style={{
            textDecorationLine: vacation.isCompleted ? "line-through" : "none",
          }}
          onClick={() => completeTheVacation(i,vacation.id)}
        >
          {vacation.name}
        </li>
        <br />
      </>
    ));
  };


  return (
    <div className="vacationContainer">
      <h1 className="title">Vacation Wish List</h1>
      <form onSubmit={(e) => addNewVacation(e)}>
        <input
          type="text"
          name="vacationInput"
          className="vacationInput"
          onChange={(e) => {
            const newVacationObj = {
              name: e.target.value,
              isCompleted: false,
              id: Math.floor(Math.random() * 100000),
            };
            setNewVacation(newVacationObj);
          }}
        />
        <input type={"submit"} value={"Add Vacation"} className="addVacation" />
      </form>
      <div>
        <ol className="listBody">
          {showCurrentList()}
        </ol>
      </div>
      <div className="buttons">
        <button name="All" disabled={isAllBtn} onClick={(e) => switchButtons(e)}>
          All
        </button>
        <button
          name="Active"
          disabled={isActiveBtn}
          onClick={(e) => switchButtons(e)}
        >
          Active
        </button>
        <button
          name="Completed"
          disabled={isCompletedBtn}
          onClick={(e) => switchButtons(e)}
        >
          completed
        </button>
      </div>
    </div>
  );
}

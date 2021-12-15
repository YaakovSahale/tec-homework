import { useState } from "react";

export default function Vacation() {
  const [vacationsList, setVacationsList] = useState([
    { name: "Bosnie herzegovina", isCompleted: false },
    { name: "Paris", isCompleted: false },
    { name: "London", isCompleted: false },
  ]);

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

  const completeTheVacation = (i) => {
    const tempVacationsList = [...vacationsList];
    tempVacationsList[i].isCompleted = !tempVacationsList[i].isCompleted;
    setVacationsList(tempVacationsList);
  };

  const showVacation = (e) => {
    console.log(e.target.name);
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

  const allVacations = isAllBtn
    ? vacationsList.map((vacation, i) => (
        <>
          <li
            key={i}
            style={{
              textDecorationLine: vacation.isCompleted
                ? "line-through"
                : "none",
            }}
            onClick={() => completeTheVacation(i)}
          >
            {vacation.name}
          </li>
          <br />
        </>
      ))
    : null;

  const activeVacation = isActiveBtn
    ? vacationsList.map((vacation, i) =>
        vacation.isCompleted ? null : (
          <>
            <li
              key={i}
              style={{
                textDecorationLine: vacation.isCompleted
                  ? "line-through"
                  : "none",
              }}
              onClick={() => completeTheVacation(i)}
            >
              {vacation.name}
            </li>
            <br />
          </>
        )
      )
    : null;

  const completedVacation = isCompletedBtn
    ? vacationsList.map((vacation, i) =>
        vacation.isCompleted ? (
          <>
            <li
              key={i}
              style={{
                textDecorationLine: vacation.isCompleted
                  ? "line-through"
                  : "none",
              }}
              onClick={() => completeTheVacation(i)}
            >
              {vacation.name}
            </li>
            <br />
          </>
        ) : null
      )
    : null;

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
            };
            setNewVacation(newVacationObj);
          }}
        />
        <input type={"submit"} value={"Add Vacation"} className="addVacation"/>
      </form>
      <div>
        <ol className="listBody">
          {allVacations}
          {activeVacation}
          {completedVacation}
        </ol>
      </div>
      <div className="buttons">
        <button name="All" disabled={isAllBtn} onClick={(e) => showVacation(e)}>
          All
        </button>
        <button
          name="Active"
          disabled={isActiveBtn}
          onClick={(e) => showVacation(e)}
        >
          Active
        </button>
        <button
          name="Completed"
          disabled={isCompletedBtn}
          onClick={(e) => showVacation(e)}
        >
          completed
        </button>
      </div>
    </div>
  );
}

import React from "react";
import ChefFood from "./ChefFood";

export default class AllChefFood extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const foodTitle1 = "pizza";
    const foodTitle2 = "salads";
    const foodTitle3 = "desserts";

    const imgUrl1 = "https://cdn.pixabay.com/photo/2016/03/27/22/38/cake-1284548__340.jpg"
    const imgUrl2 = "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939__340.jpg"
    const imgUrl3 = "https://cdn.pixabay.com/photo/2014/06/21/21/00/salad-374173__340.jpg"

    const description =
      "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    return (
      <div className="foodContainer">
        <ChefFood foodTitle={foodTitle1} description={description} imgUrl = {imgUrl1}/>
        <ChefFood foodTitle={foodTitle2} description={description} imgUrl = {imgUrl2}/>
        <ChefFood foodTitle={foodTitle3} description={description} imgUrl = {imgUrl3}/>
      </div>
    );
  }
}

import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default class LandingPage extends React.Component{
    constructor(props){
        super()
    }

    render(){
        const logoUrl = "https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286__340.png"
        const logoName = "PC zone"
        const videoUrl = "https://player.vimeo.com/external/467145199.sd.mp4?s=1b436bd9b4c9a44b17a8b65d9bbcef2d9296bfa4&profile_id=164"
        const imgUrl = "https://cdn.pixabay.com/photo/2015/12/23/22/36/minecraft-1106252__340.jpg"
        const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        return(
            <div>
                <Header logoUrl = {logoUrl} logoName = {logoName}/>
                <Main videoUrl = {videoUrl} imgUrl = {imgUrl} description = {description}/>
                <Footer/>
            </div>
        )
    }
}
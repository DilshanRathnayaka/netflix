
import Feature from "../components/feature/Feature";
import List from "../components/list/List";
import { NavBar } from "../components/NavBar/NavBar"
import "./home.scss"


const Home = () => {
    return (
     <div className="home">
        <NavBar/>
        <Feature/>
        <List/> 
        <List/> 
        <List/> 
        <List/> 
       

     </div>   
    );
};

export default Home



import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HobbyList from "../components/home/home-list";
import casual from "casual-browserify";
import { addHobby, setActiveHobby } from "../actions/hobby";

// HomePage.propTypes={

// };
const HomePage = (props) => {
    // get list hobbys from hobbyReducer
    //
    const hobbys = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId)
    const dispatch = useDispatch();
    const handleAddHobby = () => {
        //Random Hobby:{id + title}
        const newHobby = {
            id: casual.uuid,
            title: casual.title
        }
        //Dispatch action(add hobby) to redux store
        const action = addHobby(newHobby);
        dispatch(action);
    }
    const [dataDad, setDataDad] = useState("Ban đầu");
    console.log("Dữ liệu ban đầu dòng 28", dataDad);
    //FC của thèn cha truyền qua cho thèn con dưới dạng props
    const handleHobbyClick = (hobby) => {
        console.log("Dữ liệu thèn cha nhận được:", hobby)
        setDataDad(hobby);
        const action = setActiveHobby(hobby);
        dispatch(action)
    }
    console.log("Dữ liệu sau khi nhận dòng 36: ", dataDad);
    return (
        <div className="home-page">
            <p>HomePage</p>
            <button onClick={handleAddHobby}>Add new Hobby</button>
            <HobbyList hobbys={hobbys} activeId={activeId}
                // Truyền fc của thèn cha cho thèn con...để nhận dữ liệu từ thèn con gởi lên
                onHobbyClick={handleHobbyClick} />
        </div>
    )
}
export default HomePage;
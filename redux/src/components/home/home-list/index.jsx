import React from "react";
import PropTypes from 'prop-types';
import './hobbys.css'

const HobbyList = (props) => {
    const { hobbys, activeId, onHobbyClick } = props;
    console.log(hobbys);
    HobbyList.propType = {
        hobbys: PropTypes.array,
        activeId: PropTypes.number,
        onHobbyClick: PropTypes.func
    }
    HobbyList.defaultProps = {
        hobbys: [], activeId: null, onHobbyClick: null
    }
    const handleClick = (hobby) => {
        console.log("Dữ liệu thèn con: ", hobby)
        if (onHobbyClick) {
            // truyền dữ liệu từ con sang cha thông qua func
            onHobbyClick(hobby)
        }
    }
    return (
        <div>
            <p>List todo</p>
            <ul className="hobby-list">
                {hobbys.map((hobby, index) => {
                    return <li key={hobby.id}
                        className={hobby.id === activeId ? 'active' : ''}
                        onClick={() => handleClick(hobby)}>
                        {hobby?.title || hobby}
                    </li>
                })}
            </ul>
        </div>

    )
}
export default HobbyList;
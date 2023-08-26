import {NavLink, Outlet} from "react-router-dom";
import './Lessons.css'


const Lessons = () => {
  return (
    <div className="lessons bg">
      <div className="container">
        <div className="expert_title">Still have math question ?</div>
        <div style={{textAlign:"center"}}>
          <button className="expert_btn">Ask our live tutors</button>
        </div>
      </div>
      <div className="bg-all">
        <div className="container">
          <div className="lessons_ul">
            <div>
              <NavLink
                className="item"
                to="/Lessons/Scientific"  className={({isActive}) => isActive?
                "active" : "link"}>
                Scientific Notation
              </NavLink>
            </div>
            <div>
              <NavLink
                className="item"
                className={({isActive}) => isActive?
                "active" : "link"}
                       activeClassName="actives"
                        to="/Lessons/Length">
                Length Coversion
              </NavLink>
            </div>
            <div>
              <NavLink
                className="item"
                activeClassName="active "
                className={({isActive}) => isActive?
                  "active" : "link"} to="/Lessons/Area">
              Area Coversion
              </NavLink>
            </div>
          </div>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
export default Lessons
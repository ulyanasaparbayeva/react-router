import './Expert.css'
import  {Outlet} from "react-router-dom";
import {NavLink} from "react-router-dom";


const Expert = () => {
  return (
    <div className="expert">
      <div  className="expert bg">
        <div className="container">
          <div className="expert_title">Still have math question ?</div>
          <div style={{textAlign:"center"}}>
            <button className="expert_btn">Ask our live tutors</button>
          </div>
        </div>
      </div>
      <div className="bg-all">
        <div className="container">
          <ul className="expert_ul">
            <li>
              <NavLink  style={{padding:"5px 15px",border:"1px solid #000000b3",borderRadius:"30px",

              }}
                        to="/Expert/All"  className={({isActive}) => isActive?
                "actives" : "link"}>
                All
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive?
                "actives" : "link"}
                       activeClassName="actives"
                       style={{padding:"5px 15px",border:"1px solid #000000b3",borderRadius:"30px",

              }} to="/Expert/Arifmetic">
                Arifmetic
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="actives"
                className={({isActive}) => isActive?
                  "actives" : "link"}
                style={{padding:"5px 15px",border:"1px solid #000000b3",borderRadius:"30px",

              }} to="/Expert/Algebra">
                Algebra
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="actives"
                className={({isActive}) => isActive?
                  "actives" : "link"}
                style={{padding:"5px 15px",border:"1px solid #000000b3",borderRadius:"30px",

              }} to="/Expert/Geometry">
                Geometry
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="actives"
                className={({isActive}) => isActive?
                  "actives" : "link"}
                style={{padding:"5px 15px",border:"1px solid #000000b3",borderRadius:"30px",

              }}  to="/Expert/Trigonemtry">
                Trigonemtry
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="actives"
                className={({isActive}) => isActive?
                  "actives" : "link"}
                style={{padding:"5px 15px",border:"1px solid #000000b3",borderRadius:"30px",

              }} to="/Expert/Calculus">
                Calculus
              </NavLink>
            </li>
          </ul>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
export default Expert
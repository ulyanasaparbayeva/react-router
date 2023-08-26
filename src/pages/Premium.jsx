import appstore from "../images/appstore.svg";
import google from "../images/google.svg";
import './Premium.css'


const Premium = () => {
 return (
   <div className="premium yourElement">
    <div className="container">
      <div className="premium_title">CameraMath Premium</div>
      <div className="premium_text">Solve any math problem</div>
      <div  className="img_group top">
        <img src={appstore}/>
        <img src={google}/>
      </div>
    </div>
   </div>
 )
}
export default Premium
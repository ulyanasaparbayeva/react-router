import './Download.css'
import appstore from '../images/appstore.svg'
import google from '../images/google.svg'
import children from '../images/children.jpg'



const  Download = () => {
  return (
    <div className="bg download">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt">
           <img className="download_img" src={children}/>
          </div>
          <div className="col-lg-6 pt">
           <div className="download_title">Download and Try CameraMath for free</div>
            <div className="download_text">Don't know answers to the math questions, and no one around
              to help with math homework. CameraMath is your personal assistant for math homework</div>
            <div  className="img_group">
              <img src={appstore}/>
              <img src={google}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Download
import './Home.css'
import banner from '../images/banner.svg'
import appstore from '../images/appstore.svg'
import google from '../images/google.svg'


const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="home_title">Solving Any Math Problem</h1>
            <div className="secondary_title">Solve math problem in a snap</div>
            <div className="img_group">
              <img src={appstore}/>
              <img src={google}/>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={banner} alt={banner}/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
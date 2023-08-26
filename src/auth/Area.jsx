import area from "../images/area.png";

const Area = () => {
  return (
    <div className="container">
      <div className="card" style={{textAlign:"initial",marginBottom:"40px",width:"auto"}}>
        <img src={area} style={{width:"70px" ,height:"70px"}}/>
        <div>Area conversion calculator for metric and imperial units including Acres and Hectares. ... Area Conversion. Select the unit you wish to convert from.
        </div>
      </div>
    </div>
  )
}
export default Area
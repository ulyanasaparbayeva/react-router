import lengt from "../images/lengt.png";

const  Length = () => {
 return (
   <div className="container">
    <div className="card" style={{textAlign:"initial",marginBottom:"40px",width:"auto"}}>
     <img src={lengt} style={{width:"70px" ,height:"70px"}}/>
     <div>.Converting metric units of length: 1 mm = 0.1 cm = 0.001 m = 0.000001 km. 1 cm = 10 mm = 0.01 m = 0.00001 km. 1 m = 1,000 mm = 100 cm = 0.001 km.Jul 21, 2023</div>
    </div>
   </div>
 )
}
export default Length
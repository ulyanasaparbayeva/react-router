import images from '../images/images.jpg'

const Scientific = () => {
  return (
    <div className="container">
      <div className="card" style={{textAlign:"initial",marginBottom:"40px",width:"auto"}}>
        <img src={images} style={{width:"70px" ,height:"70px"}}/>
        <div >Scientific notation is a way of
          writing very large or very small numbers. A number is written in scientific notation when a number between 1 and 10 is multiplied by a power of 10. For example, 650,000,000 can be written in scientific notation as 6.5 ✕ 10^8. Created by Sal Khan and CK-12 Foundation.</div>
      </div>
    </div>
  )
}
export default Scientific
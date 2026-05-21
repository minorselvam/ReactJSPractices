import CarExample from './Car';
import Apple from './Apple';


function Garage() {
//  const brandName = "BMW";
//  const carColor = "white";

//   return (
//     <div>
//       <h1> who lives inside my garage?</h1>
//       <CarExample assignedBrandName={brandName} assignedCarColor={carColor}/>
//       <Apple/>
//     </div>      
//   );

const carInfo = {assignedBrandName:"BMW", assignedCarColor:"white"};
// const carInfo = {};
const appleInfo = {appleType:"Simla", appleRate:"15"};
const carList = [
  {assignedBrandName:"BMW", assignedCarColor:"White"},
  {assignedBrandName:"Ford", assignedCarColor:"Red"},
  {assignedBrandName:"Maruti", assignedCarColor:"Green"},
];

const numberList = [1,2,3,4,5,6]

const isDoorOpened = false;
const showCarInfo = carInfo.assignedBrandName !== undefined && carInfo.assignedCarColor !== undefined;
return (
    <div>
      <h1> who lives inside my garage?</h1>
      {/* {carInfo.assignedBrandName !== undefined && carInfo.assignedCarColor !== undefined ?
      <CarExample assignedCarInfo={carInfo}/> : null } */}
      {showCarInfo && <CarExample assignedCarInfo={carInfo}/> }
      <Apple appleDetails={appleInfo}/>
      {isDoorOpened?<h2>Garage door is open</h2> : <h2>Garage door is closed</h2>}

      <ul>
        {carList.map((carInfo) => <li key={carInfo.assignedBrandName}><CarExample assignedCarInfo={carInfo}/></li>) }
      </ul>
      <ul>
        {numberList.map((eachVal, eachValIndex)=> <p key={eachValIndex}>{eachVal}</p>)}
      </ul>
    </div>      
  );
}
export default Garage;
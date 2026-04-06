function Car(props) {
  // const {assignedBrandName, assignedCarColor} = props;
const {assignedCarInfo} = props;
const {assignedBrandName, assignedCarColor} = assignedCarInfo;
const text = `Hi, I am a ${assignedBrandName} car screen. The color of the car is ${assignedCarColor}.`;

  return (
    <h2>{text}</h2>
  );
}
export default Car;
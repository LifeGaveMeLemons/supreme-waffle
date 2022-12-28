import React, {useState, useEffect} from "react";
import AssignNewValue from "./AssignNewValue";

function Table (props) {
  const [renderPopUp, setRenderPopUp] = useState()
  const [elements, setElements] = useState([{ Name: "" ,Lastname: "", Age: 0,  City: ""}])
  useEffect(() =>{
    if (props.initializer !== undefined ) {
      setElements(props.initializer)
      console.log(props.initializer)
      return;
    }
  },[])
  

  let allCities = props.cityOptions.map( (valueOfElement,index)=> {
    return <option key={index} value ={valueOfElement}>{valueOfElement}</option>
  });
  
  const changeSpecificElement = (index, newName,newLastName,newAge,newCity) =>
  {
    let tempVal = { Name: newName,Lastname: newLastName, Age: newAge,  City: newCity};
    let tempArr = elements;
    tempArr[index] = tempVal;
    setElements(tempArr)
    setRenderPopUp("")
  }
  const removeSpecificElement = (index) =>
  {
    let tempArr = [...elements];
    tempArr.splice(index,1)

    setElements(tempArr);
  }
  const addElement = () =>
  {
    setElements(elements.concat({Name: "",Lastname: "", Age: 0,  City: ""}))
  }


  return (
    <>
    <button onClick={() => props.copyFn(props.indx,[...elements])}>copy table underneath</button>
    <button onClick={() => props.removeFn(props.indx)}>remove the Table underneath</button>
     {renderPopUp}
    <button onClick={addElement}> add elements</button>
    <table border="1">
        <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>City</th>
        <th>Edit</th>
      </tr>
      </thead>
      <tbody>
    {elements.map
      ((value, inde)=>
        {

          return <tr key = {inde}>
          <td>{inde}</td>
          <td>{value.Name}</td>
          <td>{value.Lastname}</td>
          <td>{value.Age}</td>
          <td>{value.City}</td>
          <td><button onClick={() => {setRenderPopUp(<AssignNewValue cityOptions={allCities} removeFn={removeSpecificElement} cbkFn = {changeSpecificElement} tgtIndex={inde}/>)}}> edit</button></td>
          </tr>
        }
        
      )
    } 
    </tbody>
    </table>
    </>
  );
}

export default Table;

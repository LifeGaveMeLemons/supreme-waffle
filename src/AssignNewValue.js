import { useState } from "react";
import React from "react";

function AssignNewValue(props)
{
    const [city, setCity] = useState("");
    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [age,setAge] = useState(0);
    const [cityMessage, setCityMessage] = useState("");
    const [nameMessage,setNameMessage] = useState("");
    const [lastNameMessage,setLastNameMessage] = useState("");
    const [ageMessage,setAgeMessage] = useState("");
    const [generalErrorMessage,setgeneralErrorMessage] = useState("");

    const checkName = (event) =>{
        if (/^[a-zA-Z]*$/.test(event.target.value)) {
            setNameMessage("");
            setName(event.target.value);
          }
        else{
            setNameMessage("please do not enter numbers or sybbols  in your name field")
        }
    }
    const checkAge = (event) =>{
        if (event.target.value >=0 && event.target.value <=110) {
            setAgeMessage("")
            setAge(event.target.value)
        }
        else{
            setAgeMessage("please enter a number between 0 and 110")
        }

    }
    const checkLastName = (event) =>{
        if (/^[a-zA-Z]*$/.test(event.target.value)) {
            setLastNameMessage("");
            setLastName(event.target.value);
          }
        else{
            setLastNameMessage("please do not enter numbers or sybbols  in your last name field")
        }
    }
    const checkCity = (event) =>{
        if(event.target.value != "")
        {
            setCityMessage()
            setCity(event.target.value)
        }
        else{
            setCityMessage("please enter a city")
        }
    }
    const validateBeforeSubmitting = () =>
    {
        if (!/^[a-zA-Z]*$/.test(name))
        {
            setgeneralErrorMessage("please enter a valid name");
            return;
        }
        if (!/^[a-zA-Z]*$/.test(lastName))
        {
            setgeneralErrorMessage("please enter a valid last name");
            return;
        }
        if (age <=0 && age >= 110)
        {
            setgeneralErrorMessage("please enter a valid age");
            return;
        }
        if(city =="" || city == "please enter a valid  please select")
        {
            setgeneralErrorMessage("please enter a valid city");
            return;
        } 


        props.cbkFn(props.tgtIndex,name,lastName,age,city)

    }
    return <center>
            <p>
                <input placeholder="Name" type="text" value={name} onChange={checkName}></input><br/>
                {nameMessage}<br/>
                <input placeholder="Last Name" type="text" value={lastName} onChange={checkLastName}></input><br/>
                {lastNameMessage}<br/>
                <input placeholder="Age" type="number" value={age} onChange={checkAge}></input><br/>
                {ageMessage}<br/>
                <select placeholder="please select a value" value={city} onChange={checkCity}>{props.cityOptions}</select><br/>
                {cityMessage}<br/>
                {generalErrorMessage}<br/>
                <button onClick={validateBeforeSubmitting}>change element at {props.tgtIndex}</button><br/>
                <button onClick={() => props.removeFn(props.tgtIndex)}>remove this element</button><br/>
            </p>
        </center>
    
}
export default AssignNewValue;
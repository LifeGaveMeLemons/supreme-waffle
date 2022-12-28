import React, {useState, useEffect} from "react";
import Table from "./Table";

function App() {
  

  const [indexToCopyTo,setIndexToCopyTo] = useState({index: -1,value:{}})
  const[increment,setIncrement] = useState(1)
  const [tablesArr, setTablesArr] = useState([0])
  const cityOptions = ["please select", "Riga","Jelgava","Daugavpils"];
  

  const addElement = () =>
  {
    setIncrement(increment+1);
    setTablesArr(tablesArr.concat(increment))
    console.log(increment);

  }
  const copy = (index,elements) =>
  {
    let tempArr = [...tablesArr];
    tempArr.splice(index+1,0,increment);
    console.log(tempArr)
    setTablesArr(tempArr);
    setIncrement(increment+1);
    setIndexToCopyTo({index:index+1, value: elements});
  }
  const removeSpecificElement = (index) =>
  {
      let temparr = [...tablesArr];
      temparr.splice(index,1)
      setTablesArr(temparr)
  }
  let allTables = tablesArr.map((value,index) => 
    {
      if (index == indexToCopyTo.index) {
        return <Table key={value} removeFn={removeSpecificElement} initializer={indexToCopyTo.value} indx={index} curKey={value} cityOptions={cityOptions} copyFn={copy} />

      }
      return <Table key={value} removeFn={removeSpecificElement} indx={index} curKey={value} cityOptions={cityOptions} copyFn={copy} />
    }
  )
  return (<>
  
    <button onClick={addElement}>Add Table</button>
    {allTables}
    </>
  )
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Notes from './Components/Notes';

// get the notes from local storage
const getLocalItems =()=>{
  let storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      return JSON.parse(localStorage.getItem('notes'));
  } else {
      return [];
  }
} 


function App() {

  const [notes,setNotes] = useState(getLocalItems());
  const [Snotes,SsetNotes] = useState(getLocalItems());
  const [searched, setSearched] = useState(false);
  
  const addEvent=(note)=>{
    setNotes((preValue)=>{
      return[...preValue, note]
    })
    SsetNotes((preValue)=>{
      return[...preValue, note]
    })
  }

  const onDelete=(id)=>{
    setNotes((oldData)=>
      oldData.filter((value,indx)=>{
        return indx !== id;
      })
    );
    SsetNotes((oldData)=>
    oldData.filter((value,indx)=>{
      return indx !== id;
    }))
  }

  const searchEvent=(search)=>{
    setSearched(true);
     SsetNotes((oldData)=>
       oldData.filter((value,id)=>{
         return value.title.toLowerCase() === search.toLowerCase();
       })
     );
  }

  // add data to localStorage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])
  
  return (
    <div className="App">
      <Navbar searchNote={searchEvent}/>
      <Body passNote = {addEvent}/>
      {searched ? (
        Snotes.map((val,index)=>{
            return (<Notes 
            id={index}
            key={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />)
        })
      ): notes.map((val,index)=>{
            return (<Notes 
            id={index}
            key={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />)
        })}
    </div>
  );
}

export default App;

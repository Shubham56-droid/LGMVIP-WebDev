import React, { useState } from 'react';
import { apifetch } from "./component/configration";
import  Navbar  from "./component/navbar";
import  Users  from "./component/users";
import { Loader } from "./component/loader";
import './App.css';

function App() {
   const [personData,setpersonData] = useState([]);
   const [loading,setLoading] = useState(false);
   const [page,setPage] = useState({minPage:1, maxPage:6});
   const personDataPresent = personData.length !== 0;

   const getpersonData  = async minPage => {
     if( personData.length !==0 && minPage === 1){
       return;
     }
     setLoading(true);
     const users = await apifetch(minPage);
     setPage({ minPage, maxPage: personData.total_pages});

     setLoading(false);
     setpersonData([...personData,...users.data]);
     
   };
  
 

  return(
    <div className="App">
     <Navbar getpersonData={ getpersonData }/>
     { !loading && !personDataPresent && (
       <div className="container">
      <div class="typewriter">
        <div class="typewriter-text">Show Data Of The Users </div>
      </div>
       </div>
       
     )}

      {loading && (
        <Loader/>
      )}

      { !loading && personData && <Users personData={personData}/>}

    </div>
  );
}

export default App;

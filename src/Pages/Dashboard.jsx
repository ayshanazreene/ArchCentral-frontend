import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import  Consumer  from '../Component/Consumer';
import Architect from '../Component/Architect';

function Dashboard() {
  // const location = useLocation();
  const [architect, setArchitect] = useState(false)
console.log(sessionStorage.getItem('userType'));
useEffect(() => {
  if (sessionStorage.getItem('userType') == '2')
  setArchitect(true)
},[]);

  return (
    <>
      {(architect &&
        <div><Architect firstName='Job Martin'/></div>

      )}

      {(!architect &&
        <div><Consumer name='Hana Gill'/></div>

      )}
    </>
  )
}

export default Dashboard
import {Outlet} from "react-router-dom"

import styles from "./App.module.css";

function App() {


  return (
    <>
      <div className={styles.app}>
        <h1>Git Hub Buscador</h1>
        <Outlet/>
      </div>
    </>
  )
}

export default App



// let user = {
//   nome: "Marshall Liu",
//   email: "MarshallLiu@icloud.com",
//   idade: 25,
//   telefone: ["35810845", "996246889"]
// };
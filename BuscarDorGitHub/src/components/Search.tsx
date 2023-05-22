type Searchprops = {
    loadUser: (userName: string) => Promise<void>;
}
import { useState } from "react";
import {BsSearch} from "react-icons/bs"
import styles from "./Search.module.css"

const Search = ({loadUser}: Searchprops) => {

    const [userName, setUserName] = useState("");

  return (
    <div className={styles.search}>
        <h2>Busca por um Usuário:</h2>
        <p>Conheça seus melhores Repositorios</p>
        <div className={styles.search_container}>
            <input type="text" placeholder='Digite o nome do usuário' 
            onChange={(e) => setUserName(e.target.value)}/>
            <button onClick={() => loadUser(userName)}>
                <BsSearch/>
                </button>
        </div>
    </div>
  )
}

export default Search
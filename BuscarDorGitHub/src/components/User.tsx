import { UserProps } from "../types/user"
import {MdLocationPin} from "react-icons/md"
import { Link } from "react-router-dom"
import Style  from "./User.module.css"

const User = (
    {
        avatar_url,
        login,
        location,
        followers,
        following
    }: UserProps) => {
    return (
        <div className={Style.user}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {location && (
            <p className={Style.location}>
                <MdLocationPin />
                <span>{location}</span>
            </p>
            )}
            <div className={Style.stats}> 
            <div>
                    <p>Seguidores:</p>
                    <p className={Style.number}>{followers}</p>
            </div> 
            <div>
                <p>Seguindo:</p> 
                <p className={Style.number}>{following}</p>
            </div>
        </div>
            <Link to={`/repos/${login}`}>Ver melhores projetos </Link>
        </div>
    )
}

export default User
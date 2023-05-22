import { useState } from 'react';
import Search from '../components/Search';
import { UserProps } from '../types/user';

const Home = () => {
    const [user, setUser] = useState<UserProps| null>(null);
    const loadUser =async (userName: string) => {

        const res = await fetch(`https://api.github.com/users/${userName}`);

        const data = await res.json();

        console.log(data);

        const {  avata_url, login, location, followers, following } = data
        const userData: UserProps = {
             avata_url, login, location, followers, following 
        };
   
    setUser(userData);
     
    };
  return (
    <div>
        <Search loadUser={loadUser} />
        {user && <p>{user.login}</p> }
    </div>
  )
}

export default Home
import React ,{useState, useRef} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const {username, email} = inputs;

  const onChange =(e) => {
    const{name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const [users, setUsers] = useState([
    {
      id:1,
      username: 'user1',
      email: 'user1@gmail.com',
      active: true
    },
    {
      id:2,
      username: 'user2',
      email: 'user2@gmail.com',
      active: false
    },
    {
      id:3,
      username: 'user3',
      email: 'user3@gmail.com',
      active: true
    },
    {
      id:4,
      username: 'user4',
      email: 'user4@gmail.com',
      active: false
    }
  ]);

  const nextId = useRef(5);

  const onCreate =() =>{
    const user={
      id: nextId.current,
      username,
      email
    };

    // setUsers(users.concat(user));
    setUsers([...users,user]);

    setInputs({
      username: '',
      email: ''
    });
    nextId.current+=1;
  };

  const onRemove = id =>{
    setUsers(users.filter(user=>user.id !==id));
  };

  const onToggle = (id) =>{
    setUsers(
      users.map(user=>
        user.id === id ? {...user, active: !user.active} : user  
      )
    );
  }

  return (
   <div>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>

   </div>
  );
}

export default App;

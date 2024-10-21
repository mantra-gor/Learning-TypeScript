import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data: User[] = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {users?.map((user) => (
        <div key={user.id}>
          <p>
            <b>ID: </b>
            {user.id}
          </p>
          <p>
            <b>Name: </b>
            {user.name}
          </p>
          <p>
            <b>Email: </b>
            {user.email}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserList;

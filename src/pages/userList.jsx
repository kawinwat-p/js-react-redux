import {useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchUsers } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { deleteUser } from "../slices/userSlice";
const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users);
    
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h3 className="mb-4 text-lg font-semibold">User List</h3>
      {users.map((user) => (
        <div key={user.id} className="flex items-center justify-between border-b py-2">
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phoneNumber}</p>
          </div>
          <div>
            <button
                onClick={()=> dispatch(deleteUser(user.id))}
              className="mr-2 rounded bg-red-500 px-3 py-1 text-white"
            >
              Delete
            </button>
            <Link to={`/edit/${user.id}`}>
              <button className="rounded bg-blue-500 px-3 py-1 text-white">Edit</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
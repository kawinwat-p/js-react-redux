import { useState, useEffect, use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editUser, fetchUser, createUser } from "../slices/userSlice";

const UserEdit = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    });
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);

    useEffect(() => {
        if (id) {
            dispatch(fetchUser(id));
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (user) {
            setUserData(user);
        }
    },[user]);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        if (id) {
            const response = await dispatch(editUser({ ...userData, id }));
            if (response.success) {
                alert("User updated successfully");
            } else {
                alert(`Error updating user: ${response.message}`);
            }
        } else {
            const response = await dispatch(createUser(userData));
            if (response.success) {
                alert("User created successfully");
            } else {
                alert(`Error creating user: ${response.message}`);
            }
        }
    };

    return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        placeholder="Name"
        className="mb-2 w-full rounded border p-2"
      />
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        placeholder="Email"
        className="mb-2 w-full rounded border p-2"
      />
      <input
        type="text"
        name="phoneNumber"
        value={userData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        className="mb-4 w-full rounded border p-2"
      />

      <button onClick={handleSave} className="rounded bg-green-500 px-4 py-2 text-white">
        Save
      </button>
    </div>
  );
};

export default UserEdit;
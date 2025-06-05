import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setCount } from "./actions/counterActions";
import UserEdit from "./pages/userEdit";
import UserList from "./pages/userList";
import { useRoutes } from "react-router-dom";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [newCount, setNewCount] = useState(0); // Local state to hold the input value

  const element = useRoutes([
    {
      path: "/counter",
      element: <div>
          <h1>Simple Store</h1>
          <h2>Counter: {count}</h2>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <div>
            <input
              type="number"
              value={newCount}
              onChange={(e) => setNewCount(Number(e.target.value))}
            />
            <button onClick={() => dispatch(setCount(newCount))}>Set Count</button>
          </div>
        </div>,
    },
    {
      path: "/",
      element: <UserList />,
    },
    {
      path: "/create",
      element: <UserEdit />,
    },
    {
      path: "/edit/:id",
      element: <UserEdit />,
    },
  ]);

  return element;
};

export default App;
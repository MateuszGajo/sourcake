import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="box">
      <Outlet />
    </div>
  );
};

export default Main;

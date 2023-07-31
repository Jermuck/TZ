import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { setUpdateAccessToken } from "../../Hooks/hook.updateAccces";
import { JobTitle } from "../../types/index.types";
import { IRouter, getEmploeeRoutes, getHrRoutes, getNotLoginEmploee } from "../index.routes";
import { Route, Routes } from "react-router-dom";
import { $user } from "../../store/UserStore/user.store";

export const MyRoutes = () => {
  const [routes, setRoutes] = useState<IRouter[]>([]);
  const user = useStore($user);
  useEffect(() => {
    setUpdateAccessToken()
  }, []);

  useEffect(() => {
    switch (user?.jobTitle) {
      case (JobTitle.EMPLOEE):
        setRoutes(getEmploeeRoutes())
        break;
      case (JobTitle.HR_MANAGER):
        setRoutes(getHrRoutes());
        break;
      default:
        setRoutes(getNotLoginEmploee());
    };
  }, [user])

  return (
    <Routes>
      {
        routes.map(el => <Route path={el.path} element={el.element} key={el.path} />)
      }
    </Routes>
  )
}

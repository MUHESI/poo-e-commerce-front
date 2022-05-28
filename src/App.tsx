import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import { useDispatch } from "react-redux";
// import { getUser } from "./store/actions/user.actions";
import keysUserContext from "./context/AppContext";
import { refresToken } from "../src/store/actions/authActions";
import { AppBar } from "./navigations/AppBar";

function App() {
  const dispatch = useDispatch();

  const [Uid, setUid] = useState(null);
  const [keysUser, setKeysUser] = useState({
    Uid: "",
    entite: "",
    fonction: "",
  });

  useEffect(() => {
    // dispatch(refresToken());
  }, []);

  // useEffect(() => {
  //   const fetchToken = async () => {
  //     await axios({
  //       method: "get",
  //       url: `${process.env.REACT_APP_API_URL}/jwtid`,
  //       withCredentials: true,
  //     })
  //       .then((res) => {
  //         setUid(res.data);
  //         // console.log(res.data);

  //         axios({
  //           method: "get",
  //           url: `${process.env.REACT_APP_API_URL}/api/user/${res.data}`,
  //           withCredentials: true,
  //         })
  //           .then((res) => {
  //             setKeysUser({
  //               Uid,
  //               entite: res.data.entite,
  //               fonction: res.data.fonction,
  //             });
  //           })
  //           .catch((err) => console.log("error", err.message));
  //         //
  //       })
  //       .catch((err) => console.log("Non Token"));
  //   };
  //   fetchToken();
  //   if (Uid) dispatch(getUser(Uid));
  // }, [Uid]);

  return (
    <div>

      <keysUserContext.Provider value={keysUser}>
        <Routes />
      </keysUserContext.Provider>
    </div>
  );
}

export default App;

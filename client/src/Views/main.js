import React, { useState } from "react";
import ListPlayers from "../components/ListPlayers";
import AddPlayer from "../components/AddPlayer";
import PlayerStatus from "../components/PlayerStatus";
import Nav from "../components/Nav";

const Main = (props) => {

  const [listPageIsActive, setListPageIsActive] = useState(true);
  const [managePlayerStatusTabIsActive, setManagePlayerStatusTabIsActive] = useState(false);


  return(
    <div>
      <Nav
        managePlayerStatusTabIsActive={managePlayerStatusTabIsActive}
        setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
      />
       <ListPlayers
        listPageIsActive={listPageIsActive}
        setListPageIsActive={setListPageIsActive}
        setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
      />
    </div>
  )
}

export default Main;
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Switch } from "@mui/material";
import "./styles.css";
import Popovers from "./Popover";
import Popovers2 from "./Popovers2";
import Popovers3 from "./Popovers3";
import Popovers4 from "./Popover4";
import Popovers5 from "./Popovers5";
export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <div className="menu-button">
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon style={{ color: "var(--white)" }} />
        </IconButton>
      </div>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <a href="/">
            <p className="links"><Popovers/></p>
          </a>
          <a href="/compare">
            <p className="links"><Popovers2/></p>
          </a>
          <a href="/compare">
            <p className="links"><Popovers3/></p>
          </a>
          <a href="/compare">
            <p className="links"><Popovers4/></p>
          </a>
          <a href="/compare">
            <p className="links"><Popovers5/></p>
          </a>
          {/* <a href="/about-us">
            <p className="links">About Us</p>
          </a> */}
       
         
        </div>
      </Drawer>
    </div>
  );
}
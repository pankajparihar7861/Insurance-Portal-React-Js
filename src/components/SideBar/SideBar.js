import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidenav, Nav, Dropdown } from "rsuite";
import GearIcon from "@rsuite/icons/Gear";
import DraftRoundIcon from "@rsuite/icons/DraftRound";
import GridIcon from "@rsuite/icons/Grid";
import DetailIcon from "@rsuite/icons/Detail";
import EditIcon from "@rsuite/icons/Edit";
import MessageIcon from "@rsuite/icons/Message";
import PeoplesMapIcon from "@rsuite/icons/PeoplesMap";
import TextImageIcon from "@rsuite/icons/TextImage";
import ScatterIcon from "@rsuite/icons/Scatter";
import ExitIcon from "@rsuite/icons/Exit";
import "./SideBar.css";
import "rsuite/dist/rsuite.min.css";

import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";

export default function SideBar() {

  const [expand, setExpand] = useState(false);
  const [activeKey, setActiveKey] = useState("1");
  
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-container">
          <nav>
            <Sidenav expanded={expand}>
              <Sidenav.Toggle
                expanded={expand}
                onToggle={(expanded) => setExpand(expanded)}
              />
              <Sidenav>
                <Sidenav.Body>
                  <Nav>
                    <Nav.Item icon={<GridIcon />}>
                      <Link to="/Dashboard">Dashboard</Link>
                    </Nav.Item>
                    <Nav.Item icon={<DraftRoundIcon />}>
                      <Link to="/Catalogue"> Product catalogue </Link>
                    </Nav.Item>
                    <Nav.Item icon={<DetailIcon />}>Lead Management</Nav.Item>
                    <Nav.Item icon={<MessageIcon />}>Campaings</Nav.Item>
                    <Nav.Item icon={<EditIcon />}>Applications</Nav.Item>
                    <Nav.Item icon={<PeoplesMapIcon />}>My Contacts</Nav.Item>
                    <Nav.Item icon={<TextImageIcon />}>Claims</Nav.Item>
                    <Nav.Item icon={<ScatterIcon />}>Twitter</Nav.Item>
                    <Nav.Item eventKey="9" icon={<GearIcon />}>
                      Settings
                    </Nav.Item>
                    <hr></hr>

                    <Nav.Item eventKey="10" icon={<ExitIcon />}>
                      Logout
                    </Nav.Item>
                  </Nav>
                </Sidenav.Body>
              </Sidenav>
            </Sidenav>
          </nav>
        </div>
      </div>
    </div>
  );
}

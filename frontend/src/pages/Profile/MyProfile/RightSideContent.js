import React, { useState } from "react";
import {
  Col,
  Nav,
  NavLink,
  TabContent,
  TabPane,
  Card,
  NavItem,
  CardBody,
} from "reactstrap";

import classnames from "classnames";
import OverviewTab from "../../../components/MyProfile/OverviewTab";
import SettingsForm from "../../../components/MyProfile/SettingsForm";
import Education from "../../../components/MyProfile/Education";
import Experiences from "../../../components/MyProfile/Experiences";
import Projects from "../../../components/MyProfile/Projects";
import Employement from "../../../components/MyProfile/Employement";
import { useAuth } from "../../../Hooks/useAuthContext";
//Images Import

const RightSideContent = () => {
  const {Auth:{user}}=useAuth()
  const [activeTab, setActiveTab] = useState(1);
  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
 
  const ProfileSection = [
    { tabId: 1, component: <OverviewTab /> },
    { tabId: 2, component: <SettingsForm  user_id={user.user_id}/> },
    { tabId: 3, component: <Education user_id={user.user_id}/> },
    { tabId: 4, component: <Employement user_id={user.user_id}/> },
    { tabId: 5, component: <Experiences user_id={user.user_id}/> },
    { tabId: 6, component: <Projects  user_id={user.user_id}/> },
    
  ];
  const Navitems = [
    { tabId: 1, label: "Overview" },
    { tabId: 2, label: "Settings" },
    { tabId: 3, label: "Education" },
    { tabId: 4, label: "Employement" },
    { tabId: 5, label: "Experiences" },
    { tabId: 6, label: "Projects" },
  
  ];
 
    return (
    <React.Fragment>
      <Col lg={8}>
        <Card className="profile-content-page mt-4 mt-lg-0">
          <Nav
            className="profile-content-nav nav-pills border-bottom mb-2"
            id="pills-tab"
            role="tablist"
          >
            {Navitems.map((items) => {
              return (
                <NavItem role="presentation" key={items.tabId}>
                  <NavLink
                    to="#"
                    className={classnames({
                      active: activeTab === items.tabId,
                    })}
                    onClick={() => {
                      tabChange(items.tabId);
                    }}
                    type="button"
                  >
                    {items.label}
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>

          <CardBody className="p-2">
            <TabContent activeTab={activeTab}>
              {ProfileSection.map((tabs) => (
                <TabPane tabId={tabs.tabId} key={tabs.tabId}>
                  {tabs.component}
                </TabPane>
              ))}
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default RightSideContent;

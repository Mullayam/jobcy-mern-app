import React from "react";
import { Container, Row } from "reactstrap";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
import Section from "./Section";
import { useAuth } from "../../../Hooks/useAuthContext";
import { FetchUserProfile } from "../../../Apis/apiCore";

const MyProfile = () => {
  document.title = "My Profile | Jobcy ";

  const {
    Auth: { user },
  } = useAuth();
  const [profile, setProfile] = React.useState({});

  const GetEducationDetails = async () => {
    const { data } = await FetchUserProfile(user.user_id);
    if (data.success) {
      return setProfile(data.data.Profile);
    }
  };
  React.useEffect(() => {
    GetEducationDetails();
  }, []);
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <LeftSideContent profile={profile} user={user} />
            <RightSideContent profile={profile} user={user} />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default MyProfile;

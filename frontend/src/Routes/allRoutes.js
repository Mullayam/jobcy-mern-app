import React from "react";

 
//Company Section
import AboutUs from "../pages/Company/AboutUs/AboutUs";
import Services from "../pages/Company/Services/Services";
import Team from "../pages/Company/Team/Team";
import Pricing from "../pages/Company/Pricing/Pricing";
import PrivacyAndPolicy from "../pages/Company/PrivacyAndPolicy/PrivacyAndPolicy";
import Faqs from "../pages/Company/Faqs/Faqs";

//Jobs Section
 
import JobList from "../pages/Jobs/JobList/JobList";
import JobGrid from "../pages/Jobs/JobGrid/JobGrid";
 
import JobDetails from "../pages/Jobs/JobDetails/JobDetails";
import JobsCategories from "../pages/Jobs/JobsCategories/JobsCategories";

//Candidate and Company Section
import CandidateList from "../pages/CandidateAndCompany/CandidateList/CandidateList";
import CandidateGrid from "../pages/CandidateAndCompany/CandidateGrid/CandidateGrid";
import CandidateDetails from "../pages/CandidateAndCompany/CandidateDetails/CandidateDetails";
import CompanyList from "../pages/CandidateAndCompany/CompanyList/CompanyList";
import CompanyDetails from "../pages/CandidateAndCompany/CompanyDetails/CompanyDetails";

 
//Contacts
import Contact from "../pages/Contact/Contact";

//AuthPages
import SignIn from "../pages/ExtraPages/SignIn";
import SignUp from "../pages/ExtraPages/SignUp";
import SignOut from "../pages/ExtraPages/SignOut";
import ResetPassword from "../pages/ExtraPages/ResetPassword";
import ComingSoon from "../pages/ExtraPages/ComingSoon";
import Error404 from "../pages/ExtraPages/Error404";
import Components from "../pages/ExtraPages/Components/Components";

//profile section(User Profile)
import BookMarkJobPost from "../pages/Profile/BookMarkJobPost/BookMarkJobPost";
import ManageJobs from "../pages/Profile/ManageJobs/ManageJobs";
import BookMarkJobs from "../pages/Profile/BookMarkJobs/BookMarkJobs";
import MyProfile from "../pages/Profile/MyProfile/MyProfile";

//Home Section
const Layout = React.lazy(() => import('../pages/Home/Layout/Layout'));
 
const userRoutes = [
  //profile Section(User Profile)
  { path: "/bookmarkjobpost", component: <BookMarkJobPost /> },
  { path: "/myprofile", component: <MyProfile /> },
  { path: "/bookmarkjobs", component: <BookMarkJobs /> },
  { path: "/managejobs", component: <ManageJobs /> },

  //Components Section(Extra Pages)
  { path: "/components", component: <Components /> },

  //Contact
  { path: "/contact", component: <Contact /> },

 

  //Candidate and Company Section
  { path: "/companydetails/:company_id", component: <CompanyDetails /> },
  { path: "/companylist", component: <CompanyList /> },
  { path: "/candidatedetails/:user_id", component: <CandidateDetails /> },
  { path: "/candidategrid", component: <CandidateGrid /> },
  { path: "/candidatelist", component: <CandidateList /> },

  //Jobs Section
  { path: "/jobscategories", component: <JobsCategories /> },
  { path: "/jobdetails/:job_id?", component: <JobDetails /> },
 
  { path: "/jobgrid", component: <JobGrid /> },
  { path: "/joblist/:category_slug?", component: <JobList /> },
 
  //Company Section
  { path: "/faqs", component: <Faqs /> },
  { path: "/privacyandpolicy", component: <PrivacyAndPolicy /> },
  { path: "/pricing", component: <Pricing /> },
  { path: "/team", component: <Team /> },
  { path: "/services", component: <Services /> },
  { path: "/aboutus", component: <AboutUs /> },

  //Home Section
 
  { path: "/", component: <Layout /> },
   
];

const authRoutes = [
  { path: "/error404", component: <Error404 /> },
  { path: "/comingsoon", component: <ComingSoon /> },
  { path: "/resetpassword", component: <ResetPassword /> },
  { path: "/signout", component: <SignOut /> },
  { path: "/signup", component: <SignUp /> },
  { path: "/signin", component: <SignIn /> }
];
export { userRoutes, authRoutes };

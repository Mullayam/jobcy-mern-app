import React from "react";
import { Container } from "reactstrap";
import Selected from "../ManageJobs/Selected";
import BookmarkJobListing from "./BookmarkJobListing";
import Section from "./Section";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import {  GetMemberBookmarkedJobs } from "../../../Apis/apiCore";
import { useAuth } from "../../../Hooks/useAuthContext";

const BookMarkJobs = () => {
  document.title = "My Bookmarked Jobs | Jobcy ";
  const { Auth:{user} } = useAuth(); 
  const [bookmarkJobList, setBookmarkedJobList] = React.useState([]);
const [searchParams,setSearchParams] = useSearchParams()
 
  const MyListing = async () => {
    const { data } = await GetMemberBookmarkedJobs(user.user_id);   
 
    if (data.success) {
       return setBookmarkedJobList(data.data.BookmarkedJobs);
    }
   return toast.error(data.message) 
  }; 
  React.useEffect(() => {
    MyListing();
  }, [searchParams]);
 
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Selected />
          <BookmarkJobListing jobListing={bookmarkJobList}/>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BookMarkJobs;

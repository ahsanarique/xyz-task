import axios from "axios";
import Link from "next/link";
import Layout from "../../Components/Layout/Layout";
import JobDetails from "../../Components/JobDetails/JobDetails";
import RecruitmentProcess from "../../Components/JobDetails/RecruitmentProcess";

const jobId = () => {
  return (
    <Layout>
      Job Details info
      <JobDetails />
      <RecruitmentProcess />
    </Layout>
  );
};

/* getStaticProps and getStaticPaths */

export default jobId;

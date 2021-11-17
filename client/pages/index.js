import { withRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import styles from "../styles/Overview.module.css";
import TutorDashboard from "../components/Tutor/TutorDashboard";
import StudentDashboard from "../components/Student/StudentDashboard";
import CommonDashboard from "../components/CommonDashboard";

const Index = ({ courses, router }) => {
  const head = () => (
    <Head>
      <title>Fastlearn | {process.env.APP_NAME}</title>
      <meta name="description" content="Fastlearn" />
      <link rel="canonical" href={`${process.env.DOMAIN}${router.pathname}`} />
      <meta
        property="og:title"
        content={`Fastlearn | ${process.env.APP_NAME}`}
      />
      <meta
        property="og:description"
        content={`Fastlearn ${process.env.APP_NAME}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${process.env.DOMAIN}/default.jpg`} />
      <meta property="og:site_name" content={process.env.APP_NAME} />
      <meta property="og:image" content={`${process.env.DOMAIN}/default.jpg`} />
      <meta
        property="og:image:secure_url"
        content={`${process.env.DOMAIN}/default.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={process.env.NEXT_PUBLIC_FB_APP_ID} />
    </Head>
  );

  return (
    <>
      {head()}
      <div className="container">
        <div className={styles.overviewPage}>
          <CommonDashboard courses={courses}></CommonDashboard>
          <TutorDashboard courses={courses}></TutorDashboard>
          <StudentDashboard courses={courses}></StudentDashboard>
        </div>
      </div>
      <div className="container-fluid"></div>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  // console.log("DATA LENGTH =====> ", data.length);
  return {
    props: {
      courses: data,
    },
  };
}

export default withRouter(Index);

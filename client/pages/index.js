import { withRouter } from "next/router";
import axios from "axios";
import CourseCard from "../components/cards/CourseCard";
import Head from "next/head";

const Index = ({ courses, router }) => {
  const head = () => (
    <Head>
      <title>
   Fastlearn |{" "}
        {process.env.APP_NAME}
      </title>
      <meta
        name="description"
        content="Fastlearn"
      />
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
      {/* <div className="jumbotron text-center bg-primary square">
        <h1>FastLearn</h1>
        <hr style={{ borderBottom: "2px solid silver", width: "100px" }} />
        <p className="lead">
          Courses
        </p>
      </div> */}
       <section class="bg-light">
      <div class="container"> 
        <div class="row">
          <div class="col-lg-6 order-2 order-lg-1">
            <h1>FastLearn</h1>
            <p class="lead">India's best online learning platform</p>
            <p><a href="#" class="btn btn-primary shadow mr-2">Discover More</a><a href="#" class="btn btn-outline-primary">Some another action</a></p>
          </div>
          <div class="col-lg-6 order-1 order-lg-2"><img src="https://media.istockphoto.com/vectors/teacher-giving-lesson-to-her-students-in-classroom-teaching-concept-vector-id1272543982?b=1&k=20&m=1272543982&s=170667a&w=0&h=1u4c5tofK5mSoXq53Pr0V95S9lZPxlHeY5grkKaFs1M=" alt="..." class="img-fluid"/></div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
      <h2>Courses</h2>
        <div className="row pt-2">
          {courses.map((course) => (
            <div key={course._id} className="col-md-4">
              <CourseCard key={course._id} course={course} />
              {/* <pre>{JSON.stringify(course, null, 4)}</pre> */}
            </div>
          ))}
        </div>
      </div>
      </section>
      <section>
      <div class="container"> 
        <h2>Services</h2>
        <p class="text-muted mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        <div class="row">
          <div class="col-sm-6 col-lg-4 mb-3">
            
            <h6>Ex cupidatat eu</h6>
            <p class="text-muted">Ex cupidatat eu officia consequat incididunt labore occaecat ut veniam labore et cillum id et.</p>
          </div>
          <div class="col-sm-6 col-lg-4 mb-3">
            
            <h6>Tempor aute occaecat</h6>
            <p class="text-muted">Tempor aute occaecat pariatur esse aute amet.</p>
          </div>
          <div class="col-sm-6 col-lg-4 mb-3">
            
            <h6>Voluptate ex irure</h6>
            <p class="text-muted">Voluptate ex irure ipsum ipsum ullamco ipsum reprehenderit non ut mollit commodo.</p>
          </div>
          <div class="col-sm-6 col-lg-4 mb-3">
            
            <h6>Tempor commodo</h6>
            <p class="text-muted">Tempor commodo nostrud ex Lorem occaecat duis occaecat minim.</p>
          </div>
          <div class="col-sm-6 col-lg-4 mb-3">
            
            <h6>Et fugiat sint occaecat</h6>
            <p class="text-muted">Et fugiat sint occaecat voluptate incididunt anim nostrud ea cillum cillum consequat.</p>
          </div>
          <div class="col-sm-6 col-lg-4 mb-3">
            
            <h6>Et labore tempor et</h6>
            <p class="text-muted">Et labore tempor et adipisicing dolor.</p>
          </div>
        </div>
      </div>
    </section>
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

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
// import JobData from "./JobDummyData";
import { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs, where } from "firebase/firestore";
import { db } from "./firebase.config";
const App = () => {
  const [jobs, setJobs] = useState([]);
  const [customSearch, SetCustomSearch] = useState(false);

  const fetchjobs = async () => {
    SetCustomSearch(false)
    const tempjobs =[]
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef,orderBy("postedOn", "desc"));
    const req = await getDocs(q);
   req.forEach((job) => {
      // doc.data() is never undefined for query doc snapshots
      tempjobs.push({
        ...job.data(), 
        id: job.id, 
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempjobs)
  };

  const fetchJobsCustom = async (jobCriteria) => {
    SetCustomSearch(true)
    const tempjobs =[]
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, where("type", "==", jobCriteria.type), where("title", "==", jobCriteria.title), where("experience", "==", jobCriteria.experience), where("location", "==", jobCriteria.location)  ,orderBy("postedOn", "desc"));
    const req = await getDocs(q);
   req.forEach((job) => {
      // doc.data() is never undefined for query doc snapshots
      tempjobs.push({
        ...job.data(), 
        id: job.id, 
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempjobs)
  };




  useEffect(()=>{
    fetchjobs()
  }, [])


  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom}/>
      {customSearch && 
      <button onClick={fetchjobs} className="flex pl-[1250px] mb-2">
        <p className="bg-blue-400 px-6 py-3 rounded-md text-white">Clear Filters</p>
        </button>}
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default App;

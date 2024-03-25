import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import google from "../../assets/logo/google.png";
import money from "../../assets/icons/money.png";
import location from "../../assets/icons/location2.png";

const Appliedjobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.Onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.Onsite ==='Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);

            // console.log(jobs, storedJobIds, jobsApplied);
        }
    }, [jobs])
    return (
        <div>
            <h2 className="text-2xl text-center font-bold mt-5">Jobs I Applied; {appliedJobs.length}</h2>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            {/* first card start */}
            <div className="grid grid-cols-2">
                <div className="flex mt-10">
                    <div className="border rounded p-3">
                        <div className="flex">
                            <img src={google} alt="" />
                            <h2 className="pl-6 font-bold">Technical Database Engineer</h2>
                        </div>
                        <p className="pl-36 text-xl">Google LLC</p>
                        <div className="mt-4">
                            <button className="px-5 font-bold border rounded norder-[#7E90FE] mr-4 text-[#7E90FE]">Remote</button>
                            <button className="px-5 font-bold border rounded norder-[#7E90FE] mr-4 text-[#7E90FE]">Full Time</button>
                            <button className=" btn btn-primary px-5">View Deatils</button>
                        </div>

                        <div className="mt-4">
                            <div className="flex">
                                <img className="mr-2" src={location} alt="" />
                                <h2 className="mr-3">Dhaka, Bangladesh</h2>
                                <div className="flex">
                                    <img className="mr-2 " src={money} alt="" />
                                    <h2>Salary: 70k-90k</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* first card end */}

                {/* second card start */}
                <div className="flex mt-10">
                    <div className="border rounded p-2">
                        <div className="flex">
                            <img src={google} alt="" />
                            <h2 className="pl-6 font-bold">Senior Product Designer</h2>


                        </div>
                        <p className="pl-36 text-xl">Netflix</p>
                        <div className="mt-4">
                            <button className="px-5 font-bold border rounded norder-[#7E90FE] mr-4 text-[#7E90FE]">Onsite</button>
                            <button className="px-5 font-bold border rounded norder-[#7E90FE] mr-4 text-[#7E90FE]">Full Time</button>
                            <button className=" btn btn-primary px-5">View Deatils</button>
                        </div>

                        <div className="mt-4">
                            <div className="flex ">
                                <img className="mr-2" src={location} alt="" />
                                <h2 className="mr-3">Dhaka, Bangladesh</h2>
                                <div className="flex">
                                    <img className="mr-2 " src={money} alt="" />
                                    <h2>Salary: 100k-150k</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* second card end */}

                {/* third card start */}
                <div className="flex mt-10">
                    <div className="border rounded p-2">
                        <div className="flex">
                            <img src={google} alt="" />
                            <h2 className="pl-6 font-bold">Software Engineer</h2>


                        </div>
                        <p className="pl-36 text-xl">Tesla</p>
                        <div className="mt-4">
                            <button className="px-5 font-bold border rounded norder-[#7E90FE] mr-4 text-[#7E90FE]">Remote</button>
                            <button className="px-5 font-bold border rounded norder-[#7E90FE] mr-4 text-[#7E90FE]">Full Time</button>
                            <button className=" btn btn-primary px-5">View Deatils</button>
                        </div>

                        <div className="mt-4">
                            <div className="flex ">
                                <img className="mr-2" src={location} alt="" />
                                <h2 className="mr-3">Dhaka, Bangladesh</h2>
                                <div className="flex">
                                    <img className="mr-2 " src={money} alt="" />
                                    <h2>Salary: 150k-200k</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* third card end */}

                {/* fourth card start */}
                <div className="flex mt-10">
                    <div className="border rounded p-2">
                        <div className="flex">
                            <img src={google} alt="" />
                            <h2 className="pl-6 font-bold">Motion Graphic Designer</h2>


                        </div>
                        <p className="pl-36 text-xl">Airbnb LLC</p>
                        <div className="mt-4">
                            <button className="px-5 font-bold border rounded norder-[#7E90FE] mr-4 text-[#7E90FE]">Onsite</button>
                            <button className="px-5 font-bold border rounded norder-[#7E90FE] mr-4 text-[#7E90FE]">Full Time</button>
                            <button className=" btn btn-primary px-5">View Deatils</button>
                        </div>

                        <div className="mt-4">
                            <div className="flex ">
                                <img className="mr-2" src={location} alt="" />
                                <h2 className="mr-3">Dhaka, Bangladesh</h2>
                                <div className="flex">
                                    <img className="mr-2 " src={money} alt="" />
                                    <h2>Salary: 50k-70k</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* fourth card end */}
            </div>
        </div>
    );
};

export default Appliedjobs;
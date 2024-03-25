import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import money from "../../assets/icons/money.png"
import calender from "../../assets/icons/calendar.png"
import phone from "../../assets/icons/phone.png";
import email from "../../assets/icons/email.png";
import address from "../../assets/icons/location2.png"
import { saveJobApplication } from "../../utility/localstorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You have applied successfully');
    }
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-4">Job Details</h2>
            <div className="grid gap-4 md:grid-cols-4 mt-12">
                <div className="md:col-span-3">
                    <h2><span className="font-bold">Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</h2>
                    <h2 className="mt-5"><span className="font-bold ">Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</h2>
                    <h2 className="mt-5"><span className="font-bold">Educational Requirements:</span> <br />
                        <br />
                        Bachelor degree to complete any reputational university.</h2>
                    <h2 className="mt-5"><span className="font-bold">Experiences:</span>
                        2-3 Years in this field.</h2>
                </div>
                <div className=" bg-blue-100 rounded-md">
                    <h2 className="text-xl font-bold p-5">Jobs Details</h2>
                    <hr />
                    <div className="flex px-2">
                        <img className="px-1" src={money} alt="" />
                        <h2 className="px-1 font-bold">Salary:</h2>
                        <h2>100K - 150K(Per Month)</h2>
                    </div>
                    <div className="flex px-2 mt-3">
                        <img className="px-1" src={calender} alt="" />
                        <h2 className="px-1 font-bold">Job Title:</h2>
                        <h2> Product Designer</h2>
                    </div>
                    <div className="">
                        <h2 className="font-bold p-5 mt-5">Contact Information</h2>
                        <hr />
                        <div className="flex px-2">
                            <img className="px-1" src={phone} alt="" />
                            <h2 className="px-1 font-bold">Phone:</h2>
                            <h2>01750 00 00 00</h2>
                        </div>
                        <div className="flex px-2 mt-3">
                            <img className="px-1" src={email} alt="" />
                            <h2 className="px-1 font-bold">Email:</h2>
                            <h2>info@gmail.com</h2>
                        </div>
                        <div className="flex px-2 mt-3">
                            <img className="px-1" src={address} alt="" />
                            <h2 className="px-1 font-bold">Address:</h2>
                            <h2> Dhaka, Bangladesh</h2>
                        </div>
                    </div>

                    <button onClick={handleApplyJob} className="btn btn-primary w-full mt-10">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;
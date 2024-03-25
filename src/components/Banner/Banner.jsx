import banner from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div className="hero  bg-slate-50 rounded-md mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-sm rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold text-black">One Step <br /> Closer To Your <br /> <span className="text-cyan-500">Dream Job</span></h1>
                    <p className="py-6">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
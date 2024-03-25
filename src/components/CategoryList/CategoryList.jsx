import icons from '../../assets/icons/accounts.png';
import creative from '../../assets/icons/creative.png';
import marketing from '../../assets/icons/marketing.png';
import chip from '../../assets/icons/chip.png'

const CategoryList = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold mt-16 text-center">Job Category List</h2>
            <p className="text-center mt-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-4 mt-6'>
                {/* first card start */}
                <div className='bg-slate-100 w-48 h-48 rounded-md'>
                    <img className='p-5' src={icons} alt="" />
                    <p className='font-bold mt-2 mb-auto ml-5'>Account & Finance</p>
                    <p className='mt-1 mb-auto ml-5'>300 Jobs Available</p>
                </div>
                {/* first card end */}

                {/* second card start */}
                <div className='bg-slate-100 w-48 h-48 rounded-md'>
                    <img className='p-5 ' src={creative} alt="" />
                    <p className='font-bold mt-2 mb-auto ml-5'>Creative Design</p>
                    <p className='mt-1 mb-auto ml-5'>100+ Jobs Available</p>
                </div>
                {/* second card end */}

                {/* third card start */}
                <div className='bg-slate-100 w-48 h-48 rounded-md'>
                    <img className='p-5 ' src={marketing} alt="" />
                    <p className='font-bold mt-2 mb-auto ml-5'>Marketing & Sales</p>
                    <p className='mt-1 mb-auto ml-5'>150 Jobs Available</p>
                </div>
                {/* third card end */}

                {/* fourth card start */}
                <div className='bg-slate-100 w-48 h-48 rounded-md'>
                    <img className='p-5 ' src={chip} alt="" />
                    <p className='font-bold mt-2 mb-auto ml-5'>Engineering Job</p>
                    <p className='mt-1 mb-auto ml-5'>224 Jobs Available</p>
                </div>
                {/* fourth card end */}
            </div>

        </div>
    );
};

export default CategoryList;
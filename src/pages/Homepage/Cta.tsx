import { Link } from 'react-router';

const Cta = () => {
    return (
        <section className=" mb-12">
            <div className="container mx-auto px-4 text-center flex flex-col items-center">
                <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-gray-800 dark:text-white lg:text-5xl">
                    Bring your <span className="text-blue-500">Financial Game</span> to the Next Level
                </h2>

                <p className="max-w-3xl mt-6 text-gray-500 dark:text-gray-300 text-lg sm:text-xl lg:text-2xl">
                    Manage your money smartly, make seamless transactions, and grow your wealth with confidence.
                    Digital wallet solutions designed for your convenience and security.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link
                        to="/register"
                        className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300 font-semibold"
                    >
                        Sign Up
                    </Link>
                    <Link
                        to="/about"
                        className="px-6 py-3 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Cta;
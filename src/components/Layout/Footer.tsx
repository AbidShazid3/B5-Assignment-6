import BrandLogo from "./BrandLogo";


const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 pt-12 border border-t-2">
            <div className="container mx-auto px-6">
                <div className="lg:flex lg:justify-between">
                    {/* Left Section */}
                    <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
                        <div className="flex items-start">
                            <BrandLogo />
                        </div>
                        <div className="flex mt-6 space-x-3">
                            {/* Social Icons */}
                            <a
                                href="#"
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                                aria-label="Reddit"
                            >
                                {/* Reddit Icon */}
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C21.994 17.52 17.52 21.994 12 22ZM6.807 10.543C6.209 10.543 5.671 10.909 5.451 11.465C5.231 12.022 5.371 12.656 5.807 13.066C5.922 13.175 6.055 13.264 6.199 13.33C6.186 13.476 6.186 13.623 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.87 13.623 17.87 13.476 17.858 13.33C18.465 13.035 18.786 12.359 18.631 11.702C18.475 11.045 17.885 10.584 17.21 10.593H17.157C16.799 10.606 16.458 10.751 16.2 11C15.063 10.227 13.725 9.799 12.35 9.77L13 6.65L15.138 7.1C15.193 7.607 15.621 7.991 16.131 7.992C16.168 7.992 16.204 7.99 16.24 7.986C16.77 7.933 17.166 7.473 17.139 6.941C17.112 6.409 16.673 5.991 16.14 5.991C16.102 5.992 16.065 5.995 16.027 6C15.71 6.034 15.428 6.216 15.268 6.492L12.82 6C12.798 5.995 12.776 5.993 12.754 5.993C12.609 5.995 12.485 6.096 12.454 6.237L11.706 9.71C10.314 9.73 8.958 10.157 7.806 10.939C7.536 10.684 7.178 10.542 6.807 10.543Z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                {/* Facebook Icon */}
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M2 12C2 16.921 5.58 21.11 10.439 21.881V14.892H7.902V12H10.442V9.802C10.328 8.76 10.685 7.721 11.414 6.967C12.143 6.213 13.169 5.823 14.215 5.902C14.966 5.914 15.714 5.981 16.455 6.102V8.561H15.191C14.756 8.504 14.318 8.648 14.002 8.952C13.686 9.256 13.524 9.687 13.563 10.124V12H16.334L15.891 14.893H13.563V21.881C18.817 21.051 22.502 16.252 21.948 10.961C21.393 5.67 16.793 1.74 11.481 2C6.168 2.294 2.003 6.682 2 12Z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                                aria-label="Github"
                            >
                                {/* Github Icon */}
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2C7.133 2 2.962 5.548 2.178 10.378C1.395 15.208 4.231 19.893 8.873 21.439C9.373 21.529 9.552 21.222 9.552 20.958C9.552 20.721 9.544 20.093 9.541 19.258C6.766 19.858 6.18 17.92 6.18 17.92C5.997 17.317 5.605 16.799 5.073 16.461C4.173 15.842 5.142 15.856 5.142 15.856C5.783 15.944 6.347 16.324 6.669 16.884C6.942 17.38 7.402 17.747 7.946 17.903C8.491 18.058 9.075 17.99 9.569 17.713C9.615 17.207 9.841 16.734 10.204 16.379C7.99 16.128 5.662 15.272 5.662 11.449C5.65 10.46 6.017 9.504 6.688 8.778C6.384 7.917 6.42 6.973 6.788 6.138C6.788 6.138 7.625 5.869 9.53 7.159C11.164 6.711 12.888 6.711 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.634 6.973 17.669 7.918 17.364 8.778C18.038 9.504 18.405 10.463 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.315 16.865 14.561 17.537 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.826 19.888 22.659 15.203 21.874 10.374C21.089 5.546 16.918 2 12 2Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 flex-1">
                        <div>
                            <h3 className="text-gray-700 uppercase dark:text-white font-semibold mb-2">About</h3>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</a>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Community</a>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</a>
                        </div>
                        <div>
                            <h3 className="text-gray-700 uppercase dark:text-white font-semibold mb-2">Blog</h3>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tech</a>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</a>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</a>
                        </div>
                        <div>
                            <h3 className="text-gray-700 uppercase dark:text-white font-semibold mb-2">Products</h3>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Mega Cloud</a>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Aperion UI</a>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Meraki UI</a>
                        </div>
                        <div>
                            <h3 className="text-gray-700 uppercase dark:text-white font-semibold mb-2">Contact</h3>
                            <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+8801640310327</span>
                            <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">abidshazid3@gmail.com</span>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-6">
                    © PayNex 2024 - All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
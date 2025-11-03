const LoadingSpinner = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 relative z-50 text-white">
            {/* Spinner */}
            <div className="relative">
                <div className="h-24 w-24 rounded-full border-[6px] border-gray-700"></div>
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-[6px] border-t-transparent border-r-transparent border-l-blue-500 border-b-blue-400 animate-spin"></div>

                {/* Glow Effect */}
                <div className="absolute inset-0 blur-xl bg-blue-500/20 rounded-full animate-pulse"></div>
            </div>

            {/* Loading Text */}
            <h2 className="mt-6 text-xl font-semibold tracking-wide animate-pulse">
                Loading<span className="text-blue-400">...</span>
            </h2>

            {/* Subtext for better feedback */}
            <p className="text-sm text-gray-400 mt-2">
                Please wait while we prepare everything for you
            </p>
        </div>
    );
};

export default LoadingSpinner;

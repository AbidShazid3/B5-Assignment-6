import { Link } from "react-router";
import { motion } from "motion/react"

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-linear-to-r from-purple-100 via-pink-100 to-yellow-100 overflow-hidden relative">
      {/* Floating 404 digits */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: [0, -20, 0], opacity: [0, 1, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-10 left-5 text-[5rem] md:text-[8rem] lg:text-[10rem] font-extrabold text-red-200 opacity-30 select-none"
      >
        404
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: [0, 20, 0], opacity: [0, 1, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute bottom-5 right-5 text-[6rem] md:text-[8rem] lg:text-[10rem] font-extrabold text-red-200 opacity-20 select-none"
      >
        404
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-8 md:p-16 text-center z-10 max-w-md sm:max-w-lg md:max-w-xl"
      >
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-4xl font-bold text-red-500 mb-2 sm:mb-4"
        >
          Oops!
        </motion.h2>
        <motion.h1
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl md:text-4xl font-extrabold mb-6 sm:mb-8 text-gray-800"
        >
          Page Not Found
        </motion.h1>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-block bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 text-sm"
          >
            Go to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;

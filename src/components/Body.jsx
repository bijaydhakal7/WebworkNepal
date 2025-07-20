import React from 'react'
import { motion } from "framer-motion";

const Body = () => {
  return (
    <div>
      <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="h-screen"
    >
      <h1 className="text-4xl">Welcome to the site</h1>
    </motion.section>
    </div>
  )
}

export default Body


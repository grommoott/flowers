import { transform } from "framer-motion"
import { motion, useAnimate, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Decoration from "./Decoration"

export default function Presentation({ selectedId, flowers }) {
    const [ids, setIds] = useState({ old: 0, new: 0 })
    const transition = { duration: 0.3, ease: "easeInOut" }

    useEffect(() => {
        setIds((old) => {
            return { old: old.new, new: selectedId }
        })
    }, [selectedId])

    return (
        <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start">
            <div className="w-20"></div>
                <div className="flex-none size-120 overflow-hidden m-4 shadow-md rounded-xl">
                    {ids.new == ids.old && (
                        <img
                            className="size-120 object-cover"
                            src={`/${flowers[ids.new].name}.${
                                flowers[ids.new].format
                                    ? flowers[ids.new].format
                                    : "jpg"
                            }`}
                        />
                    )}
                    {ids.new < ids.old && (
                        <motion.div
                            className="size-120 flex flex-row flex-nowrap"
                            initial={{ x: "-30rem" }}
                            animate={{ x: "0rem" }}
                            transition={transition}
                            key={ids.new}
                        >
                            <img
                                className="size-120 object-cover"
                                src={`/${flowers[ids.new].name}.${
                                    flowers[ids.new].format
                                        ? flowers[ids.new].format
                                        : "jpg"
                                }`}
                            />
                            <img
                                className="size-120 object-cover"
                                src={`/${flowers[ids.old].name}.${
                                    flowers[ids.old].format
                                        ? flowers[ids.old].format
                                        : "jpg"
                                }`}
                            />
                        </motion.div>
                    )}

                    {ids.new > ids.old && (
                        <motion.div
                            className="size-120 flex flex-row flex-nowrap"
                            initial={{ x: "0rem" }}
                            animate={{ x: "-30rem" }}
                            transition={transition}
                            key={ids.new}
                        >
                            <img
                                className="size-120 object-cover"
                                src={`/${flowers[ids.old].name}.${
                                    flowers[ids.old].format
                                        ? flowers[ids.old].format
                                        : "jpg"
                                }`}
                            />
                            <img
                                className="size-120 object-cover"
                                src={`/${flowers[ids.new].name}.${
                                    flowers[ids.new].format
                                        ? flowers[ids.new].format
                                        : "jpg"
                                }`}
                            />
                        </motion.div>
                    )}
            </div>

            <div className="flex flex-col items-center">
                <motion.h1
                    className="text-4xl p-8"
                    initial={{ y: "-3rem", opacity: 0 }}
                    animate={{ y: "0rem", opacity: 1 }}
                    key={flowers[ids.new].name}
                    transition={{ ...transition, duration: 0.3 }}
                >
                    {flowers[ids.new].name}
                </motion.h1>
                <motion.p
                    className="text-center text-lg"
                    style={{ width: "40rem" }}
                    initial={{ y: "-10rem", opacity: 0 }}
                    animate={{ y: "0rem", opacity: 1 }}
                    key={flowers[ids.new].description}
                    transition={transition}
                >
                    {flowers[ids.new].description}
                </motion.p>
            </div>

            <div className="w-20"></div>
        </div>
    )
}

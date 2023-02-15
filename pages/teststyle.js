import React, { useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";


function teststyle() {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 50, { duration: 2 });
        return animation.stop;
    }, []);
    return (
        <motion.p>{rounded}</motion.p>
    )
}

export default teststyle
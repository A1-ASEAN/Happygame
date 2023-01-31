
import { motion } from "framer-motion";
import { Box } from "@mui/system";


export default function App() {

  

  return (
    <Box >
      <motion.div className="box"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: [1,0,1], scale: 1 }}

        transition={{
          duration: 3,
          delay: 2.1,
          ease: [0, 0,0.5,1]
        }}>
        <Box position={'absolute'} sx={{ pl: 11 }} top={"38%"}>
          <img src="/image/flight/vs.svg" />
        </Box>

      </motion.div>
      <motion.div className="box"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0, 1, 0], scale: 1 }}

        transition={{
          duration: 0.3,
          delay: 3,
          ease: [0, 0.1, 0.9, 1.01]
        }}>
        <Box position={'absolute'} top={"38%"} sx={{ pl: 11 }} >
          <img src="/image/Attack/1.svg" />
        </Box>

      </motion.div>
      <motion.div className="box"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0, 1, 0], scale: 1 }}

        transition={{
          duration: 0.6,
          delay: 3,
          ease: [0, 0.1, 0.9, 1.01]
        }}>
        <Box position={'absolute'} top={"50%"} sx={{ pl: 0 }} >
          <img src="/image/Attack/1.svg" />
        </Box>

      </motion.div>
      <motion.div className="box"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0, 1, 0], scale: 1 }}

        transition={{
          duration: 0.2,
          delay: 3.4,
          ease: [0, 0.1, 0.9, 1.01]
        }}>
        <Box position={'absolute'} top={"60%"} sx={{ pl: 25 }} >
          <img src="/image/Attack/1.svg" />
        </Box>

      </motion.div>
      <motion.div className="box"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0, 1, 0], scale: 1 }}

        transition={{
          duration: 0.6,
          delay: 3.8,
          ease: [0, 0.1, 0.9, 1.01]
        }}>
        <Box position={'absolute'} top={"20%"} sx={{ pl: 35 }} >
          <img src="/image/Attack/1.svg" />
        </Box>

      </motion.div>

      <motion.div className="box"

        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0, 1, 0], scale: 1 }}

        transition={{
          duration: 0.6,
          delay: 3.1,
          ease: [0, 0.1, 0.9, 1.01]
        }}>

        <Box position={'absolute'} top={"28%"} sx={{ pl: 5 }}>
          <img src="/image/Attack/2.svg" />
        </Box>
      </motion.div>

      <motion.div className="box"

        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0, 1, 0], scale: 1 }}

        transition={{
          duration: 0.9,
          delay: 3.1,
          ease: [0, 0.1, 0.9, 1.01]
        }}>
        <Box position={'absolute'} top={"20%"} sx={{ pl: 25 }}>
          <img src="/image/Attack/2.svg" />
        </Box>

      </motion.div>

      <motion.div className="box"

        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0, 1, 0], scale: 1 }}

        transition={{
          duration: 2,
          delay: 3,
          ease: [0, 0.1, 0.9, 1.01]
        }}>
        <Box position={'absolute'} top={"35%"} sx={{ pl: 2 }}>
          <img src="/image/Attack/2.svg" />
        </Box>

      </motion.div>

      <motion.div className="box"

        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0, 1, 0], scale: 1 }}

        transition={{
          duration: 0.8,
          delay: 3,
          ease: [0, 0.1, 0.9, 1.01]
        }}>
        <Box position={'absolute'} top={"60%"} sx={{ pl: 25 }}>
          <img src="/image/Attack/2.svg" />
        </Box>

      </motion.div>


      <motion.div className="box"

        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0, 1, 1, 0], scale: 1 }}

        transition={{
          duration: 0.1,
          delay: 3,
          ease: [0, 0.1, 0.9, 1.01]
        }}>
        <Box position={'absolute'} top={"50%"} sx={{ pl: 9 }}>
          <img src="/image/Attack/3.svg" />
        </Box>

      </motion.div>

      <motion.div className="box"

        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0, 1, 1, 0], scale: 1 }}

        transition={{
          duration: 0.6,
          delay: 3,
          ease: [0, 0.1, 0.9, 1.01]
        }}>

        <Box position={'absolute'} top={"40%"} sx={{ pl: 20 }}>
          <img src="/image/Attack/3.svg" />
        </Box>
      </motion.div>
      <motion.div className="box"

        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0, 1, 1, 0], scale: 1 }}

        transition={{
          duration: 0.9,
          delay: 3,
          ease: [0, 0.1, 0.9, 1.01]
        }}>
        <Box position={'absolute'} top={"20%"} sx={{ pl: 0 }}>
          <img src="/image/Attack/3.svg" />
        </Box>

      </motion.div>

      <motion.div className="box"

        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0, 1, 1, 0], scale: 1 }}

        transition={{
          duration: 1,
          delay: 3,
          ease: [0, 0.1, 0.9, 1.01]
        }}>
        <Box position={'absolute'} top={"30%"} sx={{ pl: 15 }}>
          <img src="/image/Attack/3.svg" />
        </Box>


      </motion.div>

    </Box >

  );
}

import * as React from 'react';
import Winlose from "./winlose"
import  { useRouter } from 'next/router';



const App = () => {

    const router = useRouter()

    const {
        query: {
            number
        }
    } = router

    const props = {
        number
    }

    console.log(props.number)
    return (
        <div>

            {props.number}

        </div>
    );
};



export default App;
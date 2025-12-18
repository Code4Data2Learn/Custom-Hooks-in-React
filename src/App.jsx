import { Suspense, lazy} from "react";

const Fetch = lazy(()=>import('./Fetch.jsx'))

function App(){
    return(
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Fetch />
            </Suspense>
        </div>
    )
}

export default App;

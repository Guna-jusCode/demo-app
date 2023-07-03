import React from 'react'
import Child1 from './Child1'
import Child3 from './Child3'
export const userContext = React.createContext("Chandru");
export const idContext = React.createContext(123);
export default function DParent() {
    return (
        <div>
            <userContext.Provider value={'Arun'}>
                <idContext.Provider value={123}>
                <Child1 />       
                </idContext.Provider>
            </userContext.Provider>
        </div>
    )
}

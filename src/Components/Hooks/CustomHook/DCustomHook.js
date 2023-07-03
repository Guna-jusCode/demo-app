import React from "react";
import useFetch from './useFetch'

export default function CustomHook() {
    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');
    return (
        <div>
            {data && data.slice(0,5).map((item) => {
                return <p key={item.id}>{item.title}</p>;
            })}
        </div>
    )
}

import { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState(null);
    useEffect(() => { fetch(url).then(res => res.json()).then(d => setData(d)) }, [url]);
    console.log(data)
    return [data];
}

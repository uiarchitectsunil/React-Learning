import { useState, useEffect } from 'react';

const useSqaure = () => {
    const [loading, setloading] = useState(true);
    const [cache, setCache] = useState({});
    const [number, setNumber] = useState();
    async function squareValue(inputNumber){
        setloading(true)
        if(!cache.hasOwnProperty(inputNumber)){
            await new Promise(r => setTimeout(r, 1000))
            const squareNumber = inputNumber * inputNumber 
            setNumber(squareNumber)
            setCache({...cache, ...{[inputNumber]: squareNumber}})
            console.log("return from new", cache)
        }else{
            setNumber(cache[inputNumber])
            console.log("return from cache", cache)
        }
        setloading(false)
    }
    return {loading, squareValue, number}
}

export default useSqaure;
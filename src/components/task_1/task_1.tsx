import {useState} from "react";
import styles from "./style.module.css"

const func = (arg: number): number | string => {
    if (arg - ~~arg !== 0 || arg < 0 || typeof arg !== 'number') {
        return "Input Error";
    } else if (arg == 0) {
        return +0;
    } else if (arg % 22 === 0) {
        return 'candybar'
    } else if (arg % 11 === 0) {
        return 'bar'
    } else if (arg % 2 === 0) {
        return 'candy'
    } else return +arg;
}

export const Task1 = () => {
    let [arg, setArg] = useState<number | string>(0);
    let onInput = (e: any) => {
        setArg(func(+e.target.value));
    }
    return <div id={styles.cont}>
        <input onInput={onInput} type={'text'} size={6}/>
        <div>{arg}</div>
    </div>
}

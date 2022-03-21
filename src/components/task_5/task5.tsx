import {useRef, useState} from "react";
import style from "./style.module.css";

export const Task5 = () => {
    let [words, setWords] = useState([]);
    let inp: any = useRef();

    function getRhymingWords(word: string) {
        let url: string = 'https://api.datamuse.com/words?rel_rhy=' + word;
        fetch(url, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then((res) => {
            setWords(res);
        })
    }

    function click(word: any) {
        inp.current.value = word.target.innerHTML;
    }

    return <div id={style.cont}>
        <input ref={inp} onInput={(event: any) => (getRhymingWords)(event.target.value)} type={"text"} size={7}/>
        <div id={style.list}>
            {words.map((e: any) => <div onClick={event => (click)(event)} key={e.id}>{e.word}</div>)}
        </div>
    </div>
}
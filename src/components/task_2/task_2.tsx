import style from './style.module.css';

export const Task2 = () => {
    const dataFocus = (e: any)=>{}
    return <form id={style.form}>
        <div id={style.name}>
            <span>Your full given name:</span>
            <input type={'text'}/>
        </div>
        <div id={style.date}>
            <span id={style.date1}>Date of Birth</span>
            <input type={'date'} onBlur={dataFocus}/>
        </div>
        <div id={style.country}>
            <span>Country of residence or citizenship:</span>
            <input type={'text'}/>
        </div>
        <div id={style.school}>
            <span>What school do you plan to attend?</span>
            <input type={'text'}/>
        </div>
        <div id={style.area}>
            <span>Please take a moment to describe your intended area of study:</span>
            <textarea placeholder={'Enter details here'}/>
        </div>
    </form>
}


import s from './Answers.module.scss'
import axios from 'axios'
import { useEffect, useState } from 'react';
import AnswerCard from '../AnswerCard/AnswerCard';

const Answers = () => {

    const [answer, setAnswer] = useState([])

    const fetchData = async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'
        const data = await axios.get(url)
        setAnswer(data.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {answer.length ? answer.map((item: any) => {
                return <AnswerCard item={item}/>
            }) : <p className={s.wait}>Идёт загрузка ответов</p>}
        </div>
    );
}
 
export default Answers;
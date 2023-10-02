import { useDispatch } from 'react-redux'
import s from './NewPost.module.scss'
import { useState } from 'react'
import { addPostAction } from '../Reducer/Reducer'


const NewPost = () => {

    const dispatch = useDispatch()
    
    

    const [mess, setMess] = useState<string>('')

    const addTwit = () => {
        const newTwit = {
            id: new Date().toLocaleDateString(),
            user: 'Валёк.',
            email: '@enfotorch',
            text: mess,
            data: new Date().toLocaleDateString()
        }
        dispatch(addPostAction(newTwit))
        setMess('')
    }

    return (
        <div className={s.create}>
            <h1>Что нового?</h1>
            <div className={s.complex}>
                <input onChange={e => setMess(e.target.value)} value={mess} className={s.inp} type="text" />
                <button disabled={!mess.length} onClick={addTwit} className={s.btn}>Твитнуть</button>
            </div>
        </div>
    );
}
 
export default NewPost;
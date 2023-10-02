
interface AddPostPayload {
  id: string;
  user: string;
  email: string;
  text: string;
  data: string;
}

interface InitialState {
  posts: AddPostPayload[]
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: InitialState = {
  posts: [
    {
        id: "1",
        user: 'Валёк.',
        email: '@enfotorch',
        text: 'как проснуться и знать JS?',
        data: '20.04.2023'
    },
    {
        id: "2",
        user: 'Валёк.',
        email: '@enfotorch',
        text: 'Старина Питер, в новых Адидас',
        data: '08.03.2022'
    },
    {
        id: "3",
        user: 'Валёк.',
        email: '@enfotorch',
        text: 'не место красит, а человек место, но я бы не стал тэгать в салоне Мерса',
        data: '29.12.2021'
    },
    {
        id: "4",
        user: 'Валёк.',
        email: '@enfotorch',
        text: 'хороший фильм всегда поправит!',
        data: '09.10.2021'
    },
  ]
}

const ADD_POST = "ADD_POST"
const DEL_POST = "DEL_POST"

export const twitsReducer = (state = initialState, action: Action) => {
  switch(action.type) {
  
    case ADD_POST:
        return {...state, posts: [action.payload, ...state.posts]}
    case DEL_POST:
        return {...state, posts: state.posts.filter(post => post.id !== action.payload)}
    default:
        return state
  }
}

export const addPostAction = (payload: AddPostPayload) => ({type: ADD_POST, payload})
export const delPostAction = (payload: number) => ({type: DEL_POST, payload})
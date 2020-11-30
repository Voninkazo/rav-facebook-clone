import React, { useEffect,useReducer} from 'react';

import Posts from './post.json';
const Context = React.createContext();



function ContextProvider(props) {
    const [state,dispatch] = useReducer((state,action) => {
        switch(action.type) {
            case "POSTS":
                return {...state, allPosts: state.allPosts= action.object}
                default:
                    return state
        }
    },
    {
        allPosts: [],
    }
    );

    const {allPosts} = state

    useEffect(() => {
       dispatch({type: "POSTS", object: Posts})
    },[])
    console.log(allPosts)

  return (
   <Context.Provider value={{allPosts}}>
       {props.children}
   </Context.Provider>
  )
}

export {ContextProvider,Context}

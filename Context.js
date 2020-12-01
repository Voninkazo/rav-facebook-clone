import React, { useEffect,useReducer} from 'react';

import Posts from './post.json';
import usernameData from './username.json';
const Context = React.createContext();



function ContextProvider(props) {
    const [state,dispatch] = useReducer((state,action) => {
        switch(action.type) {
            case "POSTS":
                return {...state, allPosts: state.allPosts= action.object}

            case   "VALUE":
                return{...state, inputValue: state.inputValue = action.input}

            case "USERNAME": 
                return {...state, userName: state.userName = action.name}

            case "LIKES":
                return {...state, objLikes: state.objLikes = action.likes}
            case "PROFILE":
                return {...state, profilePhoto: state.profilePhoto = action.profile}

                default:
                    return state
        }
    },
    {
        allPosts: [],
        inputValue: "",
        objLikes: [],
        userName: "",
        profilePhoto: "",
    }
    );

    const {allPosts,inputValue,objLikes,userName,profilePhoto} = state;

    function addNewComents(e) {
        e.preventDefault();
        const {value}  = e.target;
        dispatch({type: "VALUE", input: value})
        e.target.reset();
        // console.log(value)
    }
  
   const allLikes = Posts.map(post => post.likes);
   const user = usernameData.map(user => user.userName)
   const img = usernameData.map(user => user.profile)

    useEffect(() => {
       dispatch({type: "POSTS", object: Posts}) 
        dispatch({type: "USERNAME", name: user})
        dispatch({type:"LIKES", likes:  allLikes})
        dispatch({type:"PROFILE", profile: img})
    },[])

    function addNewPost(e) {
        e.preventDefault();
        const {legend, picture} = e.target;
       const newPost= {
            "legend": legend,       
            "image": picture,
            "id": Date.now(),
            "date": new Date().toLocaleDateString(),
            "comments": [],
            "likes": [],
       }
    //    dispatch({type:"POSTS", object: newPost})
    console.log(allPosts)
    
     allPosts.push(newPost)
    dispatch({type:"POSTS", object: allPosts})
    }


  return (
   <Context.Provider value={{allPosts,inputValue, addNewComents,userName,objLikes,addNewPost,profilePhoto}}>
       {props.children}
   </Context.Provider>
  )
}

export {ContextProvider,Context}

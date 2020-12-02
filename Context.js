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

    function addNewComents(e,id) {
        const {comment}  = e.target;
        // dispatch({type: "VALUE", input: comment.value})
       
        const newComments = {
            date: Date.now(),
            id:Date.now(),
            username: userName,
            profile: profilePhoto,
            text: comment.value,
        }

        console.log(newComments)
        const updatedPosts = allPosts.map(post => {
            console.log(id)
            if(post.id === id) {
                return {
                    ...post,
                    comments: [...post.comments,newComments],
                }
            }
            return post
        })
        console.log(updatedPosts)
            dispatch({type:"POSTS",object: updatedPosts})
        e.target.reset();
        e.preventDefault();
        // console.log(value)
    }

    function addNewPost(e) {
        e.preventDefault();
        const {legend, picture} = e.target;
       const newPost= {
            "legend": legend.value,
            "image": picture.value,
            "id": Date.now(),
            "date": Date.now(),
            "comments": [],
            "likes": [],
       }
    console.log(allPosts)
     allPosts.push(newPost)
    dispatch({type:"POSTS", object: allPosts})
    e.target.reset();
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

  return (
   <Context.Provider value={{allPosts,inputValue, addNewComents,userName,objLikes,addNewPost,profilePhoto}}>
       {props.children}
   </Context.Provider>
  )
}

export {ContextProvider,Context}

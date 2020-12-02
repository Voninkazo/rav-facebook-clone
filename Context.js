import React, { useEffect,useReducer, useRef} from 'react';

import Posts from './post.json';
import usernameData from './username.json';
const Context = React.createContext();

function ContextProvider(props) {
    const useref = useRef(null)
    const [state,dispatch] = useReducer((state,action) => {
        switch(action.type) {
            case "POSTS":
                return {...state, allPosts: state.allPosts= action.object}

            case "USERNAME": 
                return {...state, userName: state.userName = action.name}

            case "PROFILE":
                return {...state, profilePhoto: state.profilePhoto = action.profile}
                default:    
                    return state
        }
    },
    {
        allPosts: [],
        userName: "",
        profilePhoto: "",
    }
    );

    let {allPosts,inputValue,userName,profilePhoto} = state;

    function addNewComents(e,id) {
        const {comment}  = e.target;

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
    allPosts = [...allPosts,newPost]
    dispatch({type:"POSTS", object: allPosts})
    e.target.reset();
    }

    function handleClickLike(post) {
        console.log(post)
        const isLiked =  post.likes.some(item => item.id == usernameData.id);
            // console.log(isLiked);
            if(!isLiked) {
                const updatedPost = allPosts.map(item => {
                    if(item.id == post.id) {
                        useref.current.className = "liked"
                        return {
                            ...item,
                            likes: [...item.likes, usernameData]
                        }
                    }
                    return item;
                })
                console.log(updatedPost, "liked")
                dispatch({type:"POSTS", object: updatedPost})
            }else {
                const updatedPost = allPosts.map(item => {
                    if(item.id == post.id) {
                        useref.current.className = "unliked"
                        const newPostsArray= post.likes.filter(item => item.id != usernameData.id)
                        return {
                            ...item,
                            likes: newPostsArray
                        }
                    }
                    return item;
                })
                dispatch({type: "POSTS", object: updatedPost})
            }
     }

   const user = usernameData.map(user => user.userName)
   const img = usernameData.map(user => user.profile)

    useEffect(() => {
       dispatch({type: "POSTS", object: Posts}) 
        dispatch({type: "USERNAME", name: user})
        dispatch({type:"PROFILE", profile: img})
    },[])

  return (
   <Context.Provider value={{allPosts,inputValue, addNewComents,userName,addNewPost,profilePhoto,handleClickLike,useref}}>
       {props.children}
   </Context.Provider>
  )
}

export {ContextProvider,Context}

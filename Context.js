import React, { useEffect,useReducer, useRef} from 'react';

import Posts from './post.json';
import userProfileData from './userOptions.json';
const Context = React.createContext();

function ContextProvider(props) {
    const useref = useRef(null)
    const [state,dispatch] = useReducer((state,action) => {
        switch(action.type) {
            case "POSTS":
                return {...state,
                     allPosts: Posts,
                    users: userProfileData,
                    loading: false,
                }

                case 'ADD_COMMENT_TO_POST': {
					const newPosts = state.allPosts.map(post => {
						if (post.id === action.id) {
							return {
								...post,
								comments: [...post.comments, action.newComment],
							};
						}
						return post;
					});
					return {
						...state,
						allPosts: newPosts,
					};
				}
            
                case "LIKE_POST":
                    {
                        const newPosts = state.allPosts.map(post => {
                            if(post.id === action.id) {
                               return{ ...post,
                                likes: [...post.likes,action.newLike],
                            }
                        }
                        return post
                        })
                        return {
                            ...state,
                            allPosts: newPosts,
                        }
                    }
                    case 'UNLIKE_POST': {
                        const newPosts = state.allPosts.map(post => {
                            if (post.id === action.id) {
                                return {
                                    ...post,
                                    likes: post.likes.filter(like => like.userId !== state.currentUser),
                                };
                            }
                            return post;
                        });
                        return {
                            ...state,
                            allPosts: newPosts,
                        };
                    }

            case 'ADD_NEW_POST': {
					return {
						...state,
						allPosts: [...state.allPosts, action.newPost],
					};
                }

            case 'ADD_NEW_COMMENTS': {
					return {
						...state,
						allPosts: [...state.allPosts, action.newComments],
					};
				}

                case 'UPDATE_CURRENT_USER': {
					const newUsersArray = state.users.map(user => {
						if (user.userId === state.currentUser) {
							// update the user and return it
							return {
								...user,
								userName: action.userName,
								pictureprofileUrl: action.profileUrl,
							};
						}
						return user;
					});
					return {
						...state,
						users: newUsersArray,
					};
				}
                default:  {
                    console.error("No actions")
                    break;
            }
        }
        return state;
    },
    {
        allPosts: [],
        users:[],
        currentUser:"134",
        loading: true,
    }
    );


    useEffect(() => {
      setTimeout(() => {
        dispatch({type: "POSTS"}) 
      },1000)
    },[])

  return (
   <Context.Provider value={{state,dispatch}}>
       {props.children}
   </Context.Provider>
  )
}

export {ContextProvider,Context}
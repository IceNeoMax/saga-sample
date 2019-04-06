import {
  ADD_POSTS,
  DELETE
} from './const'

export const getPosts = () => ({
  type: ADD_POSTS
});
export const deletePosts = () => ({
  type: DELETE
});
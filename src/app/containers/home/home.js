import React from 'react'
// import Card from 'app/components/card'
import './style.scss'
// import data from './data'
import { connect } from 'react-redux';
import {
  ADD_POSTS,
  DELETE
} from '../../actions';
// import { incrementAsync } from '../../sagas';

// class Home extends React.Component {
//   render() {
//     return (
//       <div style={{ display: 'flex', flexDirection: 'row' }}>
//         key
//       </div>
//     );
//   }
// }

const Home = (props) => {
  console.log(props)
  const onUp = () => props.getPosts();
  const onDown = () => props.deletePosts();

  return (
    <div>
      <button onClick={onUp}>up</button>
      <button onClick={onDown}>down</button>
      <span>{props.start}</span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getPosts: () => { dispatch({ type: ADD_POSTS }) }
  })
}

const mapStateToProps = (state, ownProps) => {
  return {
    start: state.posts.start
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
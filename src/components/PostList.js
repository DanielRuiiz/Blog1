import React from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';
import UserHeader from './UserHeader';
class PostList extends React.Component{
  componentDidMount(){
    this.props.fetchPost();
  }

  renderList(){
    return this.props.post.map(post=>{
      return (
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user'/>
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId}/>
            </div>
        </div>
      )
    })
  }
  render(){
    //console.log(this.props.post);
    return(
      <div className='ui relaxed divided list'>
        {this.renderList()}
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {post:state.post};
}
//Can pass null in the meantime
export default connect(mapStateToProps, {fetchPost})(PostList);
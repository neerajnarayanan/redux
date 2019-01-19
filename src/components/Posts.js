import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/postActions';

export class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    render() {
        const posts = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                {posts}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchPosts
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Posts);


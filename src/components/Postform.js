import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPosts } from '../actions/postActions'

export class PostForm extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            title: '',
            body: ''
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPosts(post);
    }
    render() {
        return (
            <div>
                <h1>PostForm</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label> Type:</label>
                        <input name="title" onChange={this.onChange} value={this.state.title} type="text" />
                    </div>
                    <br />
                    <div>
                        <label> Body:</label>
                        <textarea onChange={this.onChange} value={this.state.body} name="body" />
                    </div>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

// here imported action  itself is passed to connect function 
export default connect(null, { createPosts })(PostForm);


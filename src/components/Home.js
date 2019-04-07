import React, { Component } from 'react';
import Axios from 'axios';

class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0,10)
                })
            })
    }

    render() {
        const { posts } = this.state
        const postLists = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className = "center">No Posts</div>
        )

        return (
            <div className="container">
                <h4 className="center">Home</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium maxime porro ut earum delectus, eligendi officiis rerum dicta placeat animi nihil ea? Iusto similique unde molestiae quibusdam quisquam quidem exercitationem!</p>
                { postLists }
            </div>
        )
    }
}   

export default Home;
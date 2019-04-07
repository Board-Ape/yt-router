import React from 'react';

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about')
    }, 2000)

    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium maxime porro ut earum delectus, eligendi officiis rerum dicta placeat animi nihil ea? Iusto similique unde molestiae quibusdam quisquam quidem exercitationem!</p>
        </div>
    )
}

export default Contact;
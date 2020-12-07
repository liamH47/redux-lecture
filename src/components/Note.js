import React from 'react';

class Note extends React.Component {

    
    render() {
        const { note } = this.props
        return (
        <li>
            <p>{note.content}</p>
        </li>    
                
        );

    }
}

export default Note;
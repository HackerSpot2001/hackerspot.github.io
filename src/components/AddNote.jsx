import React from 'react'

const AddNote = () => {
    return (
        <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
            <label for="floatingTextarea2">Comments</label>
        </div>
    )
}

export default AddNote

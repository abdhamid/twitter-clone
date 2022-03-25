import Avatar from "./Avatar";
import './ComposeForm.css'
import PropTypes from 'prop-types'
import { useState } from "react";
import { Button } from "@material-ui/core";

function ComposeForm({ onSubmit }) {
    const [editorValue, setEditorValue] = useState('')

    console.log(editorValue)

    const handleEditorValueChange = (e) => {
        setEditorValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(editorValue)
        setEditorValue('')
    }
    return (
        <form className="compose-form" onSubmit={handleSubmit}>
            <div className="compose-form-container">
                <Avatar name={'W'}/>
                <textarea
                    value={editorValue}
                    onChange={handleEditorValueChange}
                    className="compose-form-textarea"
                    placeholder="What's happening?"
                />
            </div>
            <button className="compose-form-submit">Tweet</button>
        </form>
    )
}

ComposeForm.propTypes = {
    // Mind the isRequired flag,
    // if we don't provide any function it will trhow an error
    onSubmit: PropTypes.func.isRequired,
  }

export default ComposeForm
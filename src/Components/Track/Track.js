import React from 'react'
import './Track.css'

export class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
    addTrack() {
        const newTrack = this.props.track;
        this.props.onAdd(newTrack);
    }
    removeTrack() {
        const removeThis = this.props.track;
        this.props.onRemove(removeThis);
    }
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album} </p>
                </div>
                {   this.props.isRemoval
                    ? <button className="Track-action" onClick={this.removeTrack}>-</button>
                    : <button className="Track-action" onClick={this.addTrack}>+</button>
                }
            </div>
        )
    }
}
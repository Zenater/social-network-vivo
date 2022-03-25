import React from 'react';

type StatusType = {
    status: string
    updateStatus:(status: string)=>void
}
class ProfileStatus extends React.Component<StatusType> {

    state = {
        editMode: true,
        status: this.props.status
    }

    activateEditMode=()=> {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode=()=> {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        this.setState( {
            status:e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status} </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange}
                                autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;
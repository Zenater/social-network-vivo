import React, {useEffect, useState} from 'react';

type StatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusHooks = (props: StatusType) => {

    let [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        props.updateStatus(status)
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditMode(false);
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
            <div>
                {/*<span onDoubleClick={activateEditMode}>{props.status || '-------'} </span>*/}
                <b>Status: </b> <span onDoubleClick={ activateEditMode }>{props.status || "-------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    );
}


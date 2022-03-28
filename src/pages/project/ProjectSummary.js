import React from 'react'

// hooks
import { useFirestore } from '../../hooks/useFirestore'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useHistory } from 'react-router-dom'

// components
import Avatar from '../../components/Avatar'

export default function ProjectSummary({ project }) {
    const { deleteDocument } = useFirestore('projects')
    const { user } = useAuthContext()

    const history = useHistory()

    const handleDelete = (e) => {
        deleteDocument(project.id)
        history.push('/')
    }

    return (
        <div>
            <div className="project-summary">
                <h2 className="page-title">{project.name}</h2>
                <p>Created By {project.createdBy.displayName}</p>
                <p className="due-date">
                    Project due by {project.dueDate.toDate().toDateString()}
                </p>
                <p className="details">{project.details}</p>
                <h4>Project is assigned to:</h4>
                <div className="assigned-users">
                    {project.assignedUsersList.map(usr => (
                        <div key={usr.id}>
                            <Avatar src={usr.photoURL} />
                        </div>
                    ))}
                </div>
            </div>
            {user.uid === project.createdBy.id && <button className="btn" onClick={handleDelete}>Mark as Complete</button>}
        </div>
    )
}

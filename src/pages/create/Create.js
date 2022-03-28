import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { useHistory } from 'react-router'
import { timestamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'

// hooks
import { useCollection } from '../../hooks/useCollection'
import { useFirestore } from '../../hooks/useFirestore'

// styles
import './Create.css'

const categories = [
    { value: 'development', label: 'Development' },
    { value: 'design', label: 'Design' },
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
]

export default function Create() {
    const { addDocument, response } = useFirestore('projects')
    const { documents } = useCollection('users')
    const [users, setUsers] = useState([])
    const { user } = useAuthContext()

    const history = useHistory()

    // form field states
    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [category, setCategory] = useState('')
    const [assignedUsers, setAssignedUsers] = useState([])
    const [formError, setFormError] = useState(null)

    useEffect(() => {
        if (documents) {
            const options = documents.map(user => {
                return { value: user, label: user.displayName }
            })
            setUsers(options)
        }
    }, [documents])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormError(null)

        if (!category) {
            setFormError('Please select a project category')
            return
        }
        if (assignedUsers.length < 1) {
            setFormError('Please assign the project to at least one user')
            return
        }

        const createdBy = {
            displayName: user.displayName,
            photoURL: user.photoURL,
            id: user.uid
        }

        const assignedUsersList = assignedUsers.map((usr) => {
            return {
                displayName: usr.value.displayName,
                photoURL: usr.value.photoURL,
                id: usr.value.id
            }
        })

        const project = {
            name,
            details,
            category: category.value,
            dueDate: timestamp.fromDate(new Date(dueDate)),
            comments: [],
            createdBy,
            assignedUsersList
        }

        await addDocument(project)
        if (!response.error) {
            history.push("/")
        }
    }

    return (
        <div className="create-form">
            <h2 className="page-title">Create a new project</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Project name:</span>
                    <input required type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </label>
                <label>
                    <span>Project details:</span>
                    <textarea required type="text" onChange={(e) => setDetails(e.target.value)} value={details} />
                </label>
                <label>
                    <span>Due date:</span>
                    <input required type="date" onChange={(e) => setDueDate(e.target.value)} value={dueDate} />
                </label>
                <label>
                    <span>Project category:</span>
                    <Select onChange={(opt) => setCategory(opt)} options={categories} />
                </label>
                <label>
                    <span>Assign to:</span>
                    <Select onChange={(opt) => setAssignedUsers(opt)} options={users} isMulti />
                </label>
                <button className="btn">Create Project</button>
                {formError && <p className="error">{formError}</p>}
            </form>
        </div>
    )
}

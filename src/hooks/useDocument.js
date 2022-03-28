import React, { useEffect, useState } from "react";
import { firestoreInst } from '../firebase/config'

export const useDocument = (collection, id) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)

    // realtime data for document
    useEffect(() => {
        const ref = firestoreInst.collection(collection).doc(id)

        const unsub = ref.onSnapshot((snapshot) => {
            if (snapshot.data()) {
                setDocument({ ...snapshot.data(), id: snapshot.id })
                setError(null)
            } else {
                setError("Couldn't fetch project")
            }
        }, (err) => {
            console.log(err.message)
            setError(`Failed to get document: ${err.message}`)
        })

        return () => unsub()

    }, [collection, id])
    
    return { document, error }
}
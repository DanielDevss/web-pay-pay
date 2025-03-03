import { useEffect, useState } from "react"

const useDocumentTitle = (text: string) => {
    const [ title, setTitle ] = useState(text)

    useEffect(() => {
        document.title = title
    }, [title])

    return setTitle
}

export default useDocumentTitle

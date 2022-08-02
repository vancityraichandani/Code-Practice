import React, { useEffect } from 'react'

function Quote({quotes, quote, setquote, author, setauthor}) {

    

    useEffect(() => {
        let idx = Math.floor(Math.random() * (8))
        setquote(quotes[idx].quote)
        setauthor(quotes[idx].author)
    }, [])

    return (
        <div style={{marginTop:30}}>
            {quote}
            <br />
            {author}
        </div>
    )
}

export default Quote
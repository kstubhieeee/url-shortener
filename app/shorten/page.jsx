"use client"
import React, { useState } from 'react'

const Shorten = () => {

    const [url, setUrl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState(false)


    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));

    };

    return (
        <div>
            <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
                <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
                <div className='flex flex-col gap-2'>
                    <input
                        value={url}
                        className='px-4 py-2 focus:outline-purple-600 rounded-md'
                        type="text"
                        onChange={e => setUrl(e.target.value)}
                    />
                    <input
                        value={shorturl}
                        className='px-4 py-2 focus:outline-purple-600 rounded-md'
                        type="text"
                        onChange={e => setShorturl(e.target.value)}
                    />
                    <button
                        onClick={generate}
                        className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white'
                    >Generate</button>
                </div>
            </div>
        </div>
    )
}

export default Shorten

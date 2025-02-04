"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Link2, Copy, ExternalLink, Loader2, Sparkles } from 'lucide-react'
import toast from 'react-hot-toast'

const Shorten = () => {
    const [url, setUrl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState(false)
    const [loading, setLoading] = useState(false)

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text)
            toast.success('URL copied to clipboard!', {
                icon: '✨',
                style: {
                    background: '#111',
                    color: '#fff',
                    border: '1px solid rgba(245, 158, 11, 0.2)',
                }
            })
        } catch (err) {
            toast.error('Failed to copy URL')
        }
    }

    const generate = () => {
        if (!url || !shorturl) {
            toast.error('Please fill in all fields', {
                style: {
                    background: '#111',
                    color: '#fff',
                    border: '1px solid rgba(245, 158, 11, 0.2)',
                }
            })
            return
        }

        setLoading(true)
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
                setUrl("")
                setShorturl("")
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                if (result.success) {
                    toast.success(result.message, {
                        icon: '✨',
                        style: {
                            background: '#111',
                            color: '#fff',
                            border: '1px solid rgba(245, 158, 11, 0.2)',
                        }
                    })
                } else {
                    toast.error(result.message, {
                        style: {
                            background: '#111',
                            color: '#fff',
                            border: '1px solid rgba(245, 158, 11, 0.2)',
                        }
                    })
                }
            })
            .catch((error) => {
                console.error(error)
                toast.error('Something went wrong', {
                    style: {
                        background: '#111',
                        color: '#fff',
                        border: '1px solid rgba(245, 158, 11, 0.2)',
                    }
                })
            })
            .finally(() => {
                setLoading(false)
            });
    };

    return (
        <div className="min-h-screen bg-black py-16 px-4">
            <div className='mx-auto max-w-lg bg-black p-8 rounded-lg shadow-xl border border-yellow-500/20'>
                <div className="flex items-center gap-2 mb-8">
                    <Sparkles className="text-yellow-500" size={24} />
                    <h1 className='font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-200'>
                        Generate your short URLs
                    </h1>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-300">Enter URL to shorten</label>
                        <input
                            value={url}
                            placeholder="https://example.com"
                            className="input-field"
                            type="text"
                            onChange={e => setUrl(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-300">Custom short URL</label>
                        <input
                            value={shorturl}
                            placeholder="custom-url"
                            className="input-field"
                            type="text"
                            onChange={e => setShorturl(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={generate}
                        disabled={loading}
                        className='gradient-btn rounded-lg shadow-lg p-3 font-bold text-black transition-all 
                        disabled:opacity-50 disabled:cursor-not-allowed
                        flex items-center justify-center gap-2'
                    >
                        {loading ? (
                            <Loader2 className="animate-spin" size={20} />
                        ) : (
                            <>
                                <Link2 size={20} />
                                Generate
                            </>
                        )}
                    </button>
                </div>
            </div>
            {generated && (
                <div className="mt-8 text-center">
                    <p className="text-gray-400 mb-2">Your shortened URL:</p>
                    <div className="flex items-center justify-center gap-2">
                        <code className="px-4 py-2 bg-black rounded-lg border border-yellow-500/20">
                            <Link
                                target='_blank'
                                href={generated}
                                className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-2"
                            >
                                {generated}
                                <ExternalLink size={16} />
                            </Link>
                        </code>
                        <button
                            onClick={() => copyToClipboard(generated)}
                            className="p-2 hover:bg-black rounded-lg transition-colors"
                            title="Copy to clipboard"
                        >
                            <Copy size={20} className="text-yellow-500" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Shorten
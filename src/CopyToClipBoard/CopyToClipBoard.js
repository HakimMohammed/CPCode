import { useState } from "react";


export default function CopyToClipBoard() {

    const [text, setText] = useState("");
    const [isCopied, setIsCopied] = useState(false)

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    const copyText = () => {
        copyTextToClipboard(text)
            .then(() => {
                // If successful, update the isCopied state value
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
            <br />
            <button onClick={copyText}>
                <span>{isCopied ? 'Copied' : 'Copy'}</span>
            </button>
        </div>
    )
}
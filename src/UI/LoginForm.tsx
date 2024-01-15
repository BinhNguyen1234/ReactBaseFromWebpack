import { useEffect, useRef, type ChangeEvent } from 'react'

export default function FormLogin (): JSX.Element {
    const file = useRef<HTMLInputElement>()
    useEffect(() => {
        // const fileReader = new FileReader()
    })
    function test (e: ChangeEvent<HTMLInputElement>): void {
        e.preventDefault()
        const data = (e as any).target.files[0]
        const chunkSize = 1024 * 1024 * 10 // size of each chunk (1MB)
        let start = 0
        while (start < data.size) {
            void uploadChunk(data.slice(start, start + chunkSize))
            start += chunkSize
        }

        async function uploadChunk (chunk: any): Promise<any> {
            const reader = new FileReader()
            reader.readAsDataURL(chunk)
            reader.onloadend = (e) => {
                console.log(reader.result)
            }
            const formData = new FormData()
            formData.append('file', chunk)

            // Make a request to the server
            await fetch('/upload-endpoint', {
                method: 'POST',
                body: formData
            })
        }
    }

    function testt (e: any): void {
        const defaultWrite = new WritableStream().getWriter()
        console.log(defaultWrite)
    }
    return (<>
        <form method="post" action="/authenticate">
            <label htmlFor="Name">Email:</label>
            <input name="email" id="Name" type="text"></input>
            <label htmlFor="Password">Password:</label>
            <input name="password" id="Password" type="password"></input>
            <input value="Submit" type="submit"></input>
            <input onChange={test} ref={file} type="file"></input>

        </form>
        <button onClick={testt} >ok</button>
    </>)
}

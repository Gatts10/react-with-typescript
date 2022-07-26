import React, { useState } from 'react'
import { IState as Props } from "../App"

interface IProps {
    people: Props["people"],
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

export default function AddToList({ people, setPeople }: IProps) {

    const [input, setInput] = useState({
        name: "",
        age: "",
        url: "",
        note: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (
            !input.name ||
            !input.age ||
            !input.url
        ) {
            return
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note
            }
        ])

        setInput({
            name: "",
            age: "",
            url: "",
            note: ""
        })
    }

    return (
        <div className='AddToList'>
            <input type="text" placeholder='Name'
                className='AddToList-input' value={input.name} name="name" onChange={handleChange} />
            <input type="number" placeholder='Age'
                className='AddToList-input' value={input.age} name="age" onChange={handleChange} />
            <input type="text" placeholder='Image Url'
                className='AddToList-input' value={input.url} name="url" onChange={handleChange} />
            <textarea placeholder='Notes'
                className='AddToList-input' value={input.note} name="note" onChange={handleChange} />
            <button className='AddToList-btn' onClick={handleClick}>Add to List</button>
        </div>
    )
}

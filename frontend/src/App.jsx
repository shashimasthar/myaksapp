import React, { useState, useEffect } from 'react'

function App() {
    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState('')
    const apiUrl = import.meta.env.VITE_API_URL || 'http://172.193.177.12'

    useEffect(() => {
        fetch(`${apiUrl}/api/items`)
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(err => console.error('Error fetching items:', err))
    }, [])

    const addItem = async (e) => {
        e.preventDefault()
        if (!newItem) return

        try {
            const res = await fetch(`${apiUrl}/api/items`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: newItem })
            })
            const data = await res.json()
            setItems([...items, data])
            setNewItem('')
        } catch (err) {
            console.error('Error adding item:', err)
        }
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>AKS Demo App</h1>
            <form onSubmit={addItem}>
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="Add new item"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {items.map(item => (
                    <li key={item._id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default App

import { Table } from "antd";
import { useEffect, useState } from "react";

export function Posts() {
    const [posts, setPosts] = useState ([])
    const [loading, setLoading] = useState (false)
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Titulo',
            dataIndex: 'title',
            key: 'title',
        },
    ]

    const data = [
        {
            name: 'Mike',
            age: 25
        },
        {
            name: 'Edson',
            age: 25
        },
        {
            name: 'Pedro',
            age: 25
        }
    ]

    useEffect(() => {
        async function fetchPosts() {
            setLoading(true)
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            setLoading(false)
            setPosts(data)
        }
        fetchPosts()
    }, [])

    return <div>
        <h1>Posts...</h1>
        <Table rowKey='id' dataSource={posts} columns={columns} loading={loading} />

    </div>
}
export const getData = async () => {
    const res = await fetch('https://api.hyunatic.com/getData')
    return await res.json()
}

export const deleteData = (id: string) => {
    fetch('https://api.hyunatic.com/deleteData', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ id })
    })
}

export const createData = (data) => {
    fetch('https://api.hyunatic.com/createData', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    })
}
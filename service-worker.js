addEventListener('message', ({data, source: {id}}) => {
    clients.matchAll().then(clients => {
        clients.forEach(client => {
            if (client.id !== id)
                client.postMessage(data)
        })
    })
})
export const login = async (data) => {
    const response = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const res = response.json()

    return res
}

export const register = async (data) => {
    const response = await fetch(`http://localhost:3030/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const res = response.json();

    return res
}
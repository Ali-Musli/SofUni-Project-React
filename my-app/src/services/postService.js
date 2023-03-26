export const create = async (data, token) => {
    console.log(token);
    let option = '';
    if (token) {
        option = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(data)
        }
    } else {
        option = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    }

    const response = await fetch('http://localhost:3030/data/posts', option);

    const res = response.json();

    return res;
}

export const getAll = async () => {
    const response = await fetch(`http://localhost:3030/data/posts`);
    const res = await response.json()

    return res
}

export const getOne = async (id) => {
    const response = await fetch(`http://localhost:3030/data/posts/${id}`)
    const res = response.json();

    return res
}
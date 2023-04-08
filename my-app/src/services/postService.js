const token = () => {
    const tokenFromLocalStorage = localStorage.getItem('auth')
    if(tokenFromLocalStorage){
        const auth = JSON.parse(tokenFromLocalStorage);
        return auth.accessToken
    }else{
        return null
    }
}

export const create = async (data) => {

    let option = '';
    if (token()) {
        option = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': token()
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

    if (!response.ok) {
        return []
    }
    const res = await response.json()

    return res
}

export const getOne = async (id) => {
    const response = await fetch(`http://localhost:3030/data/posts/${id}`)
    const res = response.json();

    return res
}

export const del = async (id) => {
    const response = await fetch(`http://localhost:3030/data/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token()
        }
    });

    const res = response.json()

    return res
}

export const edit = async (id, data) => {
    const response = await fetch(`http://localhost:3030/data/posts/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token()
        },
        body: JSON.stringify(data)
    })

    const res = response.json();
    return res
}
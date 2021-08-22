const url = 'https://reqres.in/api/users?';

export async function apifetch(page){
    const users = await fetch(`${url}page${page}`).then(res => res.json().catch((err) =>{ console.log("Fetching Data unsuccessful", err.message)}));
    return users;
}
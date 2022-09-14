export const setUser = (user) => { 
     localStorage.setItem('user',JSON.stringify(user));
}

export const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}
async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data);
    } catch (e) {
        console.warn(e);
    }

}




getUserFromGithub('diego3g');
getUserFromGithub('marlloncampos')
getUserFromGithub('diego3g124123');

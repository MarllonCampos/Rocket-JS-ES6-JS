const buscaUsuario = async (usuario) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`)

        console.log(response.data);
    } catch (e) {

        console.error('Usuário não existe', e);
    }
}

buscaUsuario('diego3g');
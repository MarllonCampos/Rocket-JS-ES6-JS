
class Github {
    static async getUserRepositories(user, repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${user}/${repo}`)

            console.log(response.data);
        } catch (e) {
            console.error('Repositório não existe ', e);
        }
    }
}



Github.getUserRepositories('marlloncampos', 'Rocket-JS')
Github.getUserRepositories('teste', 'Rocket-JS')
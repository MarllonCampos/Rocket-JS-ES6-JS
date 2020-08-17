oot = document.querySelector("#root")
nameRepo = document.querySelector('.nameRepo')
sendButton = document.querySelector('.sendButton')
app = document.querySelector('#app')

sendButton.addEventListener('click', getInputTextValue)



function getInputTextValue() {
    var nameRepoText = nameRepo.value
    searchOnGithubApi(nameRepoText)
    nameRepo.value = ""
}

function searchOnGithubApi(userName) {
    axios.get(`https://api.github.com/users/${userName}/repos`)
        .then(response => {
            app.innerHTML = ""
            var ul = document.createElement('ul')
            var li = document.createElement('li')
            var loadingText = document.createTextNode("Carregando...")
            li.appendChild(loadingText)
            ul.appendChild(li)
            app.appendChild(ul)
            return response.data

        })
        .then(data => {
            setTimeout(function () { createListRepos(data) }, 900)
        })
        .catch(error => {
            app.innerHTML = ""
            var span = document.createElement('span')
            textSpan = document.createTextNode(`O usuario ${userName} não aparece nos registros do GitHub`)
            span.appendChild(textSpan)
            span.style.marginTop = "23px"
            app.appendChild(span)
        })
}




function createListRepos(data) {
    app.innerHTML = ""
    var ul = document.createElement('ul')
    ul.innerHTML = `<strong>${data[0].owner.login}</strong> - Github Criado em: <strong>${data[0].created_at}</strong>`
    data.map((repo) => {
        var li = document.createElement('li')
        var repoName = document.createTextNode(repo.name)
        var link = document.createElement('a')
        link.setAttribute('href', repo.html_url)
        link.setAttribute('target', '_blank')
        link.appendChild(repoName)
        li.appendChild(link)
        ul.appendChild(li)
    })
    app.appendChild(ul)

}
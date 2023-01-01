const input = document.querySelector('.search-user')
const btn = document.querySelector('.btn')
const meses = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]
const darkmode = document.querySelector('.togglemode')

btn.addEventListener('click', fetchAdvice)

window.addEventListener('keydown', (e) =>{
    if (e.keyCode == 13){
        fetchAdvice()
    }
})

async function fetchAdvice(){
    if (input.value.length > 0){
        const response = await fetch(`https://api.github.com/users/${input.value}`)
        const data = await response.json()
        const data1 = new Date(data.created_at)
        console.log(data)

        document.querySelector('.year').textContent = data1.getFullYear()
        if (data.message){
            alert('Digite um usuário válido!')
            return
        }
        document.querySelector('.nome').textContent = data.name
        document.querySelector('.login').textContent = data.login
        if (data.bio == null){
            document.querySelector('.bio').textContent = 'This profile has no bio'
        }else{
            document.querySelector('.bio').textContent = data.bio
        }
        document.querySelector('.repo').textContent = data.public_repos
        document.querySelector('.followers-number').textContent = data.followers
        document.querySelector('.following-number').textContent = data.following
        if (data.location == null){
            document.querySelector('.location-text').textContent = 'No location '
        }else{
            document.querySelector('.location-text').textContent = data.location
        }
        if (data.blog === ""){
            document.querySelector('.blog-text').textContent = "No blog"
        }
        else{
            document.querySelector('.blog-text').textContent = data.blog
        }
        if (data.twitter_username == null){
            document.querySelector('.twitter-text').textContent = "Not available"
        } else{
            document.querySelector('.twitter-text').textContent = data.twitter_username
        }
        if (data.company == null){
            document.querySelector('.company-text').textContent = "No Company"
        } else{
            document.querySelector('.company-text').textContent = data.company
        }
        document.querySelector('.user-image').src = data.avatar_url
        const mesCriado = data1.getMonth()
        document.querySelector('.month').textContent = meses[mesCriado]
        document.querySelector('.date').textContent = data1.getDate()
    }
    else{
        alert('Não deixe a caixa de texto vazia')
    }
    
    
}

async function fetchAdviceLoad(){
    const response = await fetch(`https://api.github.com/users/octocat`)
    const data = await response.json()
    const data1 = new Date(data.created_at)
    document.querySelector('.year').textContent = data1.getFullYear()
    if (data.message){
        alert('Digite um usuário válido!')
        return
    }
    document.querySelector('.nome').textContent = data.name
    document.querySelector('.login').textContent = data.login
    if (data.bio == null){
        document.querySelector('.bio').textContent = 'This profile has no bio'
    }else{
        document.querySelector('.bio').textContent = data.bio
    }
    document.querySelector('.repo').textContent = data.public_repos
    document.querySelector('.followers-number').textContent = data.followers
    document.querySelector('.following-number').textContent = data.following
    document.querySelector('.location-text').textContent = data.location
    if (data.blog === ""){
        document.querySelector('.blog-text').textContent = "No blog"
    }
    else{
        document.querySelector('.blog-text').textContent = data.blog
    }
    if (data.twitter_username == null){
         document.querySelector('.twitter-text').textContent = "Not available"
    } else{
        document.querySelector('.twitter-text').textContent = data.twitter
    }
    if (data.company == null){
        document.querySelector('.company-text').textContent = "No Company"
    } else{
        document.querySelector('.company-text').textContent = data.company
    }
    document.querySelector('.user-image').src = data.avatar_url
    const mesCriado = data1.getMonth()
    document.querySelector('.month').textContent = meses[mesCriado]
    document.querySelector('.date').textContent = data1.getDate()
    
}

fetchAdviceLoad()

darkmode.addEventListener('click', () =>{
    document.body.classList.toggle('darkmode')
    if (document.body.classList.contains('darkmode')){
        darkmode.innerHTML = '<p style="color: #697C9A;">DARK</p> <img src="assets/icon-moon.svg" alt="Toggle dark mode" style="filter: none;">'
    } else{
        darkmode.innerHTML = 'LIGHT <img src="assets/icon-sun.svg" alt="Toggle dark mode">'
    }
})
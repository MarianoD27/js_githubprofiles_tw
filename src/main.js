document.addEventListener('DOMContentLoaded', () => {

  const searchBtn = document.getElementById('search-btn')

  searchBtn.addEventListener('click', () => {
    const searchInput = document.getElementById('search-input').value


    assignUser(searchInput)
    saveData(searchInput)
  })

  loadData()

  async function getUser(user) {
    const res = await fetch(`https://api.github.com/users/${user}`)

    return res
  }

  async function assignUser(user) {
    const r2 = await getUser(user)
    console.log(r2)

    if (r2.status != 200) {
      document.getElementById('error').innerHTML = "There's been an error"
    } else {
      document.getElementById('error').innerHTML = ''
      const r3 = await r2.json()
      console.log(r3)
      document.getElementById('user-img').src = r3.avatar_url
      document.getElementById('user-name').innerHTML = r3.name
      document.getElementById('user-login').innerHTML = r3.login
      document.getElementById('user-bio').innerHTML = r3.bio
      document.getElementById('user-repos').innerHTML = r3.public_repos
      document.getElementById('user-followers').innerHTML = r3.followers
      document.getElementById('user-html').href = r3.html_url
    }
  }

  function saveData(storeUser) {
    localStorage.setItem('githubUser1', storeUser)
  }

  function loadData() {
    const loadUser = localStorage.getItem('githubUser1')
    assignUser(loadUser)
  }


})
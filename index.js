require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "Rana628",
  "id": 121398488,
  "node_id": "U_kgDOBzxk2A",
  "avatar_url": "https://avatars.githubusercontent.com/u/121398488?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Rana628",
  "html_url": "https://github.com/Rana628",
  "followers_url": "https://api.github.com/users/Rana628/followers",
  "following_url": "https://api.github.com/users/Rana628/following{/other_user}",
  "gists_url": "https://api.github.com/users/Rana628/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Rana628/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Rana628/subscriptions",
  "organizations_url": "https://api.github.com/users/Rana628/orgs",
  "repos_url": "https://api.github.com/users/Rana628/repos",
  "events_url": "https://api.github.com/users/Rana628/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Rana628/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-12-25T17:16:31Z",
  "updated_at": "2022-12-25T17:16:31Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req,res)=> {
    res.send('ranahari_')
})

app.get('/login', (req, res)=> {
    res.send('<h1> Please login Chai aur Code</h1>')
})
app.get('/youtube', (req,res)=>{
    res.send("<h2> Chai aur Code</h2>")
})

app.get('/github', (req, res)=> {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
const LinksSocialMedia = {
  github: 'musashifraco',
  youtube: 'channel/UCGqXSdjs8UZJBRqNX0ot9Og',
  facebook: 'profile.php?id=100077310197331',
  twitter: 'musashifraco',
  instagram: 'musashifraco'
}
function changeSocialMedia() {
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMedia()

function getUser() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      UserBio.textContent = data.bio
      UserGitHub.href = data.html_url
      UserImage.src = data.avatar_url
    })
}

getUser()

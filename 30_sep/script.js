let mainDiv = document.getElementById("output")
      const fetchBtn = document.getElementById("fetchBtn")
      async function getData() {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/users")
          const users = await res.json()
          console.log(users);
          mainDiv.innerHTML = ""

          users.forEach(user => {
            let card = document.createElement("div")
            card.classList = "card"
            let idDiv = document.createElement("div")
            idDiv.classList = "skeleton"
            idDiv.style.width = "80%"
            let namediv = document.createElement("div")
            namediv.classList = "skeleton"
            namediv.style.width = "60%"
            let emailDiv = document.createElement("div")
            emailDiv.classList = "skeleton"
            emailDiv.style.width = "90"

            idDiv.innerText = user.id
            namediv.innerText = user.name
            emailDiv.innerText = user.email

            card.append(idDiv, namediv, emailDiv)
            mainDiv.append(card)

          })


        }
        catch (err) {
          console.log("unable to fetch data from api ");

        }
      }
      fetchBtn.addEventListener('click', getData)

      const realoadBtn = document.getElementById('reLoad')

      realoadBtn.addEventListener('click', () => {
                   mainDiv.innerHTML = ""

        for (let i = 0; i <= 3; i++) {
                  

          mainDiv.innerHTML += `<div class="card">
      <div class="skeleton" style="width: 80%"></div>
      <div class="skeleton" style="width: 60%"></div>
      <div class="skeleton" style="width: 90%"></div>`;
        }
        getData()
      })
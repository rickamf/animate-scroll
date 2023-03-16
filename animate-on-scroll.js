const intersectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log(entry)
    entry.target.classList.toggle("show", entry.isIntersecting)
  })
})

const elemets = document.querySelectorAll(".animate")

elemets.forEach(el => intersectObserver.observe(el))



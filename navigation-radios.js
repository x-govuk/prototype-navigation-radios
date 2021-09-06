(function () {
  const $ = function (query, subject) {
    return [].concat(...(subject || document).querySelectorAll(query))
  }

  document.addEventListener('submit', function (e) {
    e.preventDefault()
    $('input[type=radio][name=redirect]', e.target).forEach(function (i) {
      if (i.checked) {
        window.location.href = i.value
      }
    })
  })

}())

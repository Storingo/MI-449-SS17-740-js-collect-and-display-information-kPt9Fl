var firstNameInput = document.getElementById('firstName')
var lastNameInput = document.getElementById('lastName')
var descriptionInput = document.getElementById('description')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var profileInput = document.getElementById('preview')
var rawProfileInput = document.getElementById('raw')

var updateProfile = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var description = descriptionInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  profileInput.innerHTML =
    '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1>' +
    '<p>' + description + '</p>' +
    '<p>' + 'If you\'re interested in a date, you can email me at' +
    '<a href="mailto:' + email + '" target="_blank">' + email + '</a>' +
    ' or give a call at ' +
    '<a href="tel:' + phone + '" target="_blank">' + phone + '</a></p>'

  rawProfileInput.textContent =
    '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1>' +
    '<p>' + description + '</p>' +
    '<p>' + 'If you\'re interested in a date, you can email me at' +
    '<a href="mailto:' + email + '" target="_blank">' + email + '</a>' +
    ' or give a call at ' +
    '<a href="tel:' + phone + '" target="_blank">' + phone + '</a></p>'
}

firstNameInput.addEventListener('input', updateProfile)
lastNameInput.addEventListener('input', updateProfile)
descriptionInput.addEventListener('input', updateProfile)
emailInput.addEventListener('input', updateProfile)
phoneInput.addEventListener('input', updateProfile)

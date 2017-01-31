var firstNameInput = document.getElementById('firstName')
var lastNameInput = document.getElementById('lastName')
var descriptionInput = document.getElementById('description')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var profileInput = document.getElementById('preview')
var rawProfileInput = document.getElementById('raw')

var updateMadlib = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var description = descriptionInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  profileInput.innerHTML = '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1>' +
    '<p>' + description + '</p>' +
    '<p>' + 'If you\'re interested in a date, you can email me at <a href="mailto:' + email + '" target="_blank">' + email + '</a>' +
    ' or give a call at ' +
    '<a href="tel:' + phone + '" target="_blank">' + phone + '</a></p>'

  rawProfileInput.textContent = '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1>' +
    '<p>' + description + '</p>' +
    '<p>' + 'If you\'re interested in a date, you can email me at <a href="mailto:' + email + '" target="_blank">' + email + '</a>' +
    ' or give a call at ' +
    '<a href="tel:' + phone + '" target="_blank">' + phone + '</a></p>'
}

firstNameInput.addEventListener('input', updateMadlib)
lastNameInput.addEventListener('input', updateMadlib)
descriptionInput.addEventListener('input', updateMadlib)
emailInput.addEventListener('input', updateMadlib)
phoneInput.addEventListener('input', updateMadlib)

// <h1>Hi, my name is FIRST_NAME LAST_NAME!</h1>
// <p>DESCRIBE_YOURSELF_INFO</p>
// <p>
//   If you're interested in a date, you can email me at
//   <a href="mailto:EMAIL_ADDRESS" target="_blank">EMAIL_ADDRESS</a>
//   or give me a call at
//   <a href="tel:PHONE_NUMBER" target="_blank">PHONE_NUMBER</a>.
// </p>

var fs = require('fs')
var fsPromises = require('fs/promises');
var emlformat = require('eml-format');

var emailDirectory = __dirname + "/../../website/email/"

function hasEmlExtension(file) { return file.slice(-4) === '.eml' }
function removeEmlExtension(file) { return file.slice(0, -4) }


fsPromises.readdir(emailDirectory)
  .then(files => files.filter(hasEmlExtension))
  .then(emlFiles => emlFiles.map(removeEmlExtension))
  .then(emailNames => emailNames.map(emailName => ({
        name: emailName,
        content:
          fs.readFileSync(emailDirectory + emailName + '.eml').toString()
      })
    )
  )
  .then(emails => {
    for (var email of emails) {
      emlformat.read(email.content, (error, data) => { 
        if (error) return console.log(error)
        fs.writeFileSync(
          emailDirectory + email.name +'.json',
          JSON.stringify(data, " ", 2))
      })
    }
  })
  .catch(error => console.log(error))
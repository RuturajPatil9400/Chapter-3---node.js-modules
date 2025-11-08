const fs = require('fs')
fs.writeFile('fs_sample.txt', 'Sample file system data', err => {
  if (err) {
    console.error(err)
    return
  }
  fs.readFile('fs_sample.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Read:', data)
    fs.unlink('fs_sample.txt', err => {
      if (err) console.error(err)
      else console.log('Deleted fs_sample.txt')
    })
  })
})

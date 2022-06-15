Object.assign(exports, {
  on: function(location) {
    Object.assign(location, {
      fblack: function(text) {
        console.log(col.black, text, col.reset)
      }
    })
  }
})

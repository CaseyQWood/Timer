const arg = process.argv.slice(2)

const timer = (time) => { 
  for (const bit of time) {
    if(bit > 0) {
      setTimeout(() => {console.log(`ping at ${bit} seconds`)}, bit * 100)
    }
  }
}

timer(arg)
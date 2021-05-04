const spinner = function(numSpins){
  let animations =("/-\\|").repeat(numSpins)
  let timeout = 300;
  for(let animation of animations){
    setTimeout(() => {
      process.stdout.write(`'\r${animation}   `)
    }, timeout)
    timeout += 200
  }
}

spinner(10)
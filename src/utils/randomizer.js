function randomInteger(min, max) {
  // случайное число от min до (max+1)
  const randomNumbers = Math.floor(Math.random() * (max - min) + min)
  //   this.freeMasterStart = min + Math.random() * (max + 1 - min)
  //   Math.floor(Math.random() * (max - min + 1)) + min
  return randomNumbers
}

export default randomInteger

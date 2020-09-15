/*
DRY: Don't Repeat Yourself; use things like loops, functions, classes so your code is clean and not repeting itself.
KISS: Keep it Simple, Stupid; dont over complicate.
Avoid creating a YAGNI: You aren’t going to need it; dont use functions untill you need 
Do the simplest thing that could possibly work: the easiest way to do something. do that. 
Don't make me think: your code should be simple, easy to read/ understand so anyone can understand it.
Write code for the maintainer: so the person, a stranger, could read and maintaine your code easily
Single responsibility principle: class or function should do that one thing and do it well
Avoid premature optimization: don't optimize untill your code works.
Separation of concerns: different tasks need to be handled differently.
*/


// Comment code

const f = l => {
    // creates a let variable called es which is (mutable) and equal to 0, p variable is equal to 0, c variable is equal to 1, and n variable is equal to 0
    let es = 0, p = 0, c = 1, n = 0
    // a while loop is created with conditions if c is less than or equal to l (*note don't know what is the value of l)
    while (c <= l) {
      //variable n is equal to c plus variable p
      n = c + p;
      //the variables c and p are equal to the variables n and c
      [c, p] = [n, c]
      // filter to get the even numbers 
      es += (c % 2 === 0) ? c : 0
    }
    // return the even sum 
    return es
  }
  //log the value 
  console.log(f(55))



  
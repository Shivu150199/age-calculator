const calcBtn=document.querySelector('.btn')
console.log(calcBtn)
let yearContainer=document.querySelector('.year-result')
let monthContainer=document.querySelector('.month-result')
let dayContainer=document.querySelector('.day-result')
let label=document.querySelectorAll('.input-container>label')
let input=document.querySelectorAll('.input-container>input')

const date=new Date()
console.log(date)
let currentYear=date.getFullYear()
console.log(currentYear)
let currentMonth=date.getMonth()+1
console.log(currentMonth)
let currentDate=date.getDate();
console.log(currentDate)


calcBtn.addEventListener('click',calcAge)

function removeClass(){
    month.nextSibling.nextSibling.classList.remove('hide')
    day.nextSibling.nextSibling.classList.remove('hide')
    year.nextSibling.nextSibling.classList.remove('hide')
    label.forEach((item)=>{

        item.style.color='red'
    })
    input.forEach((item)=>{

        item.style.border='1px solid red'
    })
    


    yearsLeft = '--'
    monthsLeft = '--'
    dayLeft = '--'
}


function calcAge(){
let mob=month.value;
let dob=day.value;
let yob=year.value;
let yearsLeft; 
let monthsLeft

let dayLeft
if(mob==''){
month.nextSibling.nextSibling.classList.remove('hide')
yearsLeft='--';
monthsLeft='--';
dayLeft='--';
}
if(dob==''){
day.nextSibling.nextSibling.classList.remove('hide')
yearsLeft = '--';
monthsLeft = '--';
dayLeft = '--';
}
if(yob==''){
year.nextSibling.nextSibling.classList.remove('hide')
yearsLeft = '--'
monthsLeft = '--'
dayLeft = '--'
}

if(yob==''||dob==''||mob==''){
month.nextSibling.nextSibling.classList.remove('hide')
day.nextSibling.nextSibling.classList.remove('hide')
year.nextSibling.nextSibling.classList.remove('hide')
  label.forEach((item) => {
    item.style.color = 'red'
  })
  input.forEach((item) => {
    item.style.border = '1px solid red'
  })
    
yearsLeft = '--'
monthsLeft = '--'
dayLeft = '--'
}else{
yearsLeft = currentYear - yob
if (currentMonth >= mob) monthsLeft = currentMonth - mob
else {
  yearsLeft--
  monthsLeft = 12 + currentMonth - mob
}

if (currentDate >= dob) dayLeft = currentDate - dob
else {
  monthsLeft--
  dayLeft = 31 + currentDate - dob

  if (monthsLeft < 0) {
    monthsLeft = 11
    yearsLeft--
  }
}

console.log(dayLeft)
console.log(monthsLeft)
console.log(yearsLeft)
// let dayLeft=currentDate-dob


if(yearsLeft<0){
    yearsLeft = '--'
    monthsLeft = '--'
    dayLeft = '--'

   month.nextSibling.nextSibling.classList.remove('hide')
   day.nextSibling.nextSibling.classList.remove('hide')
   year.nextSibling.nextSibling.classList.remove('hide')


   month.nextSibling.nextSibling.innerText='this input is invalid'
   day.nextSibling.nextSibling.innerText='this input is invalid'
   year.nextSibling.nextSibling.innerText='this input is invalid'
   
}else{
yearContainer.innerText = yearsLeft
monthContainer.innerText = monthsLeft
dayContainer.innerText = dayLeft

month.nextSibling.nextSibling.classList.add('hide')
day.nextSibling.nextSibling.classList.add('hide')
year.nextSibling.nextSibling.classList.add('hide')
}




}

}




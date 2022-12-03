
//handle time formating
export const AmPm = (value) => {
    if (value) {
        let hour = value.split(":")[0].toString()
        let minute = value.split(":")[1].toString()
        if (hour > 12) {
            let result = (hour - 12) + ":" + minute + " " + "PM"
            return result
        } else if (hour == 12) {
            let result = hour + ":" + minute + " " + "PM"
            return result
        } else {
            let result = hour + ":" + minute + " " + "AM"
            return result
        }
    }
}


export const calculateAge = (birthDate) => {

  let currentDate = new Date()

  let currentYear = currentDate.getFullYear()
  let currentMonth = currentDate.getMonth() + 1
  let currentDay = currentDate.getDate()
  
  let birthYear = birthDate.split("-")[0].trim()
  let birthMonth = birthDate.split('-')[1].trim()
  let birthDay = birthDate.split('-')[2].trim()

  if (birthMonth > currentMonth & birthDay > currentDay){
      let totalYear = currentYear-birthYear - 1
      let totalMonth = (currentMonth + 12) - birthMonth
      let totalDay = (currentDay + 30) - birthDay
      return [totalYear, totalMonth, totalDay]
  }else if(birthMonth > currentMonth){
      if (!(birthDay > currentDay)){
          let totalYear = currentYear-birthYear - 1
          let totalMonth = (currentMonth + 12) - birthMonth
          let totalDay = currentDay - birthDay
          return [totalYear, totalMonth, totalDay]
      }
  }
   else if(birthDay > currentDay ){
      if (!(birthMonth > currentMonth)){
          let totalYear = currentYear - birthYear
          let totalMonth = ((currentMonth - birthMonth) -1 )
          let totalDay = (currentDay + 30) - birthDay
          return [totalYear, totalMonth, totalDay]
      }
  }else{
    let totalYear = currentYear - birthYear
    let totalMonth = currentMonth - birthMonth
    let totalDay = currentDay - birthDay
    let result = [totalYear, totalMonth, totalDay]
    return result
  }

}

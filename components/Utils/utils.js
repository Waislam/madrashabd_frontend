
//handle time formating
export const AmPm =(value)=> {
    if (value){
        let hour = value.split(":")[0].toString()
        let minute = value.split(":")[1].toString()
        if (hour>12){
            let result = (hour-12)+":"+ minute + " " + "PM"
            return result
        }else if(hour==12){
            let result =  hour+":"+ minute + " " + "PM"
            return result
        }else{
            let result =  hour+":"+ minute + " " + "AM"
            return result
        }
    }
  }
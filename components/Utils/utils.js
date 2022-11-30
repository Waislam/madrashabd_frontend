
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
    // let now = new Date();
    // let currentYear = now.getFullYear();
    // let birthYear = birthDate.getFullYear();
    // let age = currentYear - birthYear;
    // if (now < new Date(birthDate.setFullYear(currentYear))) {
    //     age = age - 1;
    //     return age
    // }
    // console.log("current date: ", birthDate)
    let getBirthYear = birthDate.split("-")[0].trim()
    let getCurrentYear = new Date().getFullYear()
    let age = getCurrentYear - getBirthYear
    return age

}
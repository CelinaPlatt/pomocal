export const pomoToMinutes = (pomodoros)=>{
    if(pomodoros === 1) return `30 Minutes`
    let hours = 0
    let halfHour = 0

    let timeString = " Hour"

    while(pomodoros > 0){
        
        if(pomodoros === 1 && hours >= 2){
            timeString += "s"
            pomodoros--
        }
       

        if (pomodoros >= 2){

            hours += 1
            pomodoros -= 2
        } 

        if(pomodoros === 1 ){
            if(hours === 1){
                timeString += " 30 Minutes"
            } else if( hours > 1){

                timeString += "s 30 Minutes"
            }
            pomodoros--

        } 
      
        
    }

    if(timeString === " Hour" && hours > 1){
        timeString += "s"
    }

    return hours + timeString
}
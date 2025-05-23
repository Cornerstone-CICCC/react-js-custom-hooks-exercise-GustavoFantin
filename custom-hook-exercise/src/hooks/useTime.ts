import { useEffect, useState } from "react"

function useTime(date: string) {
   const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


   const [time, setTime] = useState<string | number>('')

   useEffect(() => {
      if (date === "day" ) {
            let weekDay = new Date().getDay()
            let day = dayNames[weekDay]
            setTime(day)      
         } else if (date === "hour") {
            let hour = new Date().getHours()
            setTime(hour)
         }
   }, [date])
      return time
   }

export default useTime
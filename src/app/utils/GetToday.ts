export const GetToday = ()=>{
    const date = new Date()
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
    let day = date.getDay()
    let month = new Date().toLocaleString("en-US", { month: "long" })
    
    return day-1 + '-' +day + ' '+month 
}
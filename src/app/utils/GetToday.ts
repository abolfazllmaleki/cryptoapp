export const GetToday = ()=>{
    const date = new Date()
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
    let day = date.getDay()+2
    let lastDay;
    if(day==1){
        lastDay=30

      }else{
        lastDay=day-1

      }
    
    let month = new Date().toLocaleString("en-US", { month: "long" })
    
    return lastDay + '-' +day + ' '+month 
}
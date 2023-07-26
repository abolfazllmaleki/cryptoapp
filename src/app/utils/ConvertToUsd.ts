export const ConvertToUsd =(x)=>{
        if(x/1000000000>1){
          return (x/1000000000).toFixed(2) + ' billion'
        }else{
          return (x/1000000).toFixed(2)+ ' million'
        }
}
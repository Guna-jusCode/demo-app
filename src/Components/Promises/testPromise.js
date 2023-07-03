let p=new Promise((res,rej)=>{
    let a=true
    if(a)
    {res("fullfilled");}
else{
    rej('rejected');
}
});
p.then(res=>console.log(res)).catch(rej=>console.log(rej));
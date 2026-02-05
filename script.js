//your JS code here. If required.
const body=document.querySelector('#output');

let arrRandomTime=[];
const min=1;
const max=3;
let maxValue=0;
for(let i=0;i<3;i++){
	let val=Math.round(Math.random()*(max-min)+min);
    maxValue=Math.max(maxValue,val)
	arrRandomTime.push(val);
}

const promise1=()=>new Promise(resolve=>setTimeout(()=>resolve(arrRandomTime[0]),arrRandomTime[0]*1000));
const promise2=()=>new Promise(resolve=>setTimeout(()=>resolve(arrRandomTime[1]),arrRandomTime[1]*1000));
const promise3=()=>new Promise(resolve=>setTimeout(()=>resolve(arrRandomTime[2]),arrRandomTime[2]*1000));

console.log(arrRandomTime)
body.innerHTML=`<tr><td colspan=2 style="text-align:center;font-weight:bold;font-size:20px">Loading....</td></tr>`;

Promise.all([promise1(),promise2(),promise3()])
.then((data)=>{
    body.innerHTML='';
    data.forEach((item,i)=>{
         body.innerHTML+=`<tr>
            <td>Promise ${i}</td>
            <td>${item}</td>
    </tr>`
    })
   body.innerHTML+=`<tr>
            <td style="font-weight:bold;font-size:20px">Total</td>
            <td>${maxValue}</td>
    </tr>`
})
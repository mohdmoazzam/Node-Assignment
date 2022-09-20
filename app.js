const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
// var readline = require('readline-sync');

// let  height = readline.question("Please enter height");
var prompt = require('prompt-sync')();

let height = Number(prompt('enter height: '));

for(let i = 1; i<=height; i++)
{
   var s ="";
    for(let j=1; j<=(2 * height - 1); j++)
    { 
        if( j >= height + 1 - i && j <= height - 1 + i){
            s += "*";
        }else{

            s += " ";
        };
       
    }
    //s += "\n";
    console.log(s);
}
 
  res.send('printed please check console');
});

app.get('/check-date', (req,res)=>{
    var prompt = require('prompt-sync')();

    var dat = prompt('Enter String: ');
    dat.split(' ').forEach(d =>{
        //console.log(d);
        if(d.length === 8 && Number(d)){
            console.log('valid date: ', d);
        } 
    })
    res.send('Please check date');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
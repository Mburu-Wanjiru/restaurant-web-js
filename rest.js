//creating object
const Rest={
    title:"Jim's Restaurant",

    TakeAway:['Chipo','Andazi','Pizza','Pasta'],

    HostFood:['Ugali','Mukimo','RiceAdded',
               'Pilau','Chapati'],

               Days:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
 week:[1,2,3,4,5,6,7],
Schedule : {
    Sunday:{
        open:'0800',
        close:'2300'
    },

    Monday:{
        open: ' 0800Hrs ',
        close: ' 2300Hrs '
    },
    Tuesday:{
        open: ' 0800Hrs ',
        close:' 2300Hrs '
    },
    Wednesday:{
        open: ' 0800Hrs ',
        close: ' 2300Hrs '
    },
    Thursday:{
        open: ' 0800Hrs ',
        close:' 2300Hrs '
    },
    Friday:{
        open: ' 0800Hrs ',
        close: ' 2300Hrs '
    },
   Saturday:{
        open: ' 0800Hrs ',
        close: ' 2300Hrs '
    },
    
    
},


}



console.log(`.........................................................................`);
// 1; display the menu
console.log(`.........................................................................`);


//console.log(`The menu array`);
const MenuArray=[...Rest.TakeAway,...Rest.HostFood];
//console.log(MenuArray);

console.log('.............................................');

// loop the array to display it verticaly
//console.log(`menu without numbering system`);
for(const Menu of MenuArray){
    //console.log(Menu);//displays menu only
  }
  

  console.log('...........................................');

  console.log(`${Rest.title}'s Menu `)
for(const DisplayMenu of MenuArray.entries()){
    
    //console.log(DisplayMenu);
    //console.log(`${DisplayMenu[0]+1}: ${DisplayMenu[1]}.`);
}


console.log('.............................................');

//destructuring
console.log(`${Rest.title}'s Menu `)
for(const [takeaway,mainfood] of MenuArray.entries()){
    console.log(`${takeaway+1}: ${mainfood}.`)
}
console.log(`.........................................................................`)

console.log(`.........................................................................`)

// 2;display the status of jim's restaurant each day

//closed,open,day


const ScheduleArray=Object.entries(Rest.Schedule);
//console.log(ScheduleArray);

/*for(const DisplaySchedule of ScheduleArray){
    console.log(DisplaySchedule); 
}*/

 const [a,b,c,d,e,f,g]=Object.keys(Rest.Days)
 //console.log(...index);
  
console.log(`Jim's Restaurant Schedule`);
for(const [day,{open,close}] of ScheduleArray){
    //console.log(day,open,close);
   

        console.log(` ${day}: open:${open}
        close:${close }`)

    }


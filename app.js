let a =0;
let movie = ["Breaking Bad","Game Of Thrones","Vikings","Teen Wolf","Death Note","Blue Bloods","Under the Dome","Bad Judge"];
let runttime =[10000,9500,5000,2200,8000,5600,7800,4500]

let output = document.getElementById("printcard");


let breaking;
let got;
let viking ;
let wolf;
let deth ;
let blood
let  under;
let Bad;

let paragrph1;
let paragrph2;
let paragrph3;
let paragrph4;


const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels:  [movie[0],movie[1],movie[2],movie[3],movie[4],movie[5],movie[6],movie[7]],
    datasets: [{
      label: 'Pepols mostly watched',
      data: [1000000,900000,750000,570000,800000,633000,750000,350000],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



let out = document.getElementById("print")

fetch("https://api.tvmaze.com/shows")
.then(res => res.json())
.then (data => {

    console.log(data);
    
    

    data.forEach(element => {
        let movie = ["Breaking Bad","Game Of Thrones","Vikings","Teen Wolf","Death Note","Blue Bloods","Under the Dome","Bad Judge"];

      
    if (element.name == "Under the Dome"){
            let p1 = element.image.medium;
             paragrph1 = element.summary
          
            
            output.innerHTML +=`
          
         <tr><td> <img onclick="send1()" class="rounded-3 m-1 p-1" src="${p1}" width="250" hight="200" alt=""></td>
         
        `
    
    }if (element.name == "Vikings"){
            let p1 = element.image.medium;
            paragrph2 = element.summary
            output.innerHTML +=`
         <tr><td> <img onclick="send2()" class="rounded-3 m-1 p-1" src="${p1}" width="250" hight="200" alt=""></td>
        `
    }if (element.name == "Game of Thrones"){
            let p1 = element.image.medium;
            paragrph3 = element.summary
            output.innerHTML +=`
         <tr><td> <img onclick="send3()" class="rounded-3 m-1 p-1" src="${p1}" width="250" hight="200" alt=""></td>
        `
    }if (element.name == "Breaking Bad"){
            let p1 = element.image.medium;
            paragrph4 = element.summary
            output.innerHTML +=`
         <tr><td> <img onclick="send4()" class="rounded-3 m-1 p-1" src="${p1}" width="250" hight="200" alt=""></td>
        `}
        

        

            

         if (element.name == "Under the Dome"){
            under = element.rating.average;
           
         }else if (element.name == "Vikings"){
             viking = element.rating.average;
          
         }else if (element.name == "Teen Wolf"){
            wolf = element.rating.average;
         
         }else if (element.name=="Bad Judge"){
           Bad= element.rating.average;
          
         }else if (element.name == "Blue Bloods"){
           blood = element.rating.average;
          
         }else if (element.name == "Breaking Bad"){
           breaking = element.rating.average;
          
           
           
         }else if (element.name == "Game of Thrones"){
           got = element.rating.average;
           
         }else if (element.name =="Death Note"){
           deth = element.rating.average;
        
            
         }









        });
    

       
        const xValues = [movie[0],movie[1],movie[2],movie[3],movie[4],movie[5],movie[6],movie[7]];
        const yValues = [breaking,got,viking,wolf,deth,blood,under,Bad];
        
        new Chart("myChart2", {
          type: "line",
          data:  {
            labels: xValues,
            datasets: [{
              backgroundColor:"rgba(255,255,255,0.1)",
              borderColor: "rgba(0,100,200,0.4)",
              data: yValues
            }]
          },
          options:{}
        });


        const xValues3 = [movie[0],movie[1],movie[2],movie[3],movie[4],movie[5],movie[6],movie[7],];

        const yValues2 = [runttime[0],runttime[1],runttime[2],runttime[3],runttime[4],runttime[5],runttime[6],runttime[7]];
        const barColors3 = [
          "#432E54",
          "#4B4376",
          "#AE445A",
          "#22177A",
          "#605EA1",
          "#8174A0",
          "#EFB6C8",
          "#FFD2A0",
        ];
        
        new Chart("myChart3", {
          type: "pie",
          data: {
            labels: xValues3,
            datasets: [{
              backgroundColor: barColors3,
              data: yValues2
            }]
          },
          options: {
            title: {
              display: true,
              text: "World Wide Wine Production 2018"
            }
          }
        });







    });



    function send1 (){
        console.log("send");

    }
    
    function send2 (){
        console.log("send");

    }
    
    function send3 (){
        console.log("send");

    }
    
    function send4 (){
        console.log("send");

    }







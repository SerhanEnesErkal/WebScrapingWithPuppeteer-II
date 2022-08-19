const puppeteer = require('puppeteer');

(async() =>{
  
   let url='https://www.doviz.com/';
   
   let browser = await puppeteer.launch(  {
      "headless": true,
      "slowMo": 5
  });

   let page = await browser.newPage();

   await page.goto(url, {waitUntil: 'networkidle2' });
   
   let data = await page.evaluate(()=>{ 
      genel=[]


      for(value=1;value<=8;value++){
          let a= document.querySelector("body > header > div.header-secondary > div > div.market-data > div:nth-child("+value+")> a > span.value").innerText 
            genel.push([a,""])
             }
         //cursed
      return genel
   });


data[0][1] ="altın"
data[1][1]= "dolar"
data[2][1]= "euro"
data[3][1]="sterlin"
data[4][1]= "bist"
data[5][1]="btc"
data[6][1]="gümüş"
data[7][1]="faiz"


console.log(data)


  await browser.close();

})();






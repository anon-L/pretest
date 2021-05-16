const puppeteer = require('puppeteer');
const URL =` https://codequiz.azurewebsites.net/`;
var args = process.argv.slice(2);

let  spot=1
if(args == "B-INCOMESSF")
{
  spot=1
}
else if(args == "BM70SSF")
{
  spot=2
}
else if(args == "BEQSSF")
{
  spot=3
}
else if(args == "B-FUTURESSF")
{
  spot=4
}

(async () => {
  console.log(spot)
  let z= spot
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(URL);
  await page.click('[onclick]');
  await page.waitForTimeout(500)
  let data = await page.evaluate((spot) => {
    console.log(spot)
    let x = document.getElementsByTagName("tr")    
    let nav = x[spot].innerText.split("\t")[1]

    /* Returning an object filled with the scraped data */
    return {
      nav,
    }
  },spot);
  /* Outputting what we scraped */
  console.log(data);
  debugger;
  await browser.close();
})();



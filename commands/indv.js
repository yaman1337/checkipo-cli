import fetch from "node-fetch";
import inquirer from "inquirer";
import colors from "colors";

const indv = {
    async check() {

        const res = await fetch(
          "https://iporesult.cdsc.com.np/result/companyShares/fileUploaded"
        );
    
        let data = await res.json();
        data = data.body;
        const company = await inquirer.prompt([
          {
            type: "list",
            name: "company",
            message: "Select the company",
            choices: data.map((x) => `${x.id} ${x.name}`),
          },
          {
              type: "input",
              name: "boid",
              message: "Enter your boid"
          }
        ]);
    
        let id = company.company.split(" ")[0];
        let boid = company.boid;
    
        if(!id) {
            let txt = "Error: Invalid data".red
            return console.log(txt)
        }
    
        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({boid, companyShareId: id})
        }

    
        const res2 = await fetch("https://iporesult.cdsc.com.np/result/result/check", options);
        
        if(res2.status >= 400) return console.log("Error: Something went wrong.".red)

        const data2 = await res2.json();
        

        if(!res2 || !data2) return console.log("Error: Invalid boid".red)
    
        if(!data2.success) return console.log(":( Sorry, not alloted for the given boid.".red)
    
        console.log(`Success:) ${data2.message}`.green)
    
      }    
};

 
export default indv;
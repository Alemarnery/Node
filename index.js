const fs = require('fs');

fs.readdir('.', (err, filenames) => {
     //Either
     //err == and error object, which means something went wrong
     //or
     //err == null, wich means everything is OK

     if(err){
          //error handling code here
          throw new Error(err);
     }

     console.log(filenames);

}  );
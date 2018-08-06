var express = require('express');
var fs  = require('fs');
var hbs  = require('hbs');
var app = express();



hbs.registerPartials(__dirname + '/views/partials');
app.set('view ingine','hbs');
app.use(express.static(__dirname + '/public'));

app.use((req,res,next) => {
  
    var now = new Date().toISOString();
    var log = `${now}: ${req.method} ${req.url}`;

    fs.appendFile('server.log', log + '/<br>');
    next();
}); 

// app.use((req,res,next) => {
//    res.render('maintenance.hbs');

// });


hbs.registerHelper('screamit',(text) => {
   return text.toLowerCase();
});



app.get('/',(req,res) => {
      
    res.render('home.hbs',{
        pagetitle: 'Home page tile',
        desc : 'Lorem ipsum dolor sit amet, cu labores suscipit dissentias pro. No tollit ubique luptatum eam, id vis ancillae efficiendi intellegam, vel quis percipitur id. Pro in feugait accusam, no vel aliquam corpora incorrupte. Vim at nibh latine partiendo, in has bonorum complectitur. Eam ad etiam albucius voluptatum, ea ludus accusamus vix. Cu pro aliquam vocibus, sit eu diam semper atomorum, legimus corrumpit voluptatibus',
        time :  new Date().getFullYear(),
        
    });

    

       
});

app.get('/about',(req,res) => {
      res.render('about.hbs',{
          pagetitle : 'About us page title',
          desc : 'Lorem ipsum dolor sit amet, cu labores suscipit dissentias pro. No tollit ubique luptatum eam, id vis ancillae efficiendi intellegam, vel quis percipitur id. Pro in feugait accusam, no vel aliquam corpora incorrupte. Vim at nibh latine partiendo, in has bonorum complectitur. Eam ad etiam albucius voluptatum, ea ludus accusamus vix. Cu pro aliquam vocibus, sit eu diam semper atomorum, legimus corrumpit voluptatibus',
          time :  new Date().getFullYear(),
      });
});

//for send back json error message

app.get('/bad',(req,res) => {
    res.send({
        errormesage : 'unbale to handle message',
    });
});

 
app.listen(8000);
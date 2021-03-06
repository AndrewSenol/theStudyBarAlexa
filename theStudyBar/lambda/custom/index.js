var Alexa = require('alexa-sdk');
var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const APP_ID = 'amzn1.ask.skill.0c5c1a8b-7993-4c2b-bf87-53dbcdb34fb1';


exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.appId = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

//comment 

var handlers = {
  'LaunchRequest': function () {
    this.emit('welcome');
  },
  'welcome': function() {
    this.emit(':ask', 'Welcome  to the Study Bar. Would you like to hear about student services, business services, '+
    'amenities, or general info?');
  },
  'genInfo': function() {
    this.emit(':ask', 'The study bar is an interactive space focused on engaging bright learners through '+
    'real-world experiences, and the academic study needed to reach their potential. Our one-of-a-kind '+
    'approach helps our members better thrive and flourish in their home, work, and school environments. '+
    'To learn more, say student services, business services, or amenities');
  },
  'services' : function() {
    this.emit(':ask', 'Do you want to learn about student services or business services?' , 'Say: student services '+
    'or business services');
  },


  // STUDENT SERVICES
  'studentServices': function(){
    this.emit(':ask', 'There are many student services offered at the study bar. Pick from the following four options '+
    'to learn more. Peer guided study, tutoring, learn to code, and internships');
  },
  'peerGuidedStudy': function(){
    this.emit(':ask', 'For many students, studying in an isolate environment can lead to low motivation and a high '+
    'chance of distraction. At the study bar, peer guided study aims to make learning more approachable and enjoyable. '+
    'The space offers a diverse group of peers and support staff working on individual assignments. If any one student '+
    'gets confused by a homework problem, hits a writer\'s block, or struggles to stay motivated, the group can '+
    'collectively pitch in to help the student in need. To return to the beginning, say: start over.');
   },
  'tutoring': function(){
    this.emit(':ask', 'Tutoring at the study bar has been engineered to take the pain out of learning. Our '+
    'tutors provide a personal learning relationship through a one-on-one tutoring model as opposed to our peer '+
    'guided study, which allows students to work together toward a common problem. Tutoring services are available '+
    'through our Study Bar Membership. To return to the beginning, say: start over.');
  },
  'learnToCode': function(){
    this.emit(':ask', 'At the study bar\'s learn to code experience, students of any age participate in interactive '+
    'coding and computer aided design sessions. They can learn the basics of computer programming and enhance their '+
    'problem solving skills, all at their own pace. In addition to the technical exposure, students learn soft skills '+
    'such as collaboration, communication, and compromise. To schedule a complimentary learn to code session, please '+
    'visit us at thestudybar.com. To return to the beginning, say: start over.');
  },
  'internships': function(){
    this.emit(':ask', 'The Study Bar provides opportunities for all those interested in gaining real world '+
    'software development and teamwork experiences in a low-stress, collaborative environment. To request an intern '+
    'application, please email us at info@thestudybar.com. To return to the beginning, say: start over.');
  },

  // BUSINESS SERVICES
  'businessServices': function(){
    this.emit(':ask', 'There are many business services offered at the study bar. Pick from the following four options '+
    'to learn more. Reserving a space, facilitation, workshops, or software development');
  },
  'reserveSpace': function(){
    this.emit(':ask', 'Outside of our normal hours of operation, the study bar is available to reserve for private use. '+
    'Take advantage of our collaborative and functional space to host a meeting for software development, business '+
    'development, or any other technology planning needs. Please limit your group to 20 people or less. Contact us with '+
    'your desired date and time frame at reservation@thestudybar.com. To return to the beginning, say: start over.');
  },
  'facilitation': function(){
    this.emit(':ask', 'The study bar will be bringing in expert facilitators to teach skills, lead activities, and promote '+
    'problem solving skills in specialized workshops. For more information please visit our website, www.thestudybar.com. '+
    'To reserve the study bar for your facilitation workshop or other events, please email us at reservation@thestudybar.com. '+
    'To return to the beginning, say: start over.');
  },
  'workshops': function(){
    this.emit(':ask', 'The study bar will be hosting upcoming workshops on a variety of topics including, agile software '+
    'development, kanban methodology, and many more. For more information please visit our website, www.thestudybar.com. '+
    'To reserve the study bar for your workshop or other events, please email us at reservation@thestudybar.com. '+
    'To return to the beginning, say: start over.');
  },
  'softwareDevelopment': function(){
    this.emit(':ask', 'With a cross-functional team of interns and mentors, The Study Bar develops software based on the '+
    'Agile Process. For more information please visit our website, www.thestudybar.com. To return to the beginning, say: start over.');
  },

  // AMENITIES
  'amenities': function(){
    this.emit(':ask', 'The Study Bar provides many amenities. In addition to the stress-free and convenient location, '+
    'the study bar offers collaborative learning, recommended tutors, peer guided study, quiet work spaces, '+
    'standing and seated work stations, a study lounge, chromebooks and ipads, a 3D printer, free wifi, and a free snack '+
    'and beverage bar');
  },

  // GENERAL
  'Unhandled': function () {
    this.emit(':ask',"Sorry, I didn't get that. Try saying: 'general information', 'student services', 'business services', or 'amenities'");
  },
  'AMAZON.HelpIntent': function () {
    this.emit(':ask','What can I help you with?', 'How can I help?');
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell','Okay!');
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell','Goodbye!');
  },
  'AMAZON.StartOverIntent': function(){
    this.emit('welcome');
  }
};

  // // USERS
  // 'userManagement': function(){
  //   this.emit(':ask', 'Are you a returning user or would you like to create a new user?')
  // },
  // 'returningUser': function() {
  //   var firstName = this.attributes['FirstName'];
  //   var lastName = this.attributes['LastName'];

  //   if (firstName != undefined && lastName != undefined){
  //     this.emit(':tell', `Welcome back ${firstName} ${lastName}`);
  //   } else{
  //     this.emit(':ask', `Sorry I don\'t remember you. Tell me your name by saying, my name is: and then your first and last name`);
  //   }
  //   //this.emit(':ask', 'Welcome back! To sign in, please say: sign in, and then your first and last name');
  // },
  // 'signIn': function() {
  //   var table = 'StudyBarUsers';
    
  //   var firstNameSlot = this.event.request.intent.slots.firstName.value;
  //   var lastNameSlot = this.event.request.intent.slots.lastName.value;
    
  //   var firstName;
  //   var lastName;
    
  //   if (firstNameSlot && lastNameSlot) {
  //     firstName = firstNameSlot;
  //     lastName = lastNameSlot;
  //   } else {
  //     this.emit('ask', 'Sorry, I didn\'t quite get that. Please say: my name is, and then state your first and last name');
  //   }
    
  //   if (firstName && lastName) {
  //     this.attributes['FirstName'] = firstName;
  //     this.attributes['LastName'] = lastName;
  //     this.attributes['userId'] = firstName + lastName;
  //     this.emit(':ask', `Welcome back ${firstName} ${lastName}. Would you like to learn more about student services, `+
  //     `business services, amenities, or general information? To restart, say: start over`);
  //   } else{
  //     this.emit(':ask', `Sorry I didn\'t quite get that. Tell me your name by saying, my name is: and then your first and last name`);
  //   }

  //   var params = {
  //     TableName: table,
  //     Item: {
  //       "FirstName": {
  //         S: firstName
  //       },
  //       "LastName": {
  //         S: lastName
  //       },
  //       "userId": {
  //         S: firstName + lastName
  //       }
  //     }
  //   };

  //   console.log(params);
    
  //  dynamo.putItem(params, function(err, data){
  //     if (err){
  //       console.error("Error", err);
  //     } else{
  //       console.log("Success", data.Item);
  //     }
  //   });
  // },
  // 'createUser': function() {
  //   this.emit(':ask', 'To create a user, please say: my name is, and then state your first and last name');
  // },
  // 'myNameIs': function() {
  //   var table = 'StudyBarUsers';
    
  //   var firstNameSlot = this.event.request.intent.slots.firstName.value;
  //   var lastNameSlot = this.event.request.intent.slots.lastName.value;
    
  //   var firstName;
  //   var lastName;
    
  //   if (firstNameSlot && lastNameSlot) {
  //     firstName = firstNameSlot;
  //     lastName = lastNameSlot;
  //   } else {
  //     this.emit('ask', 'Sorry, I didn\'t quite get that. Please say: my name is, and then state your first and last name');
  //   }
    
  //   if (firstName && lastName) {
  //     this.attributes['FirstName'] = firstName;
  //     this.attributes['LastName'] = lastName;
  //     this.attributes['userId'] = firstName + lastName;
  //     this.emit(':ask', `Hello ${firstName} ${lastName}. Would you like to learn more about student services, `+
  //     `business services, amenities, or general information? To restart, say: start over`);
  //   } else{
  //     this.emit(':ask', `Sorry I didn\'t quite get that. Tell me your name by saying, my name is: and then your first and last name`);
  //   }

  //   var params = {
  //     TableName: table,
  //     Item: {
  //       "FirstName": {
  //         S: firstName
  //       },
  //       "LastName": {
  //         S: lastName
  //       },
  //       "userId": {
  //         S: firstName + lastName
  //       }
  //     }
  //   };

  //   console.log(params);
    
  //  dynamo.putItem(params, function(err, data) { 
  //     if (err) {
  //       console.error("Error", err);
  //     } else {
  //       console.log("Success", data.Item);
  //     }
  //   });
  // },
  // 'checkIn': function() {
  //   var table = 'TimeSheet';
    
  //   var firstNameSlot = this.event.request.intent.slots.firstName.value;
  //   var lastNameSlot = this.event.request.intent.slots.lastName.value;
    
  //   var firstName;
  //   var lastName;
    
  //   if (firstNameSlot && lastNameSlot){
  //     firstName = firstNameSlot;
  //     lastName = lastNameSlot;
  //   }
    
  //   if (firstName && lastName){
  //     this.attributes['FirstName'] = firstName;
  //     this.attributes['LastName'] = lastName;
  //     this.attributes['userId'] = firstName + lastName;
  //     this.emit(':ask', `Nice to meet you ${firstName} ${lastName}. Would you like to learn more about student services, `+
  //     `business services, amenities, or general information? To restart, say: start over`);
  //   } else{
  //     this.emit(':ask', `Sorry I didn\'t quite get that. Tell me your name by saying, my name is: and then your name`);
  //   }

  //   var params = {
  //     TableName: table,
  //     Item: {
  //       "FirstName": {
  //         S: firstName
  //       },
  //       "LastName": {
  //         S: lastName
  //       },
  //       "userId": {
  //         S: firstName + lastName
  //       }
  //     }
  //   };

  //   console.log(params);
    
  //  dynamo.putItem(params, function(err, data){
  //     if (err){
  //       console.error("Error", err);
  //     } else{
  //       console.log("Success", data.Item);
  //     }
  //   });
  // },


// var FirstNameOne = Alexa.CreateStateHandler("_NAME1", {
//   'firstNameOne': function() {
//     var firstNameSlot = this.event.request.intent.slots.firstName.value;
//     this.attibutes['FirstName'] = firstNameSlot;
//     this.handler.state = "_NAME2";
//     this.emit(':ask', 'What is your last name?');
//   }
// });
// var LastNameOne = Alexa.CreateStateHandler("_NAME2", {
//   'lastNameOne': function() {
//     var lastNameSlot = this.event.request.intent.slots.lastName.value;
//     this.attributes['LastName'] = lastNameSlot;
//     this.emit(':ask', `nice to see you again ${firstNameSlot} ${lastNameSlot}`);
//   }
// });





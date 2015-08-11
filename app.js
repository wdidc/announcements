var slack = require("./slack")
var express = require("express")
var app = express()
app.set("view engine", "hbs")
var env = require("./env")
var _ = require("underscore")
var client = slack(env.token)


app.get("/", function(req,res){
  client.groups.history(function(history){
    var msgs = _.filter(history.messages, function(message){
      return message.text.match(/\<\!group\>/)
    })
    res.render("index",{messages: msgs})
  },{
    channel: env.group,
    count: 1000
  })
})

app.listen(2099, function(){
  console.log("listening on 2099")
})
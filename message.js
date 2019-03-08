var APP_ID = '3fqJH3leBFADReBAIxsADmmQ-gzGzoHsz';
var APP_KEY = 'rmHX617zoDiGaFG4qixItRWj';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


var query = new AV.Query('whatmessage');
query.find()
  .then(
    function (messages) {
      let array = messages.map((item) => item.attributes)
      array.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = `${item.name}:${item.say}`
        let messagelist = document.querySelector('#messagelist')
        messagelist.appendChild(li)
      })
    }, function (error) {
      alert('哎呀，提交失败，再来一次！')
    });


let myform = document.querySelector('.messageform')

myform.addEventListener('submit', function (e) {
  e.preventDefault()
  let yourname = myform.querySelector('input[name=yourname]').value
  if(yourname.length===0)return false
  let content = myform.querySelector('input[name=content]').value
  if(content.length===0)return false
  var leaveMessage = AV.Object.extend('whatmessage');
  var message = new leaveMessage();
  message.save({
    'name': yourname,
    'say': content
  }).then(function (object) {
    alert('留言成功')
    let li = document.createElement('li')
    li.innerText = `${object.attributes.name}:${object.attributes.say}`
    let messagelist = document.querySelector('#messagelist')
    messagelist.appendChild(li)
    myform.querySelector('input[name=yourname]').value = ''
    myform.querySelector('input[name=content]').value = ''
  })
});





// human 这个对象本身具有属性 name 和 city
// human.__proto__ 对应的对象（也就是原型）具有物种（species）、走（walk）和使用工具（useTools）这几个属性
// human.__proto__.constructor === Human 为 true


// function Human(name,city){
// this.name = name;
// this.city = city;
// } 

// Human.prototype.species = function(){}
// Human.prototype.walk = function(){}
// Human.prototype.useTools = function(){}

// Human.prototype ={
//   constructor :Human
// }


// var human = new Human({name:'Frank', city: 'Hangzhou'})
// var human2 = new Human({name:'Jack', city: 'Hangzhou'})


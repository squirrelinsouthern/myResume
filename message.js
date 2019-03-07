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
  let content = myform.querySelector('input[name=content]').value
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
    querySelector('input[name=yourname]').value = ''
    myform.querySelector('input[name=content]').value = ''
  })
});

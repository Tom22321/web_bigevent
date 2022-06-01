

$(function(){
  //  点击去注册账号的链接
  $('#link_reg').on('click',function(){
  $('.login-box').hide()
  $('.reg-box').show()
  })

  // 点击去登录的链接
  $('#link_login').on('click',function(){
      
      $('.login-box').show()
      $('.reg-box').hide()
  })

  // 从 layui 中获取 form 对象
var form = layui.form
var layer = layui.layer

form.verify({
  // 自定义了一个叫做 pwd 校验规则
  pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
  // 校验两次密码是否一致的规则
      repwd:function(value){
        var password =  $('.reg-box [name=password]').val()
        if(value!=password) return "请输入相同的密码"
      }
})





//   监听表单提交事件（注册）
$('#form_reg').on('submit',function(e){
  //   阻止表单默认事件
  e.preventDefault();
  
  //  发起请求

 $.post('/api/reguser',{
   username:$('#form_reg [name=username]').val(),password:$('#form_reg [name=password]').val()
 },function(res){
    if(res.status!=0){
      return layer.msg(res.message);
    }

    layer.msg('注册成功，请登录');

    //  模拟点击行为
    $('#link_login').click()
 })


})



//   监听表单验证事件（登录）

$('#form_login').on('submit',function(e){
  //  阻止表单默认提交

  e.preventDefault()

  //  发起请求
const data = $(this).serialize()
  $.post('/api/login',data,function(res){
        if(res.status!=0) return layer.msg(res.message)
        layer.msg(res.message)

        //  将登录成功都得到的 token 字符串 ，保存到localStorage中
        localStorage.setItem('token',res.token)
        //  跳转到后台主页
        location.href = './index.html'
  })
})


  
})
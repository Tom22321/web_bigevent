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
  

    
})
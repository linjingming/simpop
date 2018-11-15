# simpop 简单的手机弹窗插件
>告别手机上那个坑爹的alert
>原生js编写,无需依赖任何库只要加载simpop.min.js即可

### demo页面
* [demo](http://linjingming.coding.me/simpop//)

### 简单的提示信息

```
    Simpop({
        width:300,//可以传宽度，必须number类型哦
        content: 'hello simpop',
        time: 3000//3秒后自动关闭
    }).show();
```

### 简单的alert

```
    Simpop({
        title: '提示',
        content: 'hello simpop'
    }).show();
```

### 简单的confirm

```
    Simpop({
        title: '提示',
        content: 'hello simpop',
        ok: function(){
            Simpop({
                content: '您点击了确定',
                time: 1000
            }).show();
        },
        cancel: function(){
            Simpop({
                content: '您点击了取消',
                time: 1000
            }).show();
        }
    }).show();
    
    //自定义文字
    Simpop({
        title: '提示',
        content: 'hello simpop',
        ok: {
            value: '正确',
            callback: function(){
                Simpop({
                    content: '您点击了正确',
                    time: 1000
                }).show();
            }
        },
        cancel: {
            value: '错误',
            callback: function(){
                Simpop({
                    content: '您点击了错误',
                    time: 1000
                }).show();
            }
        }
    }).show();
```

### 直接传入html可自定义弹窗

```
    Simpop({
        type: '1',
        content: '<div style="width: 300px;height: 100px;background: #fff">自定义html<button style="width: 110px;height: 30px;border: 1px solid #Ccc">按钮点击关闭</button></div>'
    }).show(function(){
        var self = this;
        //this.pop获取弹窗
        var btn = this.pop.querySelector('button');//获取你想要的按钮
        //做你想要做的事
        btn.onclick = function(){
            self.close();//关闭就是如此简单
        }
    });
```

### 显示loading

```
    Simpop({
        id: 'load',//自定义弹窗id
        mask: false,//不显示遮罩层
        content:'加载中.....'
    }).showLoading();
```

### 隐藏loading

```
    Simpop.list['load'] && Simpop.list['load'].close();//这个load就是上面自定义的，关闭它就是如此简单
```

# 如果你有什么好的建议，给我留言  有bug及时反馈啊

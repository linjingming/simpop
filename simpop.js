/**
 * 作者：jimlin
 * 版本：1.0
 * place: 福州
 * date: 2014/9/11
 */
;!function(win){
    var w = win,d = w.document,iIdIndex = 0;
    var sCss = '';
    sCss += '.sim-pop-box{position: absolute; left: 0; top: 0; width: 100%; z-index: 99999999;color: #000;font-size: 12px;font-family: Helvetica, STHeiti, Droid Sans Fallback;}';
    sCss += '.sim-pop-box button{background: none;border: none;outline: none;cursor: pointer;-webkit-appearance: none;}';
    sCss += '.sim-pop-box *{margin: 0; padding: 0}';
    sCss += '.sim-pop-mask,.sim-pop-dis{position: fixed;top:0;right: 0;bottom: 0;left: 0; }';
    sCss += '.sim-pop-mask{background-color: rgba(0,0,0,0.3);pointer-events:auto;}';
    sCss += '.sim-pop-dis,.sim-pop-ft{display: -webkit-box;display: -ms-flexbox;display: -webkit-flex;display: flex;}';
    sCss += '.sim-pop-dis{-webkit-box-pack: center;box-pack: center;-webkit-box-align: center;box-align: center;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center; pointer-events: none;}';
    sCss += '.sim-pop-win{pointer-events: auto;}'
    sCss += '.sim-pop-com,.sim-pop-loading{min-width: 200px;max-width: 300px;background-color: #fff;border: 1px solid #999;border-radius: 5px;box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); }';
    sCss += '.sim-pop-hd{height: 50px;line-height: 50px;padding: 0 40px 0 10px;border-bottom: 1px solid #eee;position: relative}';
    sCss += '.sim-pop-hd h2{font-size: 14px;font-weight: normal;}';
    sCss += '.sim-pop-close{width: 40px;height: 50px;line-height: 50px;text-align: center;font-size: 26px;position: absolute;right: 0;top: 0;color: rgba(0,0,0,0.5);}';
    sCss += '.sim-pop-close:focus,.sim-pop-close:hover,.sim-pop-close:active{color: rgba(0,0,0,0.4)}';
    sCss += '.sim-pop-bd{padding: 20px;line-height: 20px;word-break: break-all}';
    sCss += '.sim-pop-ft{border-top:1px solid #eeeeee}';
    sCss += '.sim-pop-btn{-webkit-box-flex: 1; -ms-flex: 1;-webkit-flex: 1;flex: 1;height: 40px;line-height: 40px;font-size: 14px;display: block}';
    sCss += '.sim-pop-btn:not(:first-child){border-left: 1px solid #eee}';
    sCss += '.sim-pop-loading{padding:20px 50px;box-sizing: border-box;border: none; background:#fff url(data:image/gif;base64,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) no-repeat 20px center;}';
    sCss += '.sim-pop-win{opacity: 0;-webkit-transform: scale(0.5);transform: scale(0.5);-webkit-transition: all .18s;transition: all .18s;}';
    sCss += '.sim-pop-in{opacity: 1;-webkit-transform:scale(1);transform:scale(1);}';
    //写入css
    var css = (function(){
        var style=d.createElement("style");
        var heads = d.getElementsByTagName("head");
        if(style.styleSheet){// IE
            style.styleSheet.cssText = sCss;
        } else {// w3c
            var cssText = d.createTextNode(sCss);
            style.appendChild(cssText);
        }
        heads[0].appendChild(style);
    })();
    //合并对象
    var extend = function(){
        for(var i = 0; i < arguments.length; i++){
            if(typeof arguments[i] !== 'object') return;
            if(i>0){
                for(var key in arguments[i]){
                    arguments[0][key] = arguments[i][key];
                }
            }
        }
        return arguments[0];
    };
    //判断类型
    var type = function(obj){
        return Object.prototype.toString.call(obj).replace(/\[object\s(\w+)\]/g,function($1){
            return arguments[1].toLocaleLowerCase()
        })
    }
    //默认
    var config = {
        type: 0,//默认为0，为1的时候传人页面的html
        mask: true,
        maskclose: true,
        content: '',
        btn: {'ok': '确定','cancel': '取消'}
    }
    //构造函数
    var Simpop = function(options){
        return new init(options)
    };
    //辅助构造函数
    var init = function(options){
        this.opt = extend({},config,options);
        this.ok = this.button('ok');
        this.cancel = this.button('cancel');
        this.width = this.opt.width;
        this.time = this.opt.time;
        this.id = this.opt.id || ('sim-pop-box'+ iIdIndex);
        this.init();
    };
    //弹窗列表
    Simpop.list = {};
    //原型
    Simpop.prototype = {
        constructor: Simpop,
        //处理按钮
        button: function(key){
            var pram = this.opt[key];
            var res = {};
            if(type(pram) == 'object'){
                if(pram.value){
                    res.value = pram.value
                }else{
                    res.value = this.opt.btn[key];
                }
                if(pram.callback){
                    res.callback = pram.callback;
                }
            }else if(type(pram) == 'function'){
                res.callback = pram;
                res.value = this.opt.btn[key];
            }
            return res;
        },
        general: function(con){
            var temp = '';
            var style = type(this.width) == 'number' ? ('style="width:'+ this.width +'px;max-width:'+ this.width +'px;"') : '';
            temp += this.opt.mask ? '<div class="sim-pop-mask"></div>' : '';
            temp += '<div class="sim-pop-dis">';
            if(this.opt.type == 1){
                temp += '<section class="sim-pop-win"'+ style +'>';
                temp +=     this.opt.content;
            }else{
                temp += '<section class="sim-pop-win sim-pop-com"'+ style +'>';
                temp +=     con;
            }
            temp +=     '</section>';
            temp += '</div>';
            return temp;
        },
        mainCon: function(){
            var temp = '';
            //title
            if(this.opt.title){
                temp += '<div class="sim-pop-hd">';
                temp +=     '<h2>'+ this.opt.title +'</h2>';
                temp +=     '<button class="sim-pop-close">&#215;</button>';
                temp += '</div>';
            }
            //content
            temp += '<div class="sim-pop-bd">'+ this.opt.content +'</div>';
            //btn
            if(this.cancel.value || this.ok.value){
                temp += '<div class="sim-pop-ft">';
                if(this.cancel.value) {
                    temp += '<button class="sim-pop-btn btn-cancel">' + this.cancel.value + '</button>';
                }
                if(this.ok.value) {
                    temp += '<button class="sim-pop-btn btn-sure">' + this.ok.value + '</button>';
                }
                temp += '</div>';
            }
            return temp;
        },
        init: function(){
            this.pop = d.createElement('div');
            this.pop.className = 'sim-pop-box';
            this.pop.id = this.id;
            iIdIndex ++;
        },
        show: function(callback){
            var html = this.general(this.mainCon());
            this.pop.innerHTML = html;
            this.done(callback)
        },
        showLoading: function(callback){
            var temp = '<div class="sim-pop-loading">'+ this.opt.content +'</div>';
            var html = this.general(temp);
            this.pop.innerHTML = html;
            this.done(callback);
        },
        done: function(callback){
            var self = this;
            if(!Simpop.list[self.id]){
                Simpop.list[self.id] = self;
                d.body.appendChild(this.pop);
                setTimeout(function(){
                    self.pop.querySelector('.sim-pop-win') && self.pop.querySelector('.sim-pop-win').classList.add('sim-pop-in');
                },1)
                callback && callback.call(this);
                this.handler();
            }
        },
        handler: function(){
            var self = this;
            var ele = self.pop;
            //自动关闭
            if(self.time){
                setTimeout(function(){
                    self.close();
                },self.time)
            }
            //关闭按钮
            if(self.opt.title){
                ele.querySelector('.sim-pop-close') && ele.querySelector('.sim-pop-close').addEventListener('click',function(){
                    self.close();
                    return false;
                },false)
            }
            //遮罩关闭
            if(self.opt.maskclose){
                ele.querySelector('.sim-pop-mask') && ele.querySelector('.sim-pop-mask').addEventListener('click',function(){
                    self.close();
                    return false;
                },false)
            }
            //取消
            if(self.cancel.callback){
                ele.querySelector('.btn-cancel') && ele.querySelector('.btn-cancel').addEventListener('click',function(){
                    self.close();
                    self.cancel.callback.call(self);
                    return false;
                },false)
            }
            //确认
            if(self.ok.callback){
                ele.querySelector('.btn-sure') && ele.querySelector('.btn-sure').addEventListener('click',function(){
                    self.close();
                    self.ok.callback.call(self);
                    return false;
                },false)
            };
        },
        close: function(){
            d.body.removeChild(this.pop);
            delete Simpop.list[this.id];
        }
    };
    init.prototype = Simpop.prototype;
    w.Simpop = Simpop;
}(window)
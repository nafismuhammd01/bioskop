
var Application = {
    initApplication: function () {
        $(window).load('pageinit', '#page-one', function () {
            
        })
        $(document).on('click', '#btnLogin', function () {
            
            var user = $('#username').val();
            var pass = $('#password').val();
            Application.initCekLogin(user,pass);
        })
        $(document).on('click', '#btnDaftar', function () {
            
            window.location= 'daftar.html';
        })
    },

    initCekLogin: function (user,pass) {
        $.ajax({
            url: 'https://www.pitihden.com/login.php',
            data: 'var_usn='+user+'&var_pwd='+pass, 
            type: 'post',
            dataType: 'html',
            beforeSend: function () {
                $.mobile.loading('show', {
                    text: 'Loading...',
                    textVisible: true
                });
            },
            success: function (data) {
                console.log(data)
                if(data=='ok'){
    				window.location = 'home.html';
    			}
    			else if(data=='admin'){
    			    window.location = 'admin.html'
    			}
    			else{
    				alert(data);
    			}
                                
                },
                error: function (e) {
                    console.log(e);
                },
                failed: function (e) {
                    console.log(e);
                },
                complete: function () {
                    $.mobile.loading('hide');
                }
        });
    }
};
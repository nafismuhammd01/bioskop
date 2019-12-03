var Application = {
        initApplication: function () {
            $(window).load('pageinit', '#page-one', function () {
            })
            $(document).on('click', '#btnDaftar', function () {
                var user = $('#username').val();
                var pass = $('#password').val();
                var confPass =  $('#conPassword').val();
                if (pass == confPass) {
                    Application.initDaftar(user,pass);
                }else{
                    alert("Password tidak sama")
                }
            })
        },
    
        initDaftar: function (user,pass) {
            $.ajax({
                url: 'https://www.pitihden.com/daftar.php',
                data: 'var_user='+user+'&var_pass='+pass, 
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
        				window.location = 'index.html';
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
    
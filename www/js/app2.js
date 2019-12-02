var Application = {
    initApplication: function () {
        $(window).load('pageinit', '#page-one', function () {
            
        })
        $(document).on('click', '#waktu', function () {
            
            var time = $(this).data('waktu');
            Application.initPilihJam(time);
        })
    },

    initPilihJam: function (time) {
        $.ajax({
            url: 'https://www.pitihden.com/jam.php',
            data: 'var_waktu='+time, 
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
    				window.location = 'https://www.pitihden.com/snack.html';
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
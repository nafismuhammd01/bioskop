
var Application = {
    initApplication: function () {
        $(window).load('pageinit', '#page-one', function () {
            
        })
        $(document).on('click', '#btnTambah', function () {
            
            var judul = $('#judul').val();
            var pengarang = $('#pengarang').val();
            const files = document.querySelector('[type=file]').files;
            const formData = new FormData();
            Application.initTambahFilm(judul,pengarang);
        })
    },

    initTambahFilm: function (judul,pengarang) {
        $.ajax({
            url: 'https://www.pitihden.com/tambahFilm.php',
            data: 'var_judul='+judul+'&var_pengarang='+pengarang, 
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
    				window.location = 'admin.html';
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
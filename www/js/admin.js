var Application = {
        initApplication: function () {
            $(window).load('pageinit', '#page-one', function () {
                Application.initShowPes();
            })
            $(document).on('click', '#del', function () {
                var idpes = $(this).data('idpes');
                Application.initDeletePesanan(idpes);
            })
            $(document).on('click', '#btnLogOut', function () {   
                Application.initLogout();
            })
            $(document).on('click', '#btnTambah', function () {   
                window.location = 'tambahFilm.html';
            })
        },
    
        initShowPes: function () {
            $.ajax({
                url: 'https://www.pitihden.com/lihat_semua_pesanan.php',
                type: 'get',
                beforeSend: function () {
                    $.mobile.loading('show', {
                        text: 'Please wait while retrieving data...',
                        textVisible: true
                    });
                },
                success: function (dataObject) {
                    console.log(dataObject)
                    for (var i = 0;i < dataObject.length;i++){
                        var appendList = '<li><a href="" target="_self" data-idpes="'+dataObject[i].id_pesanan+'" id="del"><h2>ID : ' + dataObject[i].id_pesanan + '</h2><p>Judul : ' + dataObject[i].judul_pesanan + '</p><p>ID Snack : ' + dataObject[i].id_snack + '</p><p>Jam : ' + dataObject[i].time + '</p><p>Tanggal : ' + dataObject[i].tanggal + '</p></a></li>'
                        $('#list-pes').append(appendList);
                    }
                    $('#list-pes').listview('refresh');
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
        },
        initDeletePesanan: function (idpes) {
            $.ajax({
                url: 'https://www.pitihden.com/delete_pesanan_admin.php',
                data: 'var_idpes='+idpes, 
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
        },
        initLogout: function () {
            $.ajax({
                url: 'https://www.pitihden.com/logout.php',
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
    
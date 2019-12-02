var Application = {
        initApplication: function () {
            $(window).load('pageinit', '#page-one', function () {
                Application.initShowSnack();
            })
            $(document).on('click', '#pilih-snack', function () {
                var ids = $(this).data('idsnack');
                var hrgs = $(this).data('hrgsnack');
                Application.initPesanSnack(ids,hrgs);
            })
        },
    
        initShowSnack: function () {
            $.ajax({
                url: 'https://www.pitihden.com/lihat_snack.php',
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
                        var appendList = '<li><a href="" target="_self" data-idsnack="' + dataObject[i].id_snack + '"  data-hrgsnack="' + dataObject[i].harga_snack + '" id="pilih-snack"><img src="https://www.pitihden.com/img/snack.jpg"style="height:75px; weight:30px; margin: 15px; border-radius: 8px;"><h2>' + dataObject[i].nama_snack + '</h2><p>' + dataObject[i].ket_snack + '</p><p> Rp ' + dataObject[i].harga_snack + ',00</p></a></li>'
                        $('#list-snack').append(appendList);
                    }
                    $('#list-snack').listview('refresh');
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
        initPesanSnack: function (ids,hrgs) {
            $.ajax({
                url: 'https://www.pitihden.com/pesanSnack.php',
                data: 'var_ids='+ids+'&var_hrgs='+hrgs, 
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
        				window.location = 'kursi.html';
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
    
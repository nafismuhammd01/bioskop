var Application = {
        initApplication: function () {
            $(window).load('pageinit', '#page-one', function () {
                Application.initShowPesanan();
            })
            $(document).on('click', '#del', function () {
                Application.initDelPesan();
            })
            $(document).on('click', '#back', function () {
                window.location = 'https://www.pitihden.com/home.html';
            })
        },
    
        initShowPesanan: function () {
            $.ajax({
                url: 'https://www.pitihden.com/lihat_pesanan.php',
                type: 'get',
                beforeSend: function () {
                    $.mobile.loading('show', {
                        text: 'Please wait while retrieving data...',
                        textVisible: true
                    });
                },
                success: function (dataObject) {
                    console.log(dataObject)
                    document.getElementById("judul").innerHTML = dataObject[0].judul_pesanan
                    document.getElementById("pengarang").innerHTML = dataObject[0].pengarang_pesanan
                    document.getElementById("tanggal").innerHTML += dataObject[0].tanggal
                    document.getElementById("time").innerHTML += dataObject[0].time
                    document.getElementById("seat").innerHTML += dataObject[0].seat
                    document.getElementById("id").innerHTML += dataObject[0].id_pesanan
                    document.getElementById("price").innerHTML += dataObject[0].price
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
        initDelPesan: function () {
            $.ajax({
                url: 'https://www.pitihden.com/del_pesanan.php',
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
        				window.location = 'https://www.pitihden.com/home.html';
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
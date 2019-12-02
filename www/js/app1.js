var Application = {
        initApplication: function () {
            $(window).load('pageinit', '#page-one', function () {
                Application.initShowFilm();
            })
            $(document).on('click', '#pilih-film', function () {
                var judul = $(this).data('jdl');
                var peng = $(this).data('pngr');
                var tanggal ;
                if (document.getElementById('25sept').checked) {
                  tanggal = document.getElementById('25sept').value;
                }
                if (document.getElementById('26sept').checked) {
                  tanggal = document.getElementById('26sept').value;
                }
                if (document.getElementById('27sept').checked) {
                  tanggal = document.getElementById('27sept').value;
                }
                
                Application.initPesanFilm(judul,peng,tanggal);
            })
        },
    
        initShowFilm: function () {
            $.ajax({
                url: 'https://www.pitihden.com/web_service.php',
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
                        var appendList = '<li><a href="" target="_self" data-jdl="'+dataObject[i].judul_film+'" data-pngr="'+dataObject[i].pengarang_film+'" id="pilih-film"><img src="https://www.pitihden.com/img/foto'+(i+1)+'.jpg"style="height:75px; weight:30px; margin: 15px; border-radius: 8px;"><h2>' + dataObject[i].judul_film + '</h2><p>' + dataObject[i].pengarang_film + '</p></a></li>'
                        $('#list-film').append(appendList);
                    }
                    $('#list-film').listview('refresh');
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
        initPesanFilm: function (judul,peng,tanggal) {
            $.ajax({
                url: 'pesanFilm.php',
                data: 'var_jdl='+judul+'&var_peng='+peng+'&var_tgl='+tanggal, 
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
        				window.location = 'pilihjam.html';
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
    
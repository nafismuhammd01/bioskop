var dataObject = { "nim": "125060400111044", "nama": "Isyana Sarasvati", "jurusan": "Teknik Informatika", "fakultas": "FILKOM", "alamat": "Jl. Suka Nyanyi", "noHP": "081234567890" };

var Application = {
    initApplication: function () {
        $(window).load('pageinit', '#page-one', function () {
            Application.initShowMhs();
        })
        $(document).on('click', '#detail-mhs', function () {
            var nim = $(this).data('nimmhs');
            Application.initShowDetailMhs(nim);
        })
    },

    initShowMhs : function(){
        var appendList = '<li><a href="#page-two?id='+dataObject.nim+
        '" target="_self" id="detail-mhs" data-nimmhs="'+dataObject.nim+'"><h2>'+dataObject.nama+
        '</h2><p>'+dataObject.nim+'</p><p><b>'+dataObject.fakultas+'</b></p></a></li>;'
        $('#list-mhs').append(appendList);
    },

    initShowDetailMhs : function(nim){
        var appendDetail="";
        var tbdy = $("#table-detailMhs tbody");
        if(dataObject.nim == nim && tbdy.children().length == 0){
            appendDetail = '<tr><td>'+dataObject.nim+'</td><td>'+dataObject.nama+
            '</td><td>'+dataObject.jurusan+'</td><td>'+dataObject.fakultas+'</td><td>'
            +dataObject.alamat+'</td><td>'+dataObject.noHP+'</td></tr>';
        };
        $('#table-detailMhs').append(appendDetail);
    }
};
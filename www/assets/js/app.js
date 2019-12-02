var data = 0;

var Application = {
    initApplication: function() {
        $(window).load("pageinit", "#page-one", function() {
            Application.initShowMhs();
        });
        $(document).on("click", "#detail-mhs", function() {
            var nim = $(this).data("nimmhs");
            Application.initShowDetailMhs(nim);
        });
    },

    initShowMhs: function() {
        $.ajax({
            url: 'https://ppk123.000webhostapp.com/web_servis.php',
            type: 'get',
            beforeSend: function() {
                $.mobile.loading('show', {
                    text: 'Please wait while retreiving data...',
                    textVisible: true
                });
            },
            success: function(dataObject) {
				console.log(dataObject[1]);
				console.log("---------------");
                data = dataObject;
				for (var i = 0; i < dataObject.length; i++) {
				var appendList = '<li><a href="#page-two?id=' + dataObject[i].NIM + '" target="_self" id="detail-mhs" data-nimmhs="' +
                dataObject[i].NIM + '"><h2>' +
                dataObject[i].Nama + '</h2><p>' +
                dataObject[i].NIM + '</p><p><b>' +
                dataObject[i].Fakultas + '</b></p></a></li>'
            $('#list-mhs').append(appendList);
        }
            },
            complete: function() {
                $.mobile.loading('hide');
            }
        });
    },

    initShowDetailMhs: function(NIM) {
        var appendDetail = "";
        var tbdy = $("#table-detailMhs tbody");
        data.forEach(element => {
            if (element.NIM == NIM) {
                appendDetail = "<tr><td>" + element.NIM + "</td><td>" +
                    element.Nama + "</td><td>" +
                    element.Jurusan + "</td><td>" +
                    element.Fakultas + "</td><td>" +
                    element.Alamat + "</td><td>" +
                    element.NoHp + "</td></tr>";
            }
        });
        $("#table-detailMhs").append(appendDetail);
    }
};

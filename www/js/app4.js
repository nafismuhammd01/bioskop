var Application = {
        initApplication: function () {
            $(window).load('pageinit', '#page-one', function () {
                
            })
            $(document).on('click', '#pilih-kursi', function () {
                var kursi;
                if (document.getElementById('A1').checked) {
                  kursi = document.getElementById('A1').value;
                }
                if (document.getElementById('A2').checked) {
                  kursi = document.getElementById('A2').value;
                }
                if (document.getElementById('A3').checked) {
                  kursi = document.getElementById('A3').value;
                }
                if (document.getElementById('A4').checked) {
                  kursi = document.getElementById('A4').value;
                }
                if (document.getElementById('A5').checked) {
                  kursi = document.getElementById('A5').value;
                }
                if (document.getElementById('A6').checked) {
                  kursi = document.getElementById('A6').value;
                }
                if (document.getElementById('A7').checked) {
                  kursi = document.getElementById('A7').value;
                }
                if (document.getElementById('A8').checked) {
                  kursi = document.getElementById('A8').value;
                }
                if (document.getElementById('B1').checked) {
                  kursi = document.getElementById('B1').value;
                }
                if (document.getElementById('B2').checked) {
                  kursi = document.getElementById('B2').value;
                }
                if (document.getElementById('B3').checked) {
                  kursi = document.getElementById('B3').value;
                }
                if (document.getElementById('B4').checked) {
                  kursi = document.getElementById('B4').value;
                }
                if (document.getElementById('B5').checked) {
                  kursi = document.getElementById('B5').value;
                }
                if (document.getElementById('B6').checked) {
                  kursi = document.getElementById('B6').value;
                }
                if (document.getElementById('B7').checked) {
                  kursi = document.getElementById('B7').value;
                }
                if (document.getElementById('B8').checked) {
                  kursi = document.getElementById('B8').value;
                }
                if (document.getElementById('C1').checked) {
                  kursi = document.getElementById('C1').value;
                }
                if (document.getElementById('C2').checked) {
                  kursi = document.getElementById('C2').value;
                }
                if (document.getElementById('C3').checked) {
                  kursi = document.getElementById('C3').value;
                }
                if (document.getElementById('C4').checked) {
                  kursi = document.getElementById('C4').value;
                }
                if (document.getElementById('C5').checked) {
                  kursi = document.getElementById('C5').value;
                }
                if (document.getElementById('C6').checked) {
                  kursi = document.getElementById('C6').value;
                }
                if (document.getElementById('C7').checked) {
                  kursi = document.getElementById('C7').value;
                }
                if (document.getElementById('C8').checked) {
                  kursi = document.getElementById('C8').value;
                }
                if (document.getElementById('D1').checked) {
                  kursi = document.getElementById('D1').value;
                }
                if (document.getElementById('D2').checked) {
                  kursi = document.getElementById('D2').value;
                }
                if (document.getElementById('D3').checked) {
                  kursi = document.getElementById('D3').value;
                }
                if (document.getElementById('D4').checked) {
                  kursi = document.getElementById('D4').value;
                }
                if (document.getElementById('D5').checked) {
                  kursi = document.getElementById('D5').value;
                }
                if (document.getElementById('D6').checked) {
                  kursi = document.getElementById('D6').value;
                }
                if (document.getElementById('D7').checked) {
                  kursi = document.getElementById('D7').value;
                }
                if (document.getElementById('D8').checked) {
                  kursi = document.getElementById('D8').value;
                }
                if (document.getElementById('E1').checked) {
                  kursi = document.getElementById('E1').value;
                }
                if (document.getElementById('E2').checked) {
                  kursi = document.getElementById('E2').value;
                }
                if (document.getElementById('E3').checked) {
                  kursi = document.getElementById('E3').value;
                }
                if (document.getElementById('E4').checked) {
                  kursi = document.getElementById('E4').value;
                }
                if (document.getElementById('E5').checked) {
                  kursi = document.getElementById('E5').value;
                }
                if (document.getElementById('E6').checked) {
                  kursi = document.getElementById('E6').value;
                }
                if (document.getElementById('E7').checked) {
                  kursi = document.getElementById('E7').value;
                }
                if (document.getElementById('E8').checked) {
                  kursi = document.getElementById('E8').value;
                }
                if (document.getElementById('F1').checked) {
                  kursi = document.getElementById('F1').value;
                }
                if (document.getElementById('F2').checked) {
                  kursi = document.getElementById('F2').value;
                }
                if (document.getElementById('F3').checked) {
                  kursi = document.getElementById('F3').value;
                }
                if (document.getElementById('F4').checked) {
                  kursi = document.getElementById('F4').value;
                }
                if (document.getElementById('F5').checked) {
                  kursi = document.getElementById('F5').value;
                }
                if (document.getElementById('F6').checked) {
                  kursi = document.getElementById('F6').value;
                }
                if (document.getElementById('F7').checked) {
                  kursi = document.getElementById('F7').value;
                }
                if (document.getElementById('F8').checked) {
                  kursi = document.getElementById('F8').value;
                }
                if (document.getElementById('G1').checked) {
                  kursi = document.getElementById('G1').value;
                }
                if (document.getElementById('G2').checked) {
                  kursi = document.getElementById('G2').value;
                }
                if (document.getElementById('G3').checked) {
                  kursi = document.getElementById('G3').value;
                }
                if (document.getElementById('G4').checked) {
                  kursi = document.getElementById('G4').value;
                }
                if (document.getElementById('G5').checked) {
                  kursi = document.getElementById('G5').value;
                }
                if (document.getElementById('G6').checked) {
                  kursi = document.getElementById('G6').value;
                }
                if (document.getElementById('G7').checked) {
                  kursi = document.getElementById('G7').value;
                }
                if (document.getElementById('G8').checked) {
                  kursi = document.getElementById('G8').value;
                }
                Application.initPesanKursi(kursi);
            })
        },
    
        
        initPesanKursi: function (kursi) {
            $.ajax({
                url: 'https://www.pitihden.com/pesanKursi.php',
                data: 'var_kursi='+kursi, 
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
        				window.location = 'https://www.pitihden.com/tiket.html';
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
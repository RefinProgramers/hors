function bukaGambar() {
    let jendela = window.open("", "popupGambar", "width=800,height=600");

    jendela.document.write(`
        <html>
        <head>
            <title>Foto Misterius</title>
        </head>
        <body style="background:black; text-align:center; color:white;">

            <h1>HAHAHA... 👻</h1>
            <h2>uhh... KAGET🤣😹</h2>

            <img src="2.jpg" width="200" style="margin:10px;">
            <img src="3.jpg" width="200" style="margin:10px;">
            <img src="4.jpg" width="200" style="margin:10px;">
        </body>
        </html>
    `);
}
{
    const NAME = "FELIOS.JS";
    const VERSION = "v0.0.0.1";
    const DESCRIPTION = "A Basic Retro Native Singular UI - State Management";
    const AUTHOR = "Humphrey Pietersen";
    const CONTRIBUTORS = {};
    const UI = "Single Input Form w/ Button"
    const LICENSE = "MIT";
    const COPYRIGHT = "(c) 2021 Humphrey Pietersen";
}

const dataFileUploaded = document.querySelector("#upload");
const dataProgress = document.querySelector(".data-progress");
const dataProgressFill = document.querySelector(".data-progress span");

dataFileUploaded.onchange = function (e) {

    e.preventDefault();

	var data = new FormData();
		data.append("upload",this.files[0]);

    if (this.files.length != 0) {

        var xhr = new XMLHttpRequest()

        xhr.open("POST","./file-handler.php", true)

        xhr.upload.addEventListener('progress', function (e) {

            e.preventDefault();

            let loaded = e.loaded;

            let total = e.total;

            let percentage = e.lengthComputable ? (loaded / total * 100) : 100;

            dataProgressFill.textContent = Math.floor(percentage) + "%";

            dataProgressFill.style.width = Math.floor(percentage) + "%";

        });

        xhr.setRequestHeader('Content-Type', 'multipart/form-data')

        xhr.send(data);

		xhr.onload = function(e){

			e.preventDefault();

			var tmpFilename = JSON.parse(e.target.responseText).tmpFilename;
			const req1 = new XMLHttpRequest();
			req1.open("GET","./drive/"+tmpFilename);
			req1.send();

			req1.onload = function(e){
						e.preventDefault();
							const currentFile_raw = e.target.response;
							const fileData = {
								"name": dataFileUploaded.files[0].name,
								"type": dataFileUploaded.files[0].type,
								"size": dataFileUploaded.files[0].size,
								"tmp_name": tmpFilename,
								"raw" :  currentFile_raw

							}


							//console.log(JSON.stringify(fileData));
							const preview  = document.querySelector(".preview");
									preview.setAttribute("src","data:image/png;base64,"+ currentFile_raw);
							const req2 = new XMLHttpRequest();
							req2.open("POST","./post-handler.php",true);
							req2.send(JSON.stringify(fileData));

						}

				}
	xhr.close();

	 setTimeout(function(){

 			this.form.submit()

	},35);


    }
}




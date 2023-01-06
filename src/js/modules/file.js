export default class FileEdit {
    constructor(selectFile, menssageFile) {
        this.selectFile = document.querySelector(selectFile);
        this.menssageFile = document.querySelector(menssageFile);


        //Bind
        this.eventFileSize = this.eventFileSize(this);
    }


    addEventsFile() {
        this.selectFile.addEventListener('change', () => {

            if (this.selectFile.files[0].size > (1024 * 1024 * 2)) {
                console.log((this.selectFile.files[0].size))
            }


        });
    }

    eventFileSize() {
        // console.log(this.selectFile.files);
    }


    init() {
        this.addEventsFile();
        return this;

    }

}


// function validaTamanhoArquivo(selectInput) {
//     var menssageFile = document.querySelector('.response-file');
//     selectInput = document.querySelector('#file-upload');

//     if (selectInput.files[0].size > (1024 * 1024 * 2)) {
//         menssageFile.innerHTML = "Arquivo excedeu tamanho permitido, suportamos até 2 MB.";
//         menssageFile.style.color = "#FF1E0F";
//     } else {
//         menssageFile.innerHTML = "Arquivo adicionado com sucesso!"
//         menssageFile.style.color = "#F7E752";
//     }
// }
// validaTamanhoArquivo();
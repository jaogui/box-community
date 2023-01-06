import TabNav from './modules/tab-navegation';
import Modal from './modules/modal';
import FileEdit from './modules/file-size-check';


const tabNav = new TabNav('.nav-options > li', '.content-support > section')
tabNav.init();

const modalConfig = new Modal('.btn-modal-config', '.close-modal-config', '.modal-config');
modalConfig.init();

const modalDownload = new Modal('.btn-download', '.close-modal-download', '.modal-download');
modalDownload.init();

const modalUpload = new Modal('.btn-upload', '.close-modal-upload', '.modal-upload');
modalUpload.init();

const checkSizeUpload = new FileEdit('#file-upload', '.response-file');
checkSizeUpload.init();
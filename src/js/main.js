import TabNav from './modules/tab-navegation';
import Modal from './modules/modal';

// const TabNav = new TabNav('');
// TabNav.init();

const tabNav = new TabNav('.nav-options > li', '.content-support > section')
tabNav.init();

const modalConfig = new Modal('.btn-modal-config', '.close-modal', '.modal-config');
modalConfig.init();

const modalDownload = new Modal('.btn-download', '.close-modal', '.modal-download');
modalDownload.init();

const modalUpload = new Modal('.btn-upload', '.close-modal', '.modal-upload');
modalUpload.init();
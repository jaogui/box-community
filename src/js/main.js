import TabNav from './modules/tab-navegation';
import Modal from './modules/modal';

// const TabNav = new TabNav('');
// TabNav.init();

const tabNav = new TabNav('.nav-options > li', '.content-support > section')
tabNav.init();

const modalConfig = new Modal('.btn-modal-config', '.close-modal', '.modal');
modalConfig.init();
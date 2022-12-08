import TabNav from './modules/tab-navegation';

// const TabNav = new TabNav('');
// TabNav.init();

const tabNav = new TabNav('.nav-options > li', '.content-support > section')
tabNav.init();
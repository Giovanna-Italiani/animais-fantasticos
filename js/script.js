import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tootltip.js";
import initDropdownMenu from "./modules/dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionoamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import initFecthBitcoin from "./modules/fetch-bitcoin.js";
import animacaoInitScroll from "./modules/scroll-animacao.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion(".js-accordion dt");
accordion.init();

const tabNav = new TabNav(".js-tabmenu li", ".js-tabcontent section");
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tootltip = new Tooltip("[data-tooltip]");
tootltip.init();

fetchAnimais("../../animaisapi.json", ".numeros-grid");

initDropdownMenu();
initMenuMobile();
initFuncionoamento();
initFecthBitcoin();
animacaoInitScroll();

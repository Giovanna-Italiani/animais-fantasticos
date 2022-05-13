import ScrollSuave from "./modules/scroll-suave.js";
import animacaoInitScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabnav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tootltip.js";
import initDropdownMenu from "./modules/dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionoamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFecthBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

animacaoInitScroll();
initAccordion();
initTabnav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionoamento();
initFetchAnimais();
initFecthBitcoin();

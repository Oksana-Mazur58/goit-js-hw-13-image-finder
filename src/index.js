import './styles.css';
import imageListTemplates from './templates/imageList.hbs'
import NewsApiServise from './js/api-service'
import LoadMoreBtn from './js/load-more-btn'


const refs = {
    searchForm: document.querySelector('.seaech_form'),
    imageList: document.querySelector('.images-list'),
    readMoreBtn: document.querySelector('[data-action="load-more"]'),
    // resetBtn: document.querySelector('[data-action="reset"]')
}
// const loadMoreBtn = new LoadMoreBtn({
//     selector: '.load-more-btn',
//     hidden: true,
// })




const newsApiServise = new NewsApiServise();


refs.searchForm.addEventListener('submit', onSearch)
refs.readMoreBtn.addEventListener('click', onReadMore)
// refs.resetBtn.addEventListener('click', onReset)


function onSearch(e) {
    e.preventDefault();
    
    
    newsApiServise.query = e.currentTarget.elements.query.value
    if (newsApiServise.query === '') {
        clearImageContainer();
        alert('Введіть дані');
        // loadMoreBtn.hide();
    } else {
        clearImageContainer();
        // loadMoreBtn.show();
        newsApiServise.resetPage()
        newsApiServise.fetchImage().then(({ hits }) => {
            imagesMarkup(hits);
        })
        // onReadMore()
    }
}

function onReadMore() {
    // loadMoreBtn.disable();
    newsApiServise.fetchImage().then(({ hits }) => {
        imagesMarkup(hits);

        windowsScrolling()
    
    })
}


function imagesMarkup (result){
    refs.imageList.insertAdjacentHTML('beforeend', imageListTemplates(result))
}
function clearImageContainer() {
    refs.imageList.innerHTML = '';
}

function windowsScrolling() {
const totalScrollHeight = document.body.clientHeight;

 window.scrollTo({
  top: totalScrollHeight,
  left: 0,
  behavior: 'smooth',
});
}


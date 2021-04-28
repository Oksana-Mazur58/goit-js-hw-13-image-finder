import './styles.css';
import imageListTemplates from './templates/imageList.hbs'
import NewsApiServise from './js/api-service'


const refs = {
    searchForm: document.querySelector('.seaech_form'),
    imageList: document.querySelector('.images-list'),
    readMoreBtn: document.querySelector('[data-action="load-more"]'),
    resetBtn: document.querySelector('[data-action="reset"]')
}
const newsApiServise = new NewsApiServise();


refs.searchForm.addEventListener('submit', onSearch)
refs.readMoreBtn.addEventListener('click', onReadMore)
// refs.resetBtn.addEventListener('click', onReset)


function onSearch(e) {
    e.preventDefault();
    
    
    newsApiServise.query = e.currentTarget.elements.query.value
    if (newsApiServise.query === '') {
        clearImageContainer();
        alert('Введіть дані')
    } else {clearImageContainer();
        newsApiServise.resetPage()
        onReadMore()
    }
}

function onReadMore() {
    newsApiServise.fetchImage().then(({ hits }) => {
        imagesMarkup(hits)
    })
}


function imagesMarkup (result){
    refs.imageList.insertAdjacentHTML('beforeend', imageListTemplates(result))
}
function clearImageContainer() {
    refs.imageList.innerHTML = '';
}


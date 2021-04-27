import preloaderFactory from '../preloader/preloader';
import imageService from '../services/image.service'
import imageListTemplates from '../../templates/imageList.hbs'

const preloader = preloaderFactory('.preloader')

const refs = {
    searchForm: document.querySelector('.seaech_form'),
    imgContainer: document.querySelector('.img-container'),
    imageList: document.querySelector('.movies-list')
}



const fetchImage = async () => {
    try {
        const { hits } = await imageService.fetchImage();
        renderList(hits)
        console.log(refr)
    } catch (error) {
        console.log(hits);
    } finally {
        preloader.hide()
    }
   
}

const renderList = image => {
    const imageList = imageListTemplates(image)
    refs.imageList.innerHTML = imageList
}
fetchImage()
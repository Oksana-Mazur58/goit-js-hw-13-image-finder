
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '21326628-9a70d89bbf799e4753ffadf9e'

export default class NewsApiServise{
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    async fetchImage(query) {
        const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`
        try {
            const rawResult = await fetch(url);
            const result = await rawResult.json()
            this.incrementPage()
            return result
        } catch {
           alert('Ooops!! Something going wrong');
        }
    }

    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery
    }
    incrementPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1; 
    }
}
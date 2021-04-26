const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '21326628-9a70d89bbf799e4753ffadf9e'

export default {
   async fetchImage() {
        const rawResult = await fetch(`${BASE_URL}?key=${API_KEY}`);
        if (!rawResult.ok)
            throw rawResult
        const result = await rawResult.json()
        return result
    }
}


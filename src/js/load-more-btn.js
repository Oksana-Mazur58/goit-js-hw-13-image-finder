export default class LoadMoreButton {
    constructor({ selector, hidden = false }) {
        this.refs = this.getRefs(selector);
        hidden && this.hide();
    }

    getRefs(selector) {
        const refs = {
            loadMoreButton: document.querySelector(selector),
            loadMoreBtnText: document.querySelector('.load-button-text'),
            loadBtnSpinner: document.querySelector('.load-button-spinner'),
           
        };
        return refs;
    }

    enable() {
        this.refs.loadMoreButton.disabled = false;
        this.refs.loadMoreBtnText.textContent = 'Load more';
        this.refs.loadBtnSpinner.classList.add('is-hidden');

    }

    disable() {
        this.refs.loadMoreButton.disabled = true;
        this.refs.loadMoreBtnText.textContent = 'Loading...';
        this.refs.loadBtnSpinner.classList.remove('is-hidden');

    }

    show() {
        this.refs.loadMoreButton.classList.remove('is-hidden');
    
    }

    hide() {
        this.refs.loadMoreButton.classList.add('is-hidden');
        // this.refs.goBackBtn.classList.add('is-hidden')
    }
}
function createArticle() {
    const title = document.getElementById('createTitle');
    const content = document.getElementById('createContent');

    if (title.value !== '' && content.value !== '') {
        const heading = document.createElement('h3');
        heading.innerText = title.value;
        const paragraph = document.createElement('p');
        paragraph.innerText = content.value;

        const article = document.createElement('article');

        article.appendChild(heading)
        article.appendChild(paragraph);

        const articles = document.getElementById('articles');
        articles.appendChild(article);

        title.value = '';
        content.value = '';
    }
}
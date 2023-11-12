document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".close");
    const modalTitle = document.getElementById("modal-title");
    const modalContent = document.getElementById("modal-content");

    const readMoreLinks = document.querySelectorAll(".read-more");

    readMoreLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const articleId = this.getAttribute("data-article-id");
            openModal(articleId);
        });
    });

    closeModal.addEventListener("click", function () {
        closeModalFn();
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModalFn();
        }
    });

    function openModal(articleId) {
        const article = getArticleContent(articleId);
        modalTitle.textContent = article.title;
        modalContent.innerHTML = article.content;
        modal.style.display = "block";
    }

    function closeModalFn() {
        modal.style.display = "none";
        modalTitle.textContent = "";
        modalContent.innerHTML = "";
    }

    function getArticleContent(articleId) {
        // Simulate fetching content from a server based on articleId
        const articles = [
            {
                id: 1,
                title: "Understanding Hemochromatosis",
                content: "<p>Hemochromatosis is a genetic disorder that causes the body to absorb too much iron...</p><p>This is the full content of the article.</p>"
            },
            {
                id: 2,
                title: "Managing Iron Levels Through Diet",
                content: "<p>Proper diet plays a crucial role in managing iron levels for individuals with hemochromatosis...</p><p>This is the full content of the article.</p>"
            },
            {
                id: 3,
                title: "Lifestyle Changes for Hemochromatosis",
                content: "<p>Living with hemochromatosis may require certain lifestyle adjustments to maintain optimal health...</p><p>This is the full content of the article.</p>"
            },
            {
                id: 4,
                title: "Support and Resources",
                content: "<p>Discovering a support network and accessing reliable resources can greatly enhance the quality of life for those with hemochromatosis...</p><p>This is the full content of the article.</p>"
            }
        ];

        return articles.find(article => article.id == articleId);
    }
});
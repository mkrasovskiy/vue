import { createStore } from 'vuex'

export default createStore({
    //начальное состояние
  state: {
    articles: [
      {
          "name": "Kitchan Design",
          "img": "blog-article1.jpeg",
          "title": "Let&rsquo;s Get Solution For Building Construction Work",
          "date": "26 December, 2022"
      },
      {
          "name": "Living Design",
          "img": "blog-article2.jpeg",
          "title": "Let&rsquo;s Get Solution For Building Construction Work",
          "date": "26 December, 2022"
      },
      {
          "name": "Interior Design",
          "img": "blog-article3.jpeg",
          "title": "Let&rsquo;s Get Solution For Building Construction Work",
          "date": "26 December, 2022"
      },
      {
        "name": "Kitchan Design",
        "img": "blog-article4.jpeg",
        "title": "Let&rsquo;s Get Solution For Building Construction Work",
        "date": "26 December, 2022"
      },
      {
        "name": "Living Design",
        "img": "blog-article5.jpeg",
        "title": "Let&rsquo;s Get Solution For Building Construction Work",
        "date": "26 December, 2022"
      },
      {
        "name": "Interior Design",
        "img": "blog-article6.jpeg",
        "title": "Let&rsquo;s Get Solution For Building Construction Work",
        "date": "26 December, 2022"
      },
    ],
  },
    //методы для чтения состояния
  getters: {
    getArticle: (state) => state.articles
  },
  mutations: {
    //методы для изменения состояния
  },
  actions: {
    //методы для асинхронных операций
  },
  modules: {
    //модули VueX для разделения хранилища на под-хранилища
  }
})

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
    blogList: [
      {
          id: 1,
          tag: ['Kitchen', 'Bedroom'],
          article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },
      {
          id: 2,
          tag: ['Building','Kitchen', 'Bedroom'],
          article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },
      {
          id: 3,
          tag: ['Kitchen Planning','Kitchen', 'Architecture'],
          article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },
      {
          id: 4,
          tag: ['Building', 'Bedroom'],
          article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },
      {
          id: 5,
          tag: ['Building','Architecture', 'Bedroom'],
          article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },
    ],
    tags: [
      {
          id: 1,
          tag: 'Kitchen',
          select: false,
      },
      {
          id: 2,
          tag: 'Bedroom',
          select: false,
      },
      {
          id: 3,
          tag: 'Building',
          select: false,
      },
      {
          id: 4,
          tag: 'Architecture',
          select: false,
      },
      {
          id: 5,
          tag: 'Kitchen Planning',
          select: false,
      },
    ],
  },
    //методы для чтения состояния
  getters: {
    getArticle: (state) => state.articles,
    getBlogList: (state) => state.blogList,
    getTags: (state) => state.tags
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

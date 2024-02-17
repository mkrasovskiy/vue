import { ref, computed } from "vue";

export default function handlePagination() {
  let page = ref(1);
  
  const articles = [
    {
        "name": "Kitchan Design",
        "img": "blog-article1.jpeg",
        "title": "Let&rsquo;s Get Solution For Building Construction Work",
        "date": "1 December, 2022"
    },
    {
        "name": "Living Design",
        "img": "blog-article2.jpeg",
        "title": "Let&rsquo;s Get Solution For Building Construction Work",
        "date": "2 December, 2022"
    },
    {
        "name": "Interior Design",
        "img": "blog-article3.jpeg",
        "title": "Let&rsquo;s Get Solution For Building Construction Work",
        "date": "3 December, 2022"
    },
    {
      "name": "Kitchan Design",
      "img": "blog-article4.jpeg",
      "title": "Let&rsquo;s Get Solution For Building Construction Work",
      "date": "4 December, 2022"
    },
    {
      "name": "Living Design",
      "img": "blog-article5.jpeg",
      "title": "Let&rsquo;s Get Solution For Building Construction Work",
      "date": "5 December, 2022"
    },
    {
      "name": "Interior Design",
      "img": "blog-article6.jpeg",
      "title": "Let&rsquo;s Get Solution For Building Construction Work",
      "date": "6 December, 2022"
    },
    {
      "name": "Kitchan Design",
      "img": "blog-article4.jpeg",
      "title": "Let&rsquo;s Get Solution For Building Construction Work",
      "date": "7 December, 2022"
    },
    {
      "name": "Interior Design",
      "img": "blog-article6.jpeg",
      "title": "Let&rsquo;s Get Solution For Building Construction Work",
      "date": "8 December, 2022"
    },
    {
      "name": "Living Design",
      "img": "blog-article2.jpeg",
      "title": "Let&rsquo;s Get Solution For Building Construction Work",
      "date": "9 December, 2022"
    },
    {
      "name": "Kitchan Design",
      "img": "blog-article4.jpeg",
      "title": "Let&rsquo;s Get Solution For Building Construction Work",
      "date": "10 December, 2022"
    },
    {
      "name": "Living Design",
      "img": "blog-article2.jpeg",
      "title": "Let&rsquo;s Get Solution For Building Construction Work",
      "date": "11 December, 2022"
    },
    {
      "name": "Interior Design",
      "img": "blog-article6.jpeg",
      "title": "Let&rsquo;s Get Solution For Building Construction Work",
      "date": "12 December, 2022"
    },
    {
      "name": "Kitchan Design",
      "img": "blog-article4.jpeg",
      "title": "Let&rsquo;s Get Solution For Building Construction Work",
      "date": "13 December, 2022"
    },
    {
      "name": "Interior Design",
      "img": "blog-article6.jpeg",
      "title": "Let&rsquo;s Get Solution For Building Construction Work",
      "date": "14 December, 2022"
    },
    {
      "name": "Living Design",
      "img": "blog-article2.jpeg",
      "title": "Let&rsquo;s Get Solution For Building Construction Work",
      "date": "15 December, 2022"
    },
    {
      "name": "Kitchan Design",
      "img": "blog-article4.jpeg",
      "title": "Let&rsquo;s Get Solution For Building Construction Work",
      "date": "16 December, 2022"
    },
    {
      "name": "Living Design",
      "img": "blog-article2.jpeg",
      "title": "Let&rsquo;s Get Solution For Building Construction Work",
      "date": "17 December, 2022"
    },
    {
      "name": "Interior Design",
      "img": "blog-article6.jpeg",
      "title": "Let&rsquo;s Get Solution For Building Construction Work",
      "date": "18 December, 2022"
    },
    {
      "name": "Kitchan Design",
      "img": "blog-article4.jpeg",
      "title": "Let&rsquo;s Get Solution For Building Construction Work",
      "date": "19 December, 2022"
    },
    {
      "name": "Living Design",
      "img": "blog-article2.jpeg",
      "title": "Let&rsquo;s Get Solution For Building Construction Work",
      "date": "20 December, 2022"
    },
  ];
  const data = articles.map((article) => {
    return {value: article};
  });
  console.log(data);
  const perPage = 6;

  const paginatedData = computed(() =>
  articles.slice((page.value - 1) * perPage, page.value * perPage)
  );

  const nextPage = () => {
    if (page.value !== Math.ceil(articles.length / perPage)) {
      page.value += 1;
    }
  };

  const backPage = () => {
    if (page.value !== 1) {
      page.value -= 1;
    }
  };

  const goToPage = (numPage) => {
    page.value = numPage;
  };

  return { articles, paginatedData, perPage, page, nextPage, backPage, goToPage };
}

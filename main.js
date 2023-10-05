const App = {
    data() {
        return {
            articles: [
                {
                    id: 1,
                    imgSrc: 'img/article-1.png',
                    tag: 'Kitchen Design',
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                },
                {
                    id: 2,
                    imgSrc: 'img/article-2.png',
                    tag: 'Living Design',
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December,2022 ',
                },
                {
                    id: 3,
                    imgSrc: 'img/article-3.png',
                    tag: 'Interior Design',
                    title: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022 ',
                },
                {
                    id: 4,
                    imgSrc: 'img/article-4.png',
                    tag: 'Kitchen Design',
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                },
                {
                    id: 5,
                    imgSrc: 'img/article-5.png',
                    tag: 'Living Design',
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December,2022 ',
                },
                {
                    id: 6,
                    imgSrc: 'img/article-6.png',
                    tag: 'Interior Design',
                    title: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022 ',
                },
            ],
        };
    },
};
Vue.createApp(App).mount("#app");

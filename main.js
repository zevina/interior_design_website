const App = {
    data() {
        return {
            tagSelected: '',
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
            decorePosts: [
                {
                    id: 1,
                    tag: 'Kitchen',
                    title: 'Let’s Get Solution For Building Construction Work',
                    imgSrc: 'img/article-img.png',
                    date: '26 December,2022',
                    topText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
                        '\n' +
                        'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    quoteText: 'The details are not the details. \n' +
                        'They make the design.',
                    heading: 'Design sprints are great',
                    midText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    listItem: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    bottomText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 2,
                    tag: 'Bedroom',
                    title: 'Design sprints are great',
                    imgSrc: 'img/article-img2.png',
                    date: '25 December,2022',
                    topText: 'Lorem ipsum dolor sit amet, adipiscing. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
                        '\n' +
                        'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    quoteText: 'The details are not the details. \n' +
                        'They make the design.',
                    heading: 'Design sprints are great',
                    midText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    listItem: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    bottomText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 3,
                    tag: 'Building',
                    title: 'Aliquam eu sem vitae turpmaximus',
                    imgSrc: 'img/article-img3.png',
                    date: '18 December,2022',
                    topText: 'Lorem ipsum dolor sit amet. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
                        '\n' +
                        'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    quoteText: 'The details are not the details. \n' +
                        'They make the design.',
                    heading: 'Design sprints are great',
                    midText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    listItem: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    bottomText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 4,
                    tag: 'Architecture',
                    title: 'Lorem ipsum dolor sit amet',
                    imgSrc: 'img/article-img.png',
                    date: '15 December,2022',
                    topText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
                        '\n' +
                        'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    quoteText: 'The details are not the details. \n' +
                        'They make the design.',
                    heading: 'Design sprints are great',
                    midText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    listItem: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    bottomText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 5,
                    tag: 'Kitchen Planning',
                    title: 'Let’s Get Solution For Building Construction Work',
                    imgSrc: 'img/article-img2.png',
                    date: '10 December,2022',
                    topText: 'Lorem ipsum dolor sit amet, adipiscing Aliximus. posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
                        '\n' +
                        'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    quoteText: 'The details are not the details. \n' +
                        'They make the design.',
                    heading: 'Design sprints are great',
                    midText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    listItem: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    bottomText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 6,
                    tag: 'Living room',
                    title: 'Building Construction Work',
                    imgSrc: 'img/article-img3.png',
                    date: '8 December,2022',
                    topText: 'Lorem ipsum dolor sit amet, in Aliqu eu sem vitae turpmaximus. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
                        '\n' +
                        'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    quoteText: 'The details are not the details. \n' +
                        'They make the design.',
                    heading: 'Design sprints are great',
                    midText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    listItem: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    bottomText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
            ],
            tags: [
                {
                    id: 1,
                    tag: 'Kitchen',
                },
                {
                    id: 2,
                    tag: 'Bedroom',
                },
                {
                    id: 3,
                    tag: 'Building',
                },
                {
                    id: 4,
                    tag: 'Architecture',
                },
                {
                    id: 5,
                    tag: 'Kitchen Planning',
                },
                {
                    id: 6,
                    tag: 'Living room',
                },
            ],
        };
    },
    methods: {
        selectTag($event) {
            this.tagSelected = $event.target.value;
        },
    },
    computed:{
        filteredPosts: function(){

            let tagSel = this.tagSelected;
            return this.decorePosts.filter(function (post){
                if(tagSel ==='') return true;
                else return post.tag.indexOf(tagSel) > -1;
            })
        }
    }
};
Vue.createApp(App).mount("#app");

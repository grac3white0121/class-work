// This is a comment

// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'KoALA', 		// this is the TITLE place in the class
				'https://en.wikipedia.org/wiki/Koala',	// this is the LINK place in the class
				'grace white',			// this is the AUTHOR place in the class
				'https://s-media-cache-ak0.pinimg.com/564x/bc/96/38/bc9638a1d39eeeccf627475b33bc92cd.jpg',	// this is the IMAGE place in the class
				'The koala is an arboreal herbivorous marsupial native to Australia. It is the only extant representative of the family Phascolarctidae and its closest living relatives are the wombats.' // this is the BODY place in the class
				),

			new Post(
				'Koala memes',
				'https://www.memecenter.com/search/koala',
				'grace white',
				'http://s2.quickmeme.com/img/85/85ae14997309eafabd04e8a1de138aaee1e64e42872b78938cef06d75fb0eb67.jpg', // this is a local image in the same folder as the js script
				'koala memes r really good.'
				),

			new Post(
				'Adopt A koala? heck ya',
				'https://www.savethekoala.com/adopt-a-koala',
				'grace white',
				'https://s-media-cache-ak0.pinimg.com/originals/5b/10/c7/5b10c750eb00fe694cd2440c68b98750.jpg',
				'koala\'s are loveable as heck! perfect pet!'
				),

			new Post(
				'Another Post: promptly judged',
				'https://vuejs.org',
				'Jane Author',
				'https://unsplash.it/200',
				'We promptly judged antique ivory buckles for the next prize.'
				),

			new Post(
				'Last Post: Jaded zombies',
				'https://google.com',
				'Anptoght Author',
				'#',
				'Jaded zombies acted quaintly but kept driving their oxen forward.'
				)
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});




export const projects = [
	{
		id: "gazetteer",
		title: "Gazetteer",
		description: "A map-based application providing real-time geographical data.",
		longDescription:
			"A map-based application that retrieves and displays real-time geographical information. It uses OpenStreetMap with Leaflet.js for interactive mapping, along with AJAX for dynamic data loading. The interface is built using HTML5, CSS3, and Bootstrap for a clean and responsive layout.",
		tags: ["JavaScript", "Leaflet.js", "OpenStreetMap API", "AJAX", "HTML5", "CSS3", "Bootstrap"],

		features: [
			"Interactive real-time map",
			"Uses Leaflet.js and OpenStreetMap",
			"AJAX-powered data loading",
			"Responsive UI with Bootstrap",
			"Geographical overlays and markers",
		],

		image: "/images/projects/gazetteer.png",
		github: "https://github.com/alexraju01/map-application",
		demo: "https://project1.alexraju.co.uk/",
	},

	{
		id: "companydirectory",
		title: "Companydirectory",
		description: "An internal tool for managing corporate contacts with dynamic data filtering.",
		longDescription:
			"This application is designed to help organizations manage employee and department contact information. It includes features such as real-time search, department and location filtering, and editable user records. Built using PHP and MySQL on the backend, along with jQuery, JavaScript, Bootstrap, HTML5, and CSS3 for a responsive and user-friendly frontend.",
		tags: ["PHP", "MySQL", "AJAX", "JavaScript", "jQuery", "Bootstrap", "HTML5", "CSS3"],

		features: [
			"Dynamic real-time filtering",
			"Department and location categorization",
			"Fully editable employee records",
			"Responsive Bootstrap-based layout",
			"Search by last name or department",
		],

		image: "/images/projects/companydirectory.png",
		github: "https://github.com/alexraju01/companydirectory",
		demo: "https://project2.alexraju.co.uk/",
	},
	{
		id: "pokidocs",
		title: "Pokidocs",
		description:
			"An interactive Pokedex mobile/web application leveraging the comprehensive PokeAPI for real-time data access.",
		longDescription:
			"Pokidocs is a mobile/web application designed to serve as an interactive Pokedex, leveraging the comprehensive PokeAPI for real-time data access. This project is crafted with a combination of modern web technologies.",
		tags: ["Laravel 10", "PHP", "Alpine.js", "HTML5", "CSS3", "Sass"],
		features: ["Interactive Pokedex", "Real-time data access (PokeAPI)", "Mobile/Web application"],
		image: "/images/projects/pokidocs.png",
		github: "https://github.com/alexraju01/poki-docs",
		demo: "https://pokidocs.alexraju.co.uk/public/pokemons",
	},
	{
		id: "starlight",
		title: "Starlight",
		description:
			"A mobile/web app for movies and TV series information, leveraging TMDB for real-time data.",
		longDescription:
			"Starlight is a mobile/web app for movies and TV series information, leveraging TMDB for real-time data. Built with Next.js 14 (App Router), it features server-side API fetching, reusable custom components, and modern front-end libraries like Shadcn/UI.",
		tags: ["Next.js", "Typescript", "Shadcn/UI", "TMDB API", "HTML5", "CSS3"],
		features: [
			"Server-side API fetching",
			"Real-time data (TMDB)",
			"Reusable custom components",
			"Next.js App Router",
			"Mobile/Web compatibility",
		],
		image: "/images/projects/starlight.png",
		github: "https://github.com/alexraju01/starlight",
		demo: "https://starlight-seven.vercel.app/",
	},
];

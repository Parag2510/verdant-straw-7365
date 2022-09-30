
let i = 0;
let j = 0;

let slide1 = `
I am getting addicted to Fab Bag's. The first one I had ordered was simply to check it out as my friend had recommended. I am not someone who spends a lot of time thinking about beauty products and I am clueless when it comes to such matters. Which is why the Fab Bag's are perfect for me. This August Fab Bag had everything I needed! The product curation is perfect. It's like having my own personal shopper for beauty products and such pretty bags too.

-Saileena`
let slide8 = `The products are amazing and I am just in love with the bag! Kudos to you team!

-Niranjana
`

let slide2 =
	`I like the fact that they offer high-quality products. Every single product from the bag stands out. It is a MUST TRY for every girl out there.

-Shikha`
let slide3 = `I am highly impressed with the idea of surprising the customers by leaving them to guess, whats inside the Bag. Surprises brings excitement and I am always excited to receive my Fab Bag. First of all I should say that the Bags are awesome and each time I got my Fab Bag, I was really happy to find whats inside it. Really satisfied! :)

-Pratika`
let slide4 = `This is my second month and I am already addicted. Can't wait for my third bag. It feels like someone with so much love who loves pampering you. Thank you Fab bag. Amazing products Thank you with gratitude.

Kirthana`
let slide5 = `Who doesn't want to get pampered? And this bag is all you need when you want to show some extra love to yourself. Every other product is of the best quality. And top of it doesn't burn a hole in your pocket. Every month I just wait for my bag as a small kid waits for her favourite toy. This Fab Bag is an upright bliss.

-Anushree`
let slide6 = `I am getting addicted to Fab Bag's. The first one I had ordered was simply to check it out as my friend had recommended. I am not someone who spends a lot of time thinking about beauty products and I am clueless when it comes to such matters. Which is why the Fab Bag's are perfect for me. This August Fab Bag had everything I needed! The product curation is perfect. It's like having my own personal shopper for beauty products and such pretty bags too.

Saileena`
let slide7 = `The products are amazing and I am just in love with the bag! Kudos to you team!

-Niranjana`


const slider = () => {

	let images = ["https://d32baadbbpueqt.cloudfront.net/Homepage/2d934fad-8c2a-4f7d-85fc-ea1ed8f23673.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/a9c3ccb8-ae00-4698-8317-aaa2051c3f04.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/91374506-cc05-46f3-aff6-86a00e501c38.gif", "https://d32baadbbpueqt.cloudfront.net/Homepage/2d934fad-8c2a-4f7d-85fc-ea1ed8f23673.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/1fa29c9d-b7b6-4aa9-ac54-a2195c10fc63.jpg"]

	let slideDiv = document.getElementById("slider")
	slideDiv.innerHTML = null

	let img = document.createElement('img')

	img.src = images[i]
	slideDiv.append(img)
	i++

	setInterval(() => {

		if (images.length == i) {
			i = 0;
		}

		img.src = images[i]
		slideDiv.append(img)
		i++
		console.log(i);
	}, 3000)
}

slider()

const testShow = () => {
	let slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8]
	let monial = document.getElementById("monial")
	monial.innerHTML = null
	let div = document.createElement("div")
	let h4 = document.createElement("h4")
	h4.innerText = slides[j]
	div.append(h4)
	monial.append(div)
	j++

	setInterval(() => {
		if (slides.length == j) {
			j = 0;
		}

		h4.innerText = slides[j]
		div.append(h4)
		monial.append(div)
		j++

	}, 3000)
}

testShow()

import  navbar  from "./components/navbar.js";

let nav = document.getElementById("navbar")

nav.innerHTML = navbar()

import footer from "./components/FOOTER.js";

let foot = document.getElementById("footer")

foot.innerHTML = footer()
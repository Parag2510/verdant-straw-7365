
let i = 0;

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
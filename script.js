document.addEventListener('DOMContentLoaded', () => {
	// Attach dblclick listeners to all post images
	const images = document.querySelectorAll('.img');
	images.forEach(img => {
		img.addEventListener('dblclick', () => {
			// Find the closest post container
			const post = img.closest('.posts');
			if (!post) return;

			// Find the likes element: a .container whose text contains 'likes'
		const containers = Array.from(post.querySelectorAll('.container'));
        let likesEl = containers.find(c => /likes$/i.test(c.textContent.trim()));
        if (!likesEl) likesEl = containers[0];
        if (!likesEl) return;

			// Parse the current likes number, increment, and reformat with commas
			const match = likesEl.textContent.match(/([\d,]+)/);
			let count = 0;
			if (match) {
				count = parseInt(match[1].replace(/,/g, ''), 10);
			}
			count = (isNaN(count) ? 1 : count + 1);
			likesEl.textContent = count.toLocaleString() + ' likes';
		});
	});
});
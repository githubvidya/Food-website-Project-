
const marquee = document.getElementById("marqueeInner");

document.getElementById("marquee").addEventListener("mouseover", () => {
	marquee.style.animationPlayState = "paused";
});


document.getElementById("marquee").addEventListener("mouseout", () => {
	marquee.style.animationPlayState = "running";
});





gsap.from(".nav_list ol li", {
	opacity: 0,
	x: -10,
	duration: 0.9,
	stagger: 0.3
})

gsap.from(".left_nav", {
	opacity: 0,
	x: -60,
	duration: 0.9,
	stagger: 0.3
})

gsap.from(" #nn", {
	opacity: 0,
	x: -90,
	duration: 1.6,
	stagger: 2
})
gsap.from(".page_p p", {
	opacity: 0,
	duration: 3,
	xPercent: -60,
	ease: "power4",
	stagger: 0.9
})
gsap.from(".page .btn ", {
	opacity: 0,
	duration: 2.3,
	yPercent: -100,
	ease: "power2",
	stagger: 2
})

gsap.from(".video_p ", {
	opacity: 0,
	y: -70,
	duration: 2,
	stagger: 2

})
gsap.from(".slide_part", {
	x: 70,
	duration: 2,
	stagger: 2,
})


gsap.from(".namaskar", {
	y: 300,
	duration: 2,
	stagger: 2,
})


var menu = gsap.timeline({
	scrollTrigger: {
		trigger: ".container",
		start: "top 100%",
		end: "bottom 100%",
	}
});

menu.from(".container .menu-list", {
	opacity: 0,
	y: -100,
	// stagger: 1.9,
});


menu.from(".container .menu-list ul li", {
	opacity: 0,
	rotate: 20,
	y: 10,
	duration: 2,

});

menu.from(" .container .menu_pic_disp", {
	opacity: 0,
	y: 100,
	duration: 2,
});
// _________________________________faetures__________________________

var cr = gsap.timeline({
	scrollTrigger: {
		trigger: ".faetures",
		start: "top 80%",
		end: "30% 80%",
		scrub: true,
	}
});
cr.from(".P-abs", {
	opacity: 0,
	y: 200,
	duration: 1.5,

});


var t = gsap.timeline({
	scrollTrigger: {
		trigger: ".faetures_pages",
		start: "top 80%",
		end: "85% 80%",
		scrub: true

	}
});



t.from(".pages_f .span img", {
	opacity: 0,
	y: -50,
	scale: 0,
	duration: 1.5,
	ease: "back.out(1.7)",
	// stagger: 0.2
});

t.from(".pages_f h6", {
	opacity: 0,
	y: -20,
	scale: 0.8,
	duration: 1,
	ease: "power4.out",
}, "-=1");

t.from(".pages_f h2", {
	opacity: 0,
	x: -50,
	duration: 1.2,
	ease: "power3.out",
}, "-=0.2");

t.from(".pages_f p", {
	opacity: 0,
	y: 50,
	duration: 1,
	ease: "power3.out",
}, "-=0.3");

t.from(".f_g .one_g", {
	opacity: 0,
	y: 50,
	duration: 1,
	ease: "power3.out",
}, "-=0.4");

t.from(".f_g .two_g", {
	opacity: 0,
	x: 80,
	duration: 1.3,
	ease: "power3.out",
}, "-=0.5");

t.from(".s_g .three_g", {
	opacity: 0,
	x: 80,
	duration: 1.3,
	ease: "power3.out",
}, "-=0.6");

t.from(".s_g .four_g", {
	opacity: 0,
	scale: 0.5,
	duration: 1.3,
	ease: "power3.out",
}, "-=0.7");


var g = gsap.timeline({
	scrollTrigger: {
		trigger: ".sweets",
		start: "top 80%",
		end: "bottom 80%",
		scrub: true,
	}
});


g.from(".about_sweets", {
	opacity: 0,
	duration: 1
});


g.from(".sweets .sweet_imges .s_box", {
	x: (i) => i === 0 ? -2250 : 2150,
	duration: 2,
	ease: "power3.out",
	marginLeft: 0
});


g.from(".sweets .sweet_imges2 .s_box", {
	x: (i) => i === 0 ? 2150 : -2150,
	duration: 2,
	ease: "power3.out",
	marginRight: 0
});






function showMenu(item) {
	const menuImage = document.getElementById('menu-image');
	const menuDescription = document.getElementById('menu-description');

	gsap.to([menuImage, menuDescription], {
		y: -3,
		duration: 0.3,
		onComplete: () => {

			switch (item) {
				case 'pizza':
					menuImage.src = 'https://cdn.pixabay.com/photo/2015/02/13/11/04/pizza-634967_1280.jpg';
					menuDescription.innerHTML = `
			  <h3>Delicious Pizza</h3>
			  <p>Our pizza is made with fresh ingredients and a delicious blend of cheese and toppings.</p>
			`;
					break;

				case 'burger':
					menuImage.src = 'https://cdn.pixabay.com/photo/2022/08/31/10/16/hamburger-7422961_1280.jpg';
					menuDescription.innerHTML = `
			  <h3>Juicy Burger</h3>
			  <p>A burger packed with flavors, topped with lettuce, tomato, and our special sauce.</p>
			`;
					break;

				case 'pasta':
					menuImage.src = 'https://cdn.pixabay.com/photo/2017/09/17/10/00/food-2757966_1280.jpg';
					menuDescription.innerHTML = `
			  <h3>Italian Pasta</h3>
			  <p>Authentic Italian pasta with rich tomato sauce and fresh herbs.</p>
			`;
					break;

				case 'salad':
					menuImage.src = 'https://cdn.pixabay.com/photo/2019/06/04/22/16/salad-4252467_960_720.png';
					menuDescription.innerHTML = `
			  <h3>Fresh Salad</h3>
			  <p>A healthy salad with crisp vegetables and a refreshing vinaigrette.</p>
			`;
					break;

				default:
					menuImage.src = './[removal.ai]_c6dc1561-a5a5-4732-a7dd-444afc5baef5-i-want-a-photo-e2d3e1a4-a278-40d7-b2b6-55d41905e530.png';
					menuDescription.innerHTML = `
			  <h3>Click on a menu item to see details</h3>
			  <p>Menu description will appear here.</p>
			`;
					break;
			}

			gsap.fromTo([menuImage, menuDescription], { opacity: 0 }, { y: -3, opacity: 1, duration: 0.6 });
		}
	});
}



let namee = document.getElementById("nn");
let name2 = document.getElementById("nn2");
let footer = document.getElementsByClassName("footer-heading")[0];
let h4 = document.getElementById("h4");
let modal = document.getElementById("nameModal");
let mainContent = document.getElementById("mainContent");

function cut() {
	if (modal.style.display === "block") {
		modal.style.display = "none"; 
	} else {
		modal.style.display = "block";
	}
}

function submitName() {
	let input = document.getElementById("nameInput").value;

	if (input) {
		if (input.length > 20) {
			input = input.substring(0, 20); 
		}


		let h = " we have special offers for you ";
		let ft = " If you want to Connect with Us";
		let clint = "Hello ";
		let clint2 = " This is for you ";

	
		namee.innerHTML = clint + input;
		name2.innerHTML = clint2 + input;
		footer.innerHTML = input + ft;
		h4.innerHTML = input + h;

		modal.style.display = "none";
		mainContent.classList.remove("hidden");

		
		console.log(namee.innerHTML);
		console.log(name2.innerHTML);
		console.log(footer.innerHTML);
		console.log(h4.innerHTML);
	} else {
		console.log("No input provided");
	}
}



function brgr() {
	let lists = document.querySelectorAll('.nav_list  ol');

	lists.forEach(function (ol) {
		if (ol.style.right === '0px') {
			ol.style.right = '-60%';
		} else {
			ol.style.right = '0px';
		}
	});
}




const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')
const header1 = document.getElementById('header1')
const title1 = document.getElementById('title1')
const excerpt1 = document.getElementById('excerpt1')
const profile_img1 = document.getElementById('profile_img1')
const aname1 = document.getElementById('aname1')
const date1 = document.getElementById('date1')
setTimeout(getData1, 2500)
function getData1() {
    header1.innerHTML = '<img src="https://preview.redd.it/7wggeu7394my.jpg?auto=webp&s=330f791930a2cc91e136f8c13349a833ed9d7310">'
    title1.innerHTML = 'Review 1'
    excerpt1.innerHTML = '"Needed a new streaming pc that could handle whatever I threw at it! That is when Stince Built came in, my best pick to get the job done! Communication was A+ during the building process and pickg up was easy and flawlessly. I use the PC to help with content on my Youtube Channel with over 750,000 Subscribers. I am loving the the Rig! Highly recommend, done fast, done right! "'
    profile_img1.innerHTML = '<img src="https://randomuser.me/api/portraits/men/44.jpg">'
    aname1.innerHTML = 'John Doe'
    date1.innerHTML = 'Apr 20, 2022'
    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
const header2 = document.getElementById('header2')
const title2 = document.getElementById('title2')
const excerpt2 = document.getElementById('excerpt2')
const profile_img2 = document.getElementById('profile_img2')
const aname2 = document.getElementById('aname2')
const date2 = document.getElementById('date2')
setTimeout(getData2, 2500)
function getData2() {
    header2.innerHTML = '<img src="https://i.pcmag.com/imagery/roundups/00DuEK0BDIXkfrudGxcIKo6-8..v1569470765.png">'
    title2.innerHTML = 'Review 2'
    excerpt2.innerHTML = '"I was in the market for a custom gaming/streaming setup for my son. He had some specific requests as far as specs but it was all gibberish to me. When I contacted Jeff, I was overwhelmed but he was so helpful! He graciously answered my questions, stayed under budget, was always super quick to respond, , and delivered and set everything up with a one week turn around start to finish!"'
    profile_img2.innerHTML = '<img src="https://randomuser.me/api/portraits/women/44.jpg">'
    aname2.innerHTML = 'Alisha Smith'
    date2.innerHTML = 'May 2, 2022'
    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
const header3 = document.getElementById('header3')
const title3 = document.getElementById('title3')
const excerpt3 = document.getElementById('excerpt3')
const profile_img3 = document.getElementById('profile_img3')
const aname3 = document.getElementById('aname3')
const date3 = document.getElementById('date3')
setTimeout(getData3, 2500)
function getData3() {
    header3.innerHTML = '<img src="https://u-mercari-images.mercdn.net/photos/m58095275615_1.jpg?width=1024&height=1024&format=pjpg&auto=webp&fit=crop&_=1636864509">'
    title3.innerHTML = 'Review 3'
    excerpt3.innerHTML = '"I have had my computer for about 2 weeks now! I am absolutely in love with it! It is my first gaming PC, and all I have to say if you are looking into getting a computer, I would all the way recommend Jeff at Stince Built! He was very amazing through the entire process. He let me know when my parts arrived and sent me pictures. He was very kind, and answered all of my questions, and provided me with all the details I needed! Big shout out to Jeff and his amazing skills!"'
    profile_img3.innerHTML = '<img src="https://randomuser.me/api/portraits/women/45.jpg">'
    aname3.innerHTML = 'Jordan Leigh Wagner'
    date3.innerHTML = 'May 10, 2022'
    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
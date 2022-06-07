const toggles2 = document.querySelectorAll('.toggle')
const bluetooth = document.querySelector('#bluetooth')
const wifi = document.querySelector('#wifi')
const nowifibt = document.querySelector('#nowifibt')
toggles2.forEach(toggle => toggle.addEventListener('change', (e) => {
    doTheTrick(e.target)
}))
function doTheTrick(theClickedOne) {
    if(theClickedOne === bluetooth || theClickedOne === wifi)
        nowifibt.checked = false
    if(theClickedOne === nowifibt) {
        wifi.checked = false
        bluetooth.checked = false
    }
        
}

const submit = document.getElementById('submit')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const address = document.getElementById('address')
const city = document.getElementById('city')
const state = document.getElementById('state')
const zip = document.getElementById('zip')
const budget = document.getElementById('budget')
const time = document.getElementById('time')
const game = document.getElementById('game')
const stream = document.getElementById('stream')
const gamenstream = document.getElementById('gamenstream')
const video = document.getElementById('video')
const business = document.getElementById('business')
const family = document.getElementById('family')
const audio = document.getElementById('audio')
const gameList = document.getElementById('gameList')
const comment = document.getElementById('comment')
const toasts = document.getElementById('toasts')

submit.addEventListener('click', (e) => {
    let validation = 0
    if(!isFnameValid(fname.value)) {
        const fnameNotif = document.createElement('div')
        fnameNotif.classList.add('toast')
        fnameNotif.innerText = 'Invalid first name'
        toasts.appendChild(fnameNotif)
        setTimeout(() => {
            fnameNotif.remove()
        }, 3000)
    } else validation++
    if(!isLnameValid(lname.value)) {
        const lnameNotif = document.createElement('div')
        lnameNotif.classList.add('toast')
        lnameNotif.innerText = 'Invalid last name'
        toasts.appendChild(lnameNotif)
        setTimeout(() => {
            lnameNotif.remove()
        }, 3000)
    } else validation++
    if(!isEmailValid(email.value)) {
        const emailNotif = document.createElement('div')
        emailNotif.classList.add('toast')
        emailNotif.innerText = 'Invalid email'
        toasts.appendChild(emailNotif)
        setTimeout(() => {
            emailNotif.remove()
        }, 3000)
    } else validation++
    if(!isPhoneValid(phone.value)) {
        const phoneNotif = document.createElement('div')
        phoneNotif.classList.add('toast')
        phoneNotif.innerText = 'Invalid phone'
        toasts.appendChild(phoneNotif)
        setTimeout(() => {
            phoneNotif.remove()
        }, 3000)
    } else validation++
    if(!isAddressValid(address.value)) {
        const addressNotif = document.createElement('div')
        addressNotif.classList.add('toast')
        addressNotif.innerText = 'Invalid address'
        toasts.appendChild(addressNotif)
        setTimeout(() => {
            addressNotif.remove()
        }, 3000)
    } else validation++
    if(!isCityValid(city.value)) {
        const cityNotif = document.createElement('div')
        cityNotif.classList.add('toast')
        cityNotif.innerText = 'Invalid city'
        toasts.appendChild(cityNotif)
        setTimeout(() => {
            cityNotif.remove()
        }, 3000)
    } else validation++
    if(!isStateValid(state.value)) {
        const stateNotif = document.createElement('div')
        stateNotif.classList.add('toast')
        stateNotif.innerText = 'Invalid state'
        toasts.appendChild(stateNotif)
        setTimeout(() => {
            stateNotif.remove()
        }, 3000)
    } else validation++
    if(!isZipValid(zip.value)) {
        const zipNotif = document.createElement('div')
        zipNotif.classList.add('toast')
        zipNotif.innerText = 'Invalid zip code'
        toasts.appendChild(zipNotif)
        setTimeout(() => {
            zipNotif.remove()
        }, 3000)
    } else validation++
    if(!isBudgetValid(budget.value)) {
        const budgetNotif = document.createElement('div')
        budgetNotif.classList.add('toast')
        budgetNotif.innerText = 'Invalid budget'
        toasts.appendChild(budgetNotif)
        setTimeout(() => {
            budgetNotif.remove()
        }, 3000)
    } else validation++
    if(!isTimeValid(time.value)) {
        const timeNotif = document.createElement('div')
        timeNotif.classList.add('toast')
        timeNotif.innerText = 'Invalid expect time'
        toasts.appendChild(timeNotif)
        setTimeout(() => {
            timeNotif.remove()
        }, 3000)
    } else validation++
    if(!isPurposeChosen(game, stream, gamenstream, video, business, family, audio)) {
        console.log('hi')
        const purposeNotif = document.createElement('div')
        purposeNotif.classList.add('toast')
        purposeNotif.innerText = 'Please choose at least one thing that you plan on using you PC for'
        toasts.appendChild(purposeNotif)
        setTimeout(() => {
            purposeNotif.remove()
        }, 3000)
    } else validation++
    if(!isRequirementChosen(bluetooth, wifi, nowifibt)) {
        const requirementNotif = document.createElement('div')
        requirementNotif.classList.add('toast')
        requirementNotif.innerText = 'Please let us know if you need Bluetooth or Wifi for your PC'
        toasts.appendChild(requirementNotif)
        setTimeout(() => {
            requirementNotif.remove()
        }, 3000)
    } else validation++
    if(validation >= 12) {
        const inputs = {
            fname: fname.value,
            lname: lname.value,
            email: email.value,
            phone: phone.value,
            address: address.value,
            city: city.value,
            state: state.value,
            zip: zip.value,
            budget: budget.value,
            time: time.value,
            gaming: game.checked,
            streaming: stream.checked,
            gamingAndStreaming: gamenstream.checked,
            videoEditing: video.checked,
            forBusiness: business.checked,
            forFamily: family.checked,
            audioEditing: audio.checked,
            gameList: gameList.value,
            bluetooth: bluetooth.checked,
            wifi: wifi.checked,
            comment: comment.value
        }
    } else e.preventDefault()
})

function isFnameValid(fname) {
    if(fname.length == 0) return false
    const re = /^[a-z ,.'-]+$/i
    return re.test(fname)
}
function isLnameValid(lname) {
    if(lname.length == 0) return false
    const re = /^[a-z ,.'-]+$/i
    return re.test(lname)
}
function isEmailValid(email) {
    if(email.length == 0) return false
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(email)
}
function isPhoneValid(phone) {
    if(phone.length == 0) return false
    const re = /^\d{10}$/
    return re.test(phone)
}
function isAddressValid(address) {
    if(address.length == 0) return false
    const re = /^(?:[Pp][Oo]\s[Bb][Oo][Xx]|[0-9]+)\s(?:[0-9A-Za-z\.'#]|[^\S\r\n])+/
    return re.test(address)
}
function isCityValid(city) {
    if(city.length == 0) return false
    const re = /^[a-zA-Z',.\s-]{1,25}$/
    return re.test(city)
}
function isStateValid(state) {
    if(state.length == 0) return false
    const re = /[A-Z]{2}/
    return re.test(state)
}
function isZipValid(zip) {
    if(zip.length == 0) return false
    const re = /[0-9]{5}/
    return re.test(zip)
}
function isBudgetValid(budget) {
    if(budget.length == 0) return false
    if(isNaN(budget))
        return false
    else if(Number(budget) < 1400)
        return false
    else
        return true
}
function isTimeValid(time) {
    if(time == 'empty')
        return false
    else
        return true
}
function isPurposeChosen(game, stream, gamenstream, video, business, family, audio) {
    if(game.checked == false && 
        stream.checked == false && 
        gamenstream.checked == false && 
        video.checked == false && 
        business.checked == false && 
        family.checked == false && 
        audio.checked == false)
        return false
    else 
        return true
}
function isRequirementChosen(bluetooth, wifi, nowifibt) {
    if(bluetooth.checked == false &&
        wifi.checked == false &&
        nowifibt.checked == false)
        return false
    else
        return true
}
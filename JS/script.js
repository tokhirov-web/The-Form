const startBtn = document.querySelector(".start")
const container = document.querySelector(".container")
const animation = document.querySelector(".theBall")

const all = document.querySelector("#overal")
const need = document.querySelector("#require")
const success = document.querySelector("#completed")
const error = document.querySelector("#notCompleted")
const theForm = document.forms.questionary
const allInputs = document.querySelectorAll("input")
const needToFill = document.querySelectorAll(".neccessary")

let bottomWarning = document.querySelectorAll(".fill")
let topWarning = document.querySelectorAll(".essential")
let completed = document.querySelector("#completed")
let notCompleted = document.querySelector("#notCompleted")

let successIndex = 0
let errorIndex = 0


completed.innerHTML = successIndex
notCompleted.innerHTML = errorIndex

startBtn.onclick = () => {

    setTimeout(() => {
        startBtn.style.display = "none"
        animation.style.display = "block"
    }, 100);

    setTimeout(() => {
        animation.style.display = "none"
        container.style.display = "block"
    }, 4500);

    theForm.onsubmit = (event) => {
        event.preventDefault();
        let errors = ''

        needToFill.forEach(inp => {
            inp.style.border = "2px solid #543FD3"

            if (inp.value.length === 0 || inp.value === '' || !inp) {
                inp.style.border = "2px solid red"
                errors += ` ${inp.name}`
            }
        })

        if (!errors) {
            submit()
            alert("Thank you for the submittion")
        } else {
            errorIndex++
            alert(`Please, fill` + errors)
        }
    }


    function submit() {
        let user = {}
        let collector = new FormData(theForm)
        collector.forEach((value, key) => {
            user[key] = value
        })

        theForm.reset()
        console.log(user);
    }

    all.innerHTML = allInputs.length
    need.innerHTML = needToFill.length

    console.log(notCompleted.innerHTML);
}
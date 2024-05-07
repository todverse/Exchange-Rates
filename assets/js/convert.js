let state = ''
const convert = (e) => {
    let class_e = e.classList[0]
    let select_to = document.getElementsByClassName('convert_to_select')[0]

    let select_value = select_to.value

    if(class_e == 'convert_this') {
        state = 'convert_this'
        let convert_answer = Number(e.value)/Number(select_value)
        document.getElementsByClassName('convert_to')[0].value = convert_answer? convert_answer: ''
    } else if(class_e == 'convert_to') {
        state = 'convert_to'
        let convert_answer = Number(e.value)*Number(select_value)
        document.getElementsByClassName('convert_this')[0].value = convert_answer? convert_answer: ''
    } else {
        for(let i = 0; i < e.children.length; i++) {
            let opt = e.children[i]
            if(opt.value == e.value) {
                document.getElementsByClassName('label_to')[0].innerHTML = opt.innerHTML
            }
        }
        if(state == 'convert_this') {
            state = 'convert_this'
            let convert_answer = Number(document.getElementsByClassName('convert_this')[0].value)/Number(e.value)
            document.getElementsByClassName('convert_to')[0].value = convert_answer? convert_answer: ''
        } else if(state == 'convert_to') {
            state = 'convert_to'
            let convert_answer = Number(document.getElementsByClassName('convert_to')[0].value)*Number(e.value)
            document.getElementsByClassName('convert_this')[0].value = convert_answer? convert_answer: ''
        }
    }
}
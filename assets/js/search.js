const search = (e) => {
    if(e.value == '') {
        valt = valute_c
    } else {
        let searching = {}
        Object.keys(valute_c).forEach((v) => {
            let value = valute_c[v]
            if(value.name.toLowerCase().includes(e.value.toLowerCase())) {
                searching[v] = value
            }
        })
        if(Object.keys(searching).length == 0) {
            valt = valute_c
        } else {
            valt = searching
        }
    }
    render(valt)
}
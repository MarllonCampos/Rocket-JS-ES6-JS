const delay = () => new Promise((resolve, reject) => setTimeout(resolve, 1000))


async function umPorSegundo(msg) {
    console.log(msg + "s")
    await delay()
    console.log(msg + 1 + "s")
    await delay()
    console.log(msg + 2 + "s")
}

umPorSegundo(1)





const devolver = () => {
    const futbolista ={
        name: 'Lionel',
        edad: 25,
    }

    return  futbolista
}

for (let i = 0; i < 3; i++) {
    let s = devolver().name
    console.log(s[i]);
}

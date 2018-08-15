export const aleatorio = (level) => {
    switch (level) {
        case 1:
            return require('../../assets/img/aleatorio1.jpg');
        case 2:
            return require('../../assets/img/aleatorio2.jpg');
        case 3:
            return require('../../assets/img/aleatorio3.jpg');
        case 4:
            return require('../../assets/img/aleatorio4.jpg');
        case 5:
            return require('../../assets/img/aleatorio5.jpg');
        case 6:
            return require('../../assets/img/aleatorio6.jpg');
        case 7:
            return require('../../assets/img/aleatorio7.jpg');
        case 8:
            return require('../../assets/img/aleatorio8.jpg');
        case 9:
            return require('../../assets/img/aleatorio9.jpg');
        case 10:
            return require('../../assets/img/aleatorio10.jpg');
        default: 
            return require('../../assets/img/aleatorio10.jpg');
    }
}
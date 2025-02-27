export class Validator {
    validateUsername(userName) {
        const re1 = /^[a-zA-Z0-9-_]+$/
        const re2 = /^([\d_-\s])|([\d_-\s])$|(\d)(?=\3{3})/   

        if (re1.test(userName) === false || re2.test(userName) === true) {
            return 'ошибка'
        }
        return 'ok'
        }
    }
   


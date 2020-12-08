export const required = (value) => {
    return value.length == 0 ? 'Please enter something' : ''
}
export const alphabets = (value) => {
    const reg = /^[_a-zA-Z]+$/
    return !reg.test(value) ? 'Please enter alphabets' : ''
}
export const number = (value) => {
    const reg = /^[0-9]+$/
    return !reg.test(value) ? 'Please enter number' : ''
}
export const length = (value, minLength, maxLength) => {
    return value.length > maxLength ? `Please enter your username less than ${maxLength} characters`
        : value.length < minLength ? `Please enter your username at least ${minLength} characters` : ''
}
export const email = (value) => {
    const reg = /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/
    return !reg.test(value) ? 'Please enter email in correct format' : ''
}
export const validator = (fieldName, fieldValue) => {
    let err = ''
    switch (fieldName) {
        case 'nickname':
            err = required(fieldValue)
            if (err) return err
            err = alphabets(fieldValue)
            if (err) return err
            err = length(fieldValue, 3, 8)
            break
        case 'number':
            err = required(fieldValue)
            if (err) return err
            err = number(fieldValue)
            break
    }
    return err
}
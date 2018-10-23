let baseUrl = "";

if(process.env.NODE_ENV == 'production'){
    baseUrl = 'https://xxxxxxxxx';
} else if (process.env.NODE_ENV == 'development') {
    baseUrl = '/api'
}
console.log(process.env.NODE_ENV,'configjs起作用了')
export {
    baseUrl
}
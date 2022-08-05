let urlConfig = {
    baseUrl: ""
}

switch (process.env.NODE_ENV) {
    case 'development':
        urlConfig.baseUrl = "http://localhost:8080/dev/api"
    break;

    case 'production':
        urlConfig.baseUrl = "http://localhost:8080/pro/api"
    break;

    case 'demo':
        urlConfig.baseUrl = "http://localhost:8080/demo/api"
    break;
}

window.urlConfig = urlConfig;

export default urlConfig;


(() => {
    const urlMap = {
        // local: process.env.LOCAL_URL,
        prod: 'http://www.a1.com',
        demo: 'http://www.a2.com'
    }
    // stage
    let stage = process.env.STAGE
    //当前是production并且stage不存在时默认为生产环境
    if (process.env.NODE_ENV === 'production' && !stage) {
        stage = 'prod';
    } else {
        //stage不存在默认为本地开发环境
        stage = stage || 'local';
    }

    console.log('ip:' + stage);
})()
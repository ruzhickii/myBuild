let server = {
    test: `https://test.api.ittcms.io/blog/v1`,
    production: `https://api.ittcms.io/blog/v1`,
    checkTest: `https://test.check.ittcms.io`,
    checkProduction: `https://check.ittcms.io`
};

const Config = {
    language: `ru`,
    token: `i_access_token`,
    provider: 'ittclientid_00001',
    api: process.env.__DEV__ ? server.test : server.production,
    check: process.env.__DEV__ ? server.checkTest : server.checkProduction
};

export {Config}

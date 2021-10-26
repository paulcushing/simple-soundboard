module.exports = {
    async headers() {
        return [
            {
                source: '/',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: 'default-src "self"',
                    },
                ],
            },
        ];
    },
    reactStrictMode: true,
    target: 'serverless',
};

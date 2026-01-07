export const linksTestData = {
    url: 'https://demoqa.com/links',
    expectedUrl: 'https://demoqa.com/',
    expectedResponses: {
        created: 'Link has responded with staus 201 and status text Created',
        noContent: 'Link has responded with staus 204 and status text No Content',
        moved: 'Link has responded with staus 301 and status text Moved Permanently',
        badRequest: 'Link has responded with staus 400 and status text Bad Request',
        unauthorized: 'Link has responded with staus 401 and status text Unauthorized',
        forbidden: 'Link has responded with staus 403 and status text Forbidden',
        notFound: 'Link has responded with staus 404 and status text Not Found'
    }
};
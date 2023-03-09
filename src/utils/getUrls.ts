
const Urls: any = {
    dev: {
        NUVANN_API: 'https://nuvannapi.com/'
    },
    prod: {
        NUVANN_API: 'https://nuvannapi.com/'
    }
}

const ENV: string = process.env.REACT_MODE_API || 'dev'
export default Urls[ENV];


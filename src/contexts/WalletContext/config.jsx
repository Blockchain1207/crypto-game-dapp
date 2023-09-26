const walletConfig =
{
    1: {
        chainId: '0x1',
        switchLabel: '',
        networkName: 'Ethereum Mainnet',
        brand: 'SHINO',
        icon: '/icons/eth.png',
        logo: '/images/logo/shino.jpg',
        mainnet: true,
        network: "ethereum",
        nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: ['https://mainnet.infura.io/v3/7535811d19b1410e98c261fbb638651a'],
        blockUrls: ['https://etherscan.io/'],
        apiUrl: 'https://api.etherscan.io/api',
        apiKey: '6261JHGXK1E5GG3R9BBVD99VSD86F8FG2B',

        ex: {
            dex: 'https://app.uniswap.org/#/swap',
            telegram: 'https://t.me/Shino_Portal',
            twitter: 'https://twitter.com/Shino_Finance',
            landing: 'https://www.shino.finance/',
            docs: 'https://shinofinance.gitbook.io/shino/'
        }
    },
    5: {
        chainId: '0x5',
        switchLabel: '',
        networkName: 'Goerli test network',
        network: "goerlitestnet",
        brand: 'GOERLI',
        icon: '/icons/bnb.png',
        logo: '/images/logo/goerli.jpg',
        mainnet: true,
        nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: ['https://goerli.infura.io/v3/f2c3624a719d49cf83f59034a3ed28dd'],
        blockUrls: ['https://goerli.etherscan.io'],
        apiUrl: 'https://goerli.infura.io/v3/',
        apiKey: 'f2c3624a719d49cf83f59034a3ed28dd',

        ex: {
            dex: 'https://app.uniswap.org/#/swap',
            docs: '/'
        }
    },
    31337: {
        chainId: '0x7A69',
        switchLabel: '',
        networkName: 'Local DevNet',
        mainnet: true,
        nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: ['http://localhost:8545/'],
        blockUrls: ['https://goerli.etherscan.io'],

        ex: {
            dex: 'https://app.uniswap.org/#/swap',
            docs: '/'
        }
    },
}

export default walletConfig

tailwind.config = {
    daisyui: {
        themes: ["light", "dark", "cupcake"],
    },
    theme: {
        extend: {
            colors: {
                'bogsGray': '#f8f8f8',
                'innerText': '#666666',
                'influencer__text': '#252525',
            },
            fontSize: {
                '1750Max_subHeading': '2.1vw',
                '1750Max_Heading': '8.35vw',
                'topCategory_Heading': '38px',
                'shop__btnFontSize': '28px',
                // 'technologyHeading': '4.35vw',
                // 'technologySubheading': '1.25vw',
                '13': '13px',
                '17': '17px',
                '23': '23px',
                '50': '50px',
                '3.25xl': '32px',
                '7.5xl': '84px',
                'xxs': '10px',
                // 'influencer__section__heading': '1.7vw',
                // 'influencer__section__subheading': '1.25vw',
            },
            fontFamily: {
                'FrontPage': ['front_page_neueregular', 'Roboto'],
                'BogsHeadline': ['bogs_headlineregular', 'Roboto'],
                'TradeGothic_bold': ['tradeGothic_bold', 'Roboto'],
                'TradeGothic_std': ['tradeGothic_std', 'Roboto']
            },
            width: {
                'unset': 'unset',
                'hundredPx': '100px',
                '110px': '110px',
                'watchVideoBtn': '180px',
                'watchVideoBtn-sm': '130px',
                '32Pc': '32%',
                '35Pc': '35%',
                '49-1/2': '49%',
                '40-1/2': '40%',
                '65Pc': '65%',
                'influencer__section__left': '58.5%',
                'influencer__section__right': '38.65%',
            },
            height: {
                'unset': 'unset',
                'shop__btnHeight': '42px',
                'shop__btnHeight--sm': '34px',
            },
            maxWidth: {
                'bogs': '1750px',
                '75pc': '75%',
                // 'navImage': '174px',
            },
            spacing: {
                '5.5': "1.4rem"
            },
            lineHeight: {
                '1750Max_Heading': '7.5vw',
                '1750Max_subHeading': '45px',
                'shop__btnLineHeight': '42px',
                'shop__btnLineHeight--sm': '34px',
                '32': '32px',
                '40': '40px',
                '44': '44px',
                '11': '48px',
                '64': '64px',
                '7.5xl': '75px',
            },
            borderRadius: {
                'shop__btnRounded': '20px',
            },
            margin: {
                'Minus50px': '-50px',
                '60Pc': '60%',
            },
            padding: {
                'HundredPx': '100px',
                '23Pc': '23%',
            },
            inset: {
                '15': '15px',
                '60': '60px',
            },
        },
    }
}
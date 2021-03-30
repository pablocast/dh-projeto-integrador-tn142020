import "./style.css";

const planos = {
    one: {
        title: "Basic",
        price: "0.99",
        billingCode: "basic-regular",
        priceDescription: "This is the most basic package but it's also the cheapest. Great for ordinary use.",
        priceOverview: "Standard Version",
        assignText: "Try Now for 30 Days",
        featured: false
    },
    two: {
        title: "Advanced",
        price: "1.99",
        billingCode: "advanced-regular",
        priceDescription: "Best selling option. This is well suited for all around general everything.",
        priceOverview: "Standard Version",
        assignText: "Try Now for 30 Days",
        featured: true
    },
    three: {
        title: "Enterprise",
        price: "2.99",
        billingCode: "enterprise-regular",
        priceDescription: "Enterprise edition. Heavy duty awesomeness that'll handle just about anything you can throw at it, including the kitchen sink.",
        priceOverview: "Standard Version",
        assignText: "Try Now for 30 Days",
        featured: false
    },
};

const PricingCard = (props) => {
    console.log(props)
    const { title, price, assignText, priceDescription, priceOverview, featured } = props.pricingData;

    const dollar = price.toString().split(".")[0];
    const cent = price.toString().split(".")[1] || "00";

    return (
        <div className={"PricingCard " + (featured ? 'featured' : '')}>
            <div className="title">{title}</div>

            <div className="Card">
                <h2 className="price">
                    <span className="price__currency">$</span>
                    <span className="price__dollar">{dollar}</span>.
                    <span className="price__cent">{cent}</span>
                </h2>
                <p className="price-overview">{priceOverview}</p>
                <p className="description">{priceDescription}</p>
            </div>
            <a
                className="price-bttn"
            >
                {assignText}
            </a>
        </div>
    );
};

const PricingCardContainer = (props) => {
    const planos = props.pricingDataAll
    return (
        <section>
            <div className="PricingCardContainer">
                <PricingCard
                    pricingData={planos.one}
                ></PricingCard>

                <PricingCard
                    pricingData={planos.two}
                ></PricingCard>

                <PricingCard
                    pricingData={planos.three}
                ></PricingCard>
            </div>
        </section>
    );
};

const BannerPrecosEmpresa = () => {
    return (
        <PricingCardContainer pricingDataAll={planos} />
    )
};

export default BannerPrecosEmpresa;

import social from "../../assets/icons/social.png"

const Footer = () => {
    return (
        <footer className="p-10 bg-base-200 text-base-content mt-5">
            <div className="footer max-w-6xl mx-auto">
                <aside>
                    <h2 className="text-3xl font-bold">CareerHub</h2>
                    <p className="mt-2">There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
                    <img className="mt-2" src={social} alt="" />

                </aside>
                <nav className="mt-2">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Work</a>
                    <a className="link link-hover">Latest News</a>
                    <a className="link link-hover">Careers</a>
                </nav>
                <nav className="mt-2">
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Prototype</a>
                    <a className="link link-hover">Plans & Pricing</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav className="mt-2">
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Help desk</a>
                    <a className="link link-hover">Sales</a>
                    <a className="link link-hover">Become a Partner</a>
                    <a className="link link-hover">Developers</a>
                </nav>
                <nav className="mt-2">
                    <h6 className="footer-title">Contact</h6>
                    <a className="link link-hover">524 Broadway , NYC</a>
                    <a className="link link-hover">+1 777 - 978 - 5570</a>
                </nav>
            </div>
            <br />
            <hr />
            <div className="justify-between flex max-w-6xl mx-auto mt-5">
                <p className="">@2023 CareerHub. All Rights Reserved</p>
                <p>Powered by CareerHub</p>
            </div>
        </footer>
    );
};

export default Footer;
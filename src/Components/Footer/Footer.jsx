import logoFooter from "../../assets/logo-footer.png";
import subBgImg from "../../assets/subcribe-bg.png";
import subBgImg2 from "../../assets/subsImg-2.png";
import footerTopBg1 from "../../assets/footer-bg-4.png";
import footerTopBg2 from "../../assets/footer-bg-3.png";
const Footer = () => {
  return (
    <footer className="sora-font xl:mt-72 relative flex flex-col items-center gap-10 bg-[#06091A] text-[#ffffff99] pt-10 xl:pt-40">
      <div className="border-2 border-white rounded-2xl p-4 w-2/3 absolute top-[-25%] hidden xl:block">
        <div
          style={{
            backgroundImage: `url(${footerTopBg1}), url(${footerTopBg2})`,
            backgroundPosition: "top left, top right",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundSize: "cover, contain",
            width: "100%", // Adjust width as necessary
          }}
          className="border-2 border-gray-100 shadow-sm bg-white text-black rounded-2xl flex flex-col justify-center items-center p-10"
        >
          <h3 className="xl:text-4xl font-bold">Subscribe to our Newsletter</h3>
          <p className="xl:text-xl my-4 text-gray-500">
            Get the latest updates and news right in your inbox!
          </p>
          <form>
            <fieldset className="w-80">
              <div className="flex items-center  gap-2">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="text-black input input-bordered  focus:outline-none focus:border-gray-300 w-96 rounded-lg p-4"
                />
                <button className="btn bg-gradient-to-r from-[#E494BA] to-[#F6CC58] px-6 rounded-lg">Subcribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <div>
        <img src={logoFooter} alt="" />
      </div>
      <div className="footer sm:footer-horizontal justify-evenly">
        <nav>
          <h6 className=" text-white text-xl mb-2">About Us</h6>
          <p className="leading-6">
            We are a passionate team <br /> dedicated to providing the best{" "}
            <br /> services to our customers.
          </p>
        </nav>
        <nav>
          <h6 className=" text-white text-xl mb-2">Quick Links</h6>
          <ul className="list-disc pl-8">
            <li>
              <a className="link link-hover">Home</a>
            </li>
            <li>
              <a className="link link-hover">Services</a>
            </li>
            <li>
              <a className="link link-hover">About</a>
            </li>
            <li>
              <a className="link link-hover">Contact</a>
            </li>
          </ul>
        </nav>
        <form>
          <h6 className=" text-white text-xl mb-2">Subcribe</h6>
          <p className="leading-6">
            Subscribe to our newsletter for the <br /> latest updates.
          </p>
          <fieldset className="w-80">
            <div className="join">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="text-black input input-bordered rounded-l-lg join-item focus:outline-none focus:border-gray-300"
              />
              <button className="btn bg-gradient-to-r from-[#F6CC58] to-[#E494BA] border-none rounded-r-lg join-item">Subcribe</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="border-t border-gray-600 text-center py-8 w-full">
        <small>@2025 Dream 11 All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

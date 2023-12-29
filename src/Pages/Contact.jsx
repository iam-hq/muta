import Container from "../Components/Container";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
  return (
    <>
      <div className="bg-blue-700 text-white text-center py-48">
        <div className="font-bold text-5xl">CONTACT INFORMATION</div>
        <div className="sm:text-xl mt-5">
          We welcome your inquiries and feedback. Please use the information
          below to get in touch with us. Follow us for latest news, events, and
          discussions.
        </div>
      </div>

      <Container transparent ypadding="mt-4 sm:mt-10">
        <div className="text-center font-black text-2xl text-blue-500 uppercase">
          Reach Us
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <Container className="text-center">
            <div className="font-bold text-xl">Address</div>
            <div>P.O. Box 497</div>
            <div>Blantyre, Malawi.</div>
          </Container>
          <Container className="text-center">
            <div className="font-bold text-xl">Call Us</div>
            <div>+265 (0) 881 881 165</div>
            <div>+265 (0) 881 881 165</div>
          </Container>
          <Container className="text-center">
            <div className="font-bold text-xl">Email Us</div>
            <div>mutamw@gmail.com</div>
            <div>&nbsp;</div>
          </Container>
        </div>
      </Container>

      <Container
        transparent
        ypadding="mb-6 sm:mb-10"
        className="my-0 gap-3 flex justify-center"
      >
        <SocialIcon url="https://facebook.com/" />
        <SocialIcon url="https://instagram.com/" />
        <SocialIcon url="https://youtube.com/" />
      </Container>

      <div className="text-center font-bold mb-24 text-2xl">
        "Strengthening unity and professionalism withing Ummah."
      </div>
    </>
  );
}

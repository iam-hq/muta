import Container from "../Components/Container";
import Img1 from "../Assets/img1.png";
import PrimaryButton from "../Components/PrimaryButton";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div
          className="absolute p-4 sm:p-6 px-6 sm:px-10 rounded-tr-lg rounded-br-3xl top-1/2 -translate-y-1/2"
          style={{
            background: "rgba(255,255,255,0.8)",
          }}
        >
          <div className="text-4xl font-bold">Past Events</div>
          <a href={"/#"} className="text-xl text-blue-500">
            View More
          </a>
        </div>

        <div className="absolute border-4 border-white rounded-full p-2 sm:p-5 top-1/2 -translate-y-1/2 right-2 sm:right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            className="fill-white"
          >
            <path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path>
            <path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path>
          </svg>
        </div>

        <div className="absolute bottom-5 sm:text-4xl text-white text-center font-light left-1/2 -translate-x-1/2">
          A visit to the parliament to visit Muslim Legislators
        </div>
        <img className="w-full h-[80vh] object-cover" src={Img1} alt="" />
      </div>
      <Container transparent={true} className="text-center text-lg sm:text-2xl">
        Assalamu Alaikum and welcome to the official website of the Muslim
        Teachers Association (MUTA). We are delighted to have you here as part
        of our ever-growing community of dedicated educators.
      </Container>

      <Container transparent={true} className="lg:flex items-stretch">
        <div class="flex-1 p-4">
          <div class="block bg-white overflow-hidden border border-gray-100 h-full rounded-md shadow">
            <div class="p-4">
              <h2 class="mt-2 mb-2 border-l-4 border-green-500 p-4 text-blue-700 text-2xl font-bold">
                Our Objective
              </h2>
              <p class="p-4 text-center text-lg">
                To provide a generation of Muslim teachers who will impart
                knowledge, skills, and values while instilling discipline,
                integrity, and hard work in the societies they emerge from, for
                the sustainable development of Malawi.
              </p>
            </div>
          </div>
        </div>
        <div class="flex-1 p-4">
          <div class="block bg-white overflow-hidden border border-gray-100 h-full rounded-md shadow">
            <div class="p-4">
              <h2 class="mt-2 mb-2 border-l-4 border-green-500 p-4 text-blue-700 text-2xl font-bold">
                Mission & Vision
              </h2>
              <p class="p-4 text-center text-lg">
                Creating a self-reliant Muslim teacher to promote teachin
                professional ethics in relation to Islamic doctrine in
                interpreting misconceptions and government policies to the
                communities, thereby contributing positively to the
                socio-economic status of the future Malawian generation.
              </p>
            </div>
          </div>
        </div>
        <div class="flex-1 p-4">
          <div class="block bg-white overflow-hidden border border-gray-100 h-full rounded-md shadow">
            <div class="p-4">
              <h2 class="mt-2 mb-2 border-l-4 border-green-500 p-4 text-blue-700 text-2xl font-bold">
                Brief History
              </h2>
              <p class="p-4 text-center text-lg">
                MUTA, established in 2005 and officially registered in 2021, is
                a non-profit organization commited to the holistic development
                of Muslim teachers in Malawi.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container className="flex justify-between">
        <div className="font-bold text-blue-700 text-2xl">
          MUTA's constitution
        </div>
        <PrimaryButton>Download</PrimaryButton>
      </Container>

      <Container transparent padding="">
        <div className="text-blue-700 font-bold text-3xl text-center">
          Upcoming Events
        </div>
        {[1, 2, 3].map((item, index) => (
          <Container
            key={index}
            ypadding="py-4"
            className="md:flex items-center gap-5 hover:bg-gray-100 hover:shadow-lg"
          >
            <div className="font-bold pb-3 md:pb-0 md:text-2xl">
              6th Nov, 2021
            </div>
            <img
              className="w-52 h-36 object-cover rounded-3xl"
              src={Img1}
              alt=""
            />
            <div className="text-2xl">NEC Meeting at Cape Maclear CDSS</div>
            <button className="ml-auto rounded-full px-6 py-3 border-2 border-blue-700 text-blue-700 font-bold hover:bg-blue-700 hover:text-white">
              Read More
            </button>
          </Container>
        ))}
      </Container>
    </>
  );
}

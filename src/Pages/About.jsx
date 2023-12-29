import Container from "../Components/Container";

export default function About() {
  return (
    <>
      <Container>
        <div className="font-bold text-3xl">ABOUT US</div>
        <div className="md:text-xl mt-5">
          Established in 2005 and officially registered in 2021, the Muslim
          Teacher Association (MUTA) is a non-profit organization committed to
          enhancing the professional and religious requirements of Muslim
          teachers. The association held its inaugural national executive
          committee (NEC) election on December 19, 2020, electing key figures,
          including a chariperson, vice-chair, secretary-general,
          treasurer-general, public secretary, and seven committee members.
          These dedicated individuals collectively strive to realize MUTA's
          vision of creating self-reliant Muslim teachers who promote
          professional ethics aligned with Islamic doctrine.
        </div>
      </Container>

      <Container transparent={true}>
        <div className="flex justify-between items-center gap-4">
          <div className="font-bold md:text-3xl">
            Strengthening Unity and Professionalism with the Ummah!
          </div>
          <div className="w-1/2">
            <img
              src={"/logo.jpg"}
              className="w-full object-cover rounded-xl"
              alt=""
            />
          </div>
        </div>
      </Container>

      <Container>
        <div className="text-3xl font-extrabold">Vision</div>
        <hr className="w-24 bg-green-600 h-2" />
        <div className="md:text-xl">
          Creating self-reliant Muslim teachers who play a pivotal role in
          promoting professional ethics aligned with Islamic doctrine.
        </div>
      </Container>
      <Container>
        <div className="text-3xl font-extrabold">Mission</div>
        <hr className="w-24 bg-green-600 h-2" />
        <div className="md:text-xl">
          To provide a generation of Muslim teachers who will impart knowledge,
          skills and values while instilling discipline, integrity and hard work
          in the societies they emerge from, for sustainable development of
          Malawi.
        </div>
      </Container>
    </>
  );
}

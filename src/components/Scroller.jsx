import PageTop from './PageTop'

const Scroller = () => {
  const data = [
    { logo: '/img/logo1.svg', des: 'Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country.' },
    { logo: '/img/logo2.svg', des: 'Creative Concepting, Design, Design Management, Project Management, and execution of work from concept to installation across the Country. Cross functional communication and management of third party partners.' },
    { logo: '/img/logo3.svg', des: 'Production and design along with install oversight and execution support for the SoHo store opening on Broadway St, New York. Also working on creative and production work for a new store opening in Glendale, California.' },
    { logo: '/img/logo4.svg', des: 'Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York, including activations in Women’s, Men’s and Kid’s zones. Thirty-five (35) additional smaller take-downs in Nordstrom stores across the US. Concept design for Holiday boot customization events in stores across winter 2022.' },
    { logo: '/img/logo5.svg', des: 'Creative, Design, and Production Partner for 2023 CES. Scope Included creation of Branding Identity, Assets, and Digital Content, Design, Production design, Production oversight and Installation of client activations for IBM, Delta, Instacart, and more.' },
    { logo: '/img/logo6.svg', des: 'Creative, Design, and Production Partner for 2022 NY Fashion Week Pop-Up space. In Partnership with B-Reel scope including creation of Final Design, Design Assets, 3D Renders, Production design, Production/Partner oversight and creation of a two (2) story pop-up for Afterpay’s clients such as Crocs, JD Sports, Container Store, & Revolve.' },
  ]
  return (
    <section className='h-screen w-full px-[6vw] flex items-center'>
      <div className="flex flex-col gap-y-12">
        <PageTop title='WHO WE WORK WITH' />
        <div className="overflow-x-auto scroll">
          <div className="scroll flex min-w-fit gap-x-8">
            {data.map((item, index) => (
              <div key={index} className="border-l border-gray-400 h-fit sm:w-[25vw] w-[80vw] px-4 flex flex-col gap-y-6">
                <img src={item.logo} alt={`Logo ${index + 1}`} className="w-32 h-auto mb-4 md:mb-0 md:mr-6" />
                <p className="font-regular font-extrabold sm:w-[72%] leading-none w-[90%] text-[14px]">{item.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Scroller
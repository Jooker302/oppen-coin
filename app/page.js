import Image from "next/image";
import twitter from '../public/xtwitter.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter,faTelegram } from '@fortawesome/free-brands-svg-icons';

export default function Home() {

  

  return (
    <>
      <div class="top-bar">
        <div class="logo">
          <img className="w-10 h-10 rounded-full" src="main.jpeg" />
        </div>
        <div class="navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#team">Team</a>
          
        </div>
      </div>


      <div id="intro"
        className="m-4 mb-0 text-5xl font-bold md:ml-10"
        class="about-heading">
        <p className="text-5xl md:ml-0 mt-10 md:mt-6 font-bold">Introduction</p>
      </div>
      <div class="about">
      <div class="about-image">
          <img
            className="md:h-64 md:w-64 md:ml-24 md:rounded"
            src="main.jpeg"
            alt="About Image"
          />
        </div>
        <div class="about-text">
          <p className="text-3xl md:mt-12 italic">
          <span className="font-bold italic">Oppenheimer Coin</span> is a revolutionary cryptocurrency inspired by the
          captivating and thought-provoking film <span className="font-bold">'Oppenheimer.'</span>
          </p>
        </div>
        
      </div>



      <div class="banner" id="home">
        <img src="cover.jpeg" className="md:mt-24" alt="Banner Image" />
        {/* <p className="mt-4">
          <span className="font-bold italic">Oppenheimer Coin</span> is a revolutionary cryptocurrency inspired by the
          captivating and thought-provoking film <span className="font-bold">'Oppenheimer.'</span>
        </p> */}
        <p className="mt-4">
        <span className="font-bold italic">Oppenheimer Coin</span> is listed on <span className="font-bold"> Arbitrum Chain </span>
        </p>
      </div>

      <div id="about"
        className="m-4 mb-0 text-5xl md:mt-24n font-bold md:ml-10"
        class="about-heading"
      >
        <p className="text-5xl md:ml-0 font-bold">About</p>
        
      </div>
      <div class="about">
        <div class="about-text">
          <p>
            This coin aims to reshape the financial landscape. With advanced
            blockchain technology and a vision for a secure and decentralized
            future, Oppenheimer Coin empowers users to transact with confidence
            and transparency. Embodying the spirit of innovation, Oppenheimer
            Coin seeks to unlock the potential of crypto enthusiasts and
            investors worldwide, fostering a new era of financial possibilities.
          </p>
        </div>
        <div class="about-image">
          <img
            className="md:h-52 md:w-52 md:ml-28 md:rounded"
            src="main.jpeg"
            alt="About Image"
          />
        </div>
      </div>

      <div id="team" className="flex flex-col justify-center md:p-10 ">
        <p className="text-5xl ml-6 md:ml-0 font-bold ">Partner</p>
        <div class="container flex flex-wrap justify-around">
          <div class="team-profile">
            <a href="https://dx.app">
            <img
              src="dxsale.png"
              class="team-img"
            />
            <h3>DxSale</h3>
            </a>
            {/* <p>Founder and CEO</p> */}
          </div>
          <div class="team-profile">
            <img
              src="https://th.bing.com/th/id/OIP.1wTTp6-XPR-g6PS8D8ZAqAHaDt?pid=ImgDet&rs=1"
              class="team-img"
            />
            <h3>BNB Chain</h3>
            {/* <p>Web Developer</p> */}
          </div>
          <div class="team-profile">
            <img
              src="https://th.bing.com/th/id/OIP.mleb5_jAlRxR3Yj8Zksc2gHaHa?pid=ImgDet&rs=1"
              class="team-img"
            />
            <h3>Chain Link</h3>
            {/* <p>Marketing Specialist</p> */}
          </div>
          <div class="team-profile">
            <img
              src="https://th.bing.com/th/id/R.95bf06d513ed7ae2ea7ee2457a8daf91?rik=IfsTHJ7lZxWswQ&pid=ImgRaw&r=0"
              class="team-img"
            />
            <h3>1inch</h3>
            {/* <p>UX Designer</p> */}
          </div>
          <div class="team-profile">
            <img
              src="data:image/jpeg;base64,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"
              class="team-img"
            />
            <h3>ARB</h3>
            {/* <p>UX Designer</p> */}
          </div>
          <div class="team-profile">
            <img
              src="data:image/jpeg;base64,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"
              class="team-img"
            />
            <h3>Coinbase</h3>
            {/* <p>UX Designer</p> */}
          </div>
        </div>
      </div>

      <div className="bg-[#333] flex justify-between p-4 font-semibold">
        <p className="text-white m-2">Listed On Arbitrum Chain</p>
        <div className="flex justify-between">
        <a className="m-2" href="https://twitter.com/Oppenheime_op?s=09"><FontAwesomeIcon icon={faXTwitter} size="lg" style={{ color: '#ffffff', width: '24px', height: '24px' }} /></a>
        <a className="m-2" href="https://t.me/oppenheimerSigma"><FontAwesomeIcon icon={faTelegram} size="lg" style={{ color: '#ffffff', width: '24px', height: '24px' }} /></a>

        </div>
      </div>
    </>
  );
}

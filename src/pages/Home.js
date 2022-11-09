import React, { useEffect } from 'react';
import logo from '../assets/logo.svg';
import LoginGoogleButton from '../components/LoginButton';
import { GoogleLogin } from 'react-google-login';
import { useAuth } from '../context/AuthProvider';
import { gapi } from 'gapi-script';
import FooterMenu from '../components/FooterMenu';

const Home = () => {
  const { onSuccess, onFailure } = useAuth();
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: 'email'
      });
    };
    gapi.load('client:auth2', initClient);
  });

  return (
    <div className="flex flex-col h-screen md:container md:mx-auto bg-dark text-white">
      <header className="flex-[0_0_auto]">
        <div className="flex py-4 justify-between items-center">
          <div className="tracking-tight">
            <img src={logo} alt="spaceport" />
          </div>
          <div className="flex ml-auto items-center">
            <GoogleLogin
              clientId={clientId}
              render={(renderProps) => <LoginGoogleButton disabled={renderProps.disabled} onClick={renderProps.onClick}/>}
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </div>
      </header>
      <main className="flex flex-col flex-[1_0_auto] items-center pt-[108px] pb-[60px]">
        <svg width="949" height="92" viewBox="0 0 949 92" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1041_10340)">
            <path d="M293.546 89.9913L249.313 2.00879H238.456L194.223 89.9913H219.155L213.123 77.5372H238.054L232.022 89.9913H256.954L250.922 77.5372H275.853L269.821 89.9913H293.546ZM243.684 65.083C235.239 65.083 228.001 58.2533 228.001 49.4149C228.001 40.9782 234.837 33.7468 243.684 33.7468C252.53 33.7468 259.366 40.5765 259.366 49.4149C259.366 58.2533 252.53 65.083 243.684 65.083Z" fill="white"/>
            <path d="M0 63.8777V60.6638H11.2593V63.8777C11.2593 73.9214 21.3123 81.5546 38.6034 81.5546C53.8839 81.5546 63.9369 75.1266 63.9369 65.083C63.9369 40.9782 2.41271 58.2533 2.41271 24.9083C2.01059 11.6507 11.6614 0 36.5928 0C61.5242 0 72.7835 11.6507 72.7835 27.3188V30.9345H61.5242V26.917C61.5242 17.2751 52.6775 10.4454 36.5928 10.4454C21.7144 10.4454 13.2699 16.4716 13.2699 24.5066C13.2699 45.3974 74.392 30.5328 74.7941 64.6812C74.7941 79.5459 62.7305 91.5983 37.7991 91.5983C13.2699 92 0 79.9476 0 63.8777Z" fill="#78DED4"/>
            <path d="M182.562 26.1135V33.3449C182.562 48.6113 172.509 57.8515 153.609 57.8515H122.646V90.7947H111.387V1.60693H153.207C172.509 1.60693 182.562 10.8471 182.562 26.1135ZM171.302 26.1135C171.302 16.8733 166.075 12.0523 154.413 12.0523H123.048V47.0043H154.413C166.075 47.0043 171.705 42.1833 171.705 32.9432V26.1135H171.302Z" fill="#78DED4"/>
            <path d="M318.88 61.4673V30.5328C318.88 11.6507 331.346 0 357.483 0C383.621 0 396.087 11.6507 396.087 30.5328V34.1485H384.425V31.738C384.425 17.6769 376.785 10.4454 357.885 10.4454C338.182 10.4454 330.541 18.0786 330.541 31.738V59.8603C330.541 73.9214 338.584 81.1528 357.885 81.1528C376.785 81.1528 384.425 73.5197 384.425 59.8603V57.8515H396.087V61.4673C396.087 80.3493 383.621 92 357.885 92C331.346 92 318.88 80.3493 318.88 61.4673Z" fill="#78DED4"/>
            <path d="M446.754 12.0523V41.3799H492.998V52.227H446.754V79.9475H498.627V90.393H435.495V1.60693H498.627V12.0523H446.754Z" fill="#78DED4"/>
            <path d="M620.469 26.1135V33.3449C620.469 48.6113 610.416 57.8515 591.516 57.8515H560.553V90.7947H549.294V1.60693H591.114C610.416 1.60693 620.469 10.8471 620.469 26.1135ZM609.21 26.1135C609.21 16.8733 603.982 12.0523 592.321 12.0523H560.955V47.0043H592.321C603.982 47.0043 609.612 42.1833 609.612 32.9432V26.1135H609.21Z" fill="#78DED4"/>
            <path d="M654.247 61.4673V30.9345C654.247 11.6507 666.713 0 693.253 0C719.792 0 731.856 11.6507 731.856 30.9345V61.4673C731.856 80.3493 719.39 92 693.253 92C666.713 92 654.247 80.7511 654.247 61.4673ZM720.597 60.262V32.5415C720.597 18.4804 712.956 10.8472 692.85 10.8472C672.745 10.8472 665.104 18.4804 665.104 32.5415V60.262C665.104 73.9214 672.745 81.5546 692.85 81.5546C712.956 81.5546 720.597 73.9214 720.597 60.262Z" fill="#78DED4"/>
            <path d="M814.29 53.4323H783.327V90.393H772.068V1.60693H813.888C832.788 1.60693 842.841 10.4454 842.841 25.7117V29.3275C842.841 40.9781 836.809 49.0131 825.55 52.227L842.841 90.393H831.179L814.29 53.4323ZM783.729 42.9869H815.095C826.756 42.9869 832.386 38.5676 832.386 29.3275V25.7117C832.386 16.8733 827.158 12.0523 815.497 12.0523H784.131V42.9869H783.729Z" fill="#78DED4"/>
            <path d="M949 12.0523H916.428V90.393H905.169V12.0523H872.195V1.60693H949V12.0523Z" fill="#78DED4"/>
          </g>
          <defs>
            <clipPath id="clip0_1041_10340">
              <rect width="949" height="92" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <p className="text-hero pt-[57px] pb-[157px]">Your Passport into the NEARVERSE</p>
        <GoogleLogin
          clientId={clientId}
          render={(renderProps) => <LoginGoogleButton disabled={renderProps.disabled} onClick={renderProps.onClick}/>}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        />
      </main>
      <footer className="flex flex-col flex-[0_0_auto] ">
        <div className="flex justify-between w-full pb-[60px]">
          <div className="flex flex-1">
            <img className="w-[243px] h-[23px]" src={logo} alt="spaceport" />
          </div>
          <div className="flex flex-1 justify-between">
            <FooterMenu />
            <div className="flex flex-col">
              <GoogleLogin
                clientId={clientId}
                render={(renderProps) => <LoginGoogleButton disabled={renderProps.disabled} onClick={renderProps.onClick}/>}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-auto justify-between items-center border-t border-primary py-[32px] px-[20px]">
          <div className="flex flex-1 justify-start"></div>
          <div className="flex flex-1 justify-center text-footer_sm">© Spaceport Labs {new Date().getFullYear()}</div>
          <div className="flex flex-1 justify-end items-center">
            <p className="text-footer_sm pr-[5px]">Follows us:</p>
            {[...new Array(4)].map((item, index) => (
              <div className="ml-[10px]" key={'social'+index}>
                <div className="w-[44px] h-[44px] rounded-[22px] bg-primary hover:bg-primaryLight cursor-pointer"></div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home;

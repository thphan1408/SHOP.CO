import { images } from '@/utils/images'
import { PATHS } from '@/utils/paths'
import { Facebook, Github, Instagram, Mail, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Input } from './ui/input'
import { Button } from './ui/button'

const SubscribeSection = () => {
  return (
    <div className="container">
      <div className=" bg-black dark:bg-slate-700 px-6 py-8 md:px-16 md:py-9 rounded-[20px]">
        <div className="flex justify-between items-center flex-col md:flex-row space-y-5">
          <h2 className="text-white text-wrap font-bold text-[32px] leading-[35px] md:text-[40px] md:leading-[45px] md:w-[551px] text-start">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>

          <div className="flex flex-wrap gap-[14px] md:w-[349px] w-full">
            <div className="w-full h-[48px] px-4 py-3 bg-white flex items-center rounded-[62px] ">
              <Mail className="accent-black/40" size={24} />
              <Input
                className="w-full focus-visible:ring-0 shadow-none border-0 text-base accent-black/40"
                placeholder="Enter your email address"
              />
            </div>
            <Button
              className="rounded-[62px] px-4 py-3 bg-white  focus:outline-none w-full h-[48px]"
              variant={'ghost'}
            >
              <span className="text-base font-medium text-black">
                Subscribe to Newsletter
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <>
      <SubscribeSection />
      <footer className="bg-[#F0F0F0] dark:bg-slate-900 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6">
            <div className="flex flex-col md:max-w-64">
              <Link to={PATHS.HOME}>
                <h1 className="font-bold text-2xl md:text-[32px]vhvvvvhhv">
                  SHOP.CO
                </h1>
              </Link>
              <p className="text-[14px] leading-[22px] mt-[25px] text-gray-600">
                We have clothes that suit your style and which you’re proud to
                wear. From women to men.
              </p>
              <div id="social-icon" className="flex space-x-4 mt-[35px]">
                {LinkSocialFooter.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 lg:col-span-2 lg:pl-8">
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">COMPANY</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:text-gray-500"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:text-gray-500"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:text-gray-500"
                    >
                      Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:text-gray-500"
                    >
                      Career
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">HELP</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:text-gray-500"
                    >
                      Customer Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:text-gray-500"
                    >
                      Delivery Details
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:text-gray-500"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:text-gray-500"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">FAQ</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:text-gray-500"
                    >
                      Account
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:text-gray-500"
                    >
                      Manage Deliveries
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:text-gray-500"
                    >
                      Orders
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:text-gray-500"
                    >
                      Payments
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">RESOURCES</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:text-gray-500"
                    >
                      Free eBooks
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:text-gray-500"
                    >
                      Development Tutorial
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:text-gray-500"
                    >
                      How to - Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:text-gray-500"
                    >
                      YouTube Playlist
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col lg:flex-row justify-between items-center border-t border-gray-300 pt-6">
            <p className="text-sm text-gray-600">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex flex-wrap justify-center space-x-4 mt-4 lg:mt-0">
              <img src={images.visa} alt="Visa" />
              <img src={images.mastercard} alt="Mastercard" />
              <img src={images.paypal} alt="PayPal" />
              <img src={images.applepay} alt="Apple Pay" />
              <img src={images.googlepay} alt="Google Pay" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

const LinkSocialFooter = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/',
    icon: <Twitter size={'24'} />,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: <Facebook size={'24'} />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: <Instagram size={'24'} />,
  },
  {
    name: 'Github',
    href: 'https://www.github.com/',
    icon: <Github size={'24'} />,
  },
] as const

export default Footer

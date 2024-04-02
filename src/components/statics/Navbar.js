import {  Routes, Route,Link} from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import Login from  "../authComponent/Login"
import Reg from "../authComponent/Reg";
import Home from "../home/Home"
/*
import Cart from "../shopComponent/Cart"
import Addproduct from "../shopComponent/addproduct"
import Men from "../shopComponent/men"
import Women from "../shopComponent/women"
import Payment from "../paystackComponent/Payment"
import PayInput from "../paystackComponent/payInput"
import SuccessPage from "../paystackComponent/success"
*/
import Products from "../shopComponent/products"
import ProductPreview from "../shopComponent/productPreview"
import Addproduct from "../shopComponent/addproduct"



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Dashboard', current: true },
  { name: 'Ecommence', current: false },
  { name: 'Virtual Top Up', current: false },
  { name: 'Wall Transaction',  current: false },
]


const  Navbar = () => {
  return (
    <div>
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex  items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className=" mt-10 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className=""
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                  <ul className=" flex justify-start font-medium text-white mt-0 space-x-3 rtl:space-x-reverse text-sm">
            <li className=" ">
                      <Link to={"/"} className="">
                        
                      </Link>
                    </li>
                    <li className=" ">
                      <Link to={"/"} className="">
                      Home
                      </Link>
                    </li>
                    <li className=" ">
                      <Link to={"/dashboard"} className="">
                      Dashboard
                      </Link>
                    </li>
                  <li className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="">Virtual Top Up</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] bg-neutral menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to={"/airtime"}> Airtime</Link></li>
                    <li><Link to={"/date"}> Data </Link></li>
                    <li><Link to={"/multi-choice"}> Multi-choice </Link></li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="">Ecommence</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] bg-neutral menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to={"/products"}> Products</Link></li>
                    <li><Link to={"/cart"}> Cart </Link></li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="">Wall Transfer</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] bg-neutral menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to={"/deposit"}> Fund Deposit</Link></li>
                    <li><Link to={"/Wallet-transfer"}> Wallet To Wallet Transfer </Link></li>
                    </ul>
                  </li>
                    <li className=" ">
                      <Link to={"/login"} className="">
                      Login
                      </Link>
                    </li>
                    
            </ul>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
               
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
           

    </Disclosure>
    <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/reg" element={<Reg/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/addproduct" element={<Addproduct/>}/> //
            <Route path="/preview-item/:id" element={<ProductPreview/>} />  

          </Routes>

    </div>
  )
}

export default Navbar

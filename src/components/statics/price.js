
import React from 'react';
import { Link} from 'react-router-dom'

import { CheckIcon } from '@heroicons/react/24/solid';

const Pricing = () => {
  return (
    <div name='pricing' className=' text-white '>
      <div className=' bg-slate-900 absolute mix-blend-overlay'></div>

      <div className=' py-2 '>

        <div className='text-center py-4 text-slate-400'>
          <h3 className='text-3xl uppercase'>Pricing</h3>
          <h3 className='text-3xl font-bold text-white py-2'>The right price for your research.</h3>
          <p className='text-2xl'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            laudantium odio ullam inventore aliquid ipsum quasi tenetur velit
            voluptatum iste.
          </p>
        </div>

        <div className='grid md:grid-cols-2'>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-6xl font-bold py-2 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-4 text-slate-500'>API Subcription for SME.</p>
            <div className='text-2xl'>
                <p className='flex py-2'><CheckIcon className='w-4 mr-2 text-green-600'  /> Data 2%.</p>
                <p className='flex py-2'><CheckIcon className='w-4 mr-2 text-green-600'  /> Airtime 2%.</p>
                <p className='flex py-2'><CheckIcon className='w-4 mr-2 text-green-600'  />Cable subscription 2%.</p>
                <p className='flex py-2'><CheckIcon className='w-4 mr-2 text-green-600'  />Products Sales 2%.</p>
                <p className='flex py-2'><CheckIcon className='w-4 mr-2 text-green-600'  />Investment 3%.</p>
                <button className='w-full py-2 my-4 btn' > <Link to={"/reg"}> Get Started </Link> </button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
            <div>
              <p className='text-6xl font-bold py-2 flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-4 text-slate-500'>API subscriotion for Enterprise.</p>
            <div className='text-2xl'>
                <p className='flex py-2'><CheckIcon className='w-4 mr-2 text-green-600'  />Data 4%.</p>
                <p className='flex py-2'><CheckIcon className='w-4 mr-2 text-green-600'  />Airtime 4%.</p>
                <p className='flex py-2'><CheckIcon className='w-4 mr-2 text-green-600'  />Cable subscription 4%.</p>
                <p className='flex py-2'><CheckIcon className='w-4 mr-2 text-green-600'  /> Products Sales 4%.</p>
                <p className='flex py-2'><CheckIcon className='w-4 mr-2 text-green-600'  />Investment 5%.</p>
                <button className='w-full py-4 my-4 btn'> <Link to={"/reg"}  >  Get Started</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

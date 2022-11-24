import React from 'react'

const News = () => {
  return (
    <div className='news mt-3 flex flex-row mx-10 gap-4'>
        <div className="news basis-1/3 bg-blue-600 text-white flex flex-col rounded px-7 py-5 place-items-center ">
            <h3 className='text-3xl font-black my-4'>LATEST NEWS</h3>
            <ul>
                <li className='flex flex-col'>
                    <a href="/"><h4 className='text-center font-bold text-base'>SAS OPENS NEW ROUTE TO JFK AIRPORT IN NEW YORK</h4></a>
                    <span className='text-center text-sm font-normal'>November 24, 2022 11:30 CET</span>
                </li>
            </ul>
            <button className="bg-blue-400 text-white px-4 py-2 m-3 font-black text-sm	rounded">SEE ALL NEWS</button>
        </div>
        <div className="news basis-1/3 text-blue-600 flex flex-col rounded px-7 py-5 place-items-center border border-blue-600">
            <h3 className='text-3xl font-black my-4'>SAS EVENTS</h3>
            <ul>
                <li className='flex flex-col'>
                    <a href="/"><h4 className='text-center font-bold text-base'>SAS OPENS NEW ROUTE TO JFK AIRPORT IN NEW YORK</h4></a>
                    <span className='text-center text-sm font-normal'>November 24, 2022 11:30 CET</span>
                </li>
            </ul>
            <button className="bg-blue-400 text-white px-4 py-2 m-3 font-black text-sm	rounded">SEE ALL NEWS</button>
        </div>
        <div className="news basis-1/3 bg-blue-600 text-white flex flex-col rounded px-7 py-5 place-items-center ">
            <h3 className='text-3xl font-black my-4 text-center'>INTERIM REPORT Q3 2022</h3>
            <ul>
                <li className='flex flex-col'>
                    <a href="/"><h4 className='text-center font-bold text-base'>SAS OPENS NEW ROUTE TO JFK AIRPORT IN NEW YORK</h4></a>
                    <span className='text-center text-sm font-normal'>November 24, 2022 11:30 CET</span>
                </li>
            </ul>
            <button className="bg-blue-400 text-white px-4 py-2 m-3 font-black text-sm	rounded">SEE ALL NEWS</button>
        </div>
    </div>
  )
}

export default News
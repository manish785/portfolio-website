import { Link } from 'react-router-dom';

const Skill = () => {
    return(
        <>
        <div className="h-[560px] w-full bg-white-700 mt-[-60px]">
            <div className="h-[500px] w-[1000px] justify-between ml-[200px] mt-[60px] ">
                <h1 className='font-bold text-blue-800 text-4xl'>Front End</h1>
                <div className='flex flex-wrap ml-[-26px]'>
                <div className='h-[230px] w-[220px] bg-white-900 border-2 mr-[35px] border-white rounded-md mt-[20px]'>
                    <img src='https://img.icons8.com/color/480/000000/html-5--v1.png'
                    alt=''
                    className='h-[200px] w-[280px] p-[-2px]'
                    />
                    <p className='ml-[50px] pb-[-20px] font-bold text-3xl text-blue-700'>HTML</p>
                </div>
                <div className='h-[230px] w-[220px] bg-white-900 border-2 mr-[35px] border-white rounded-md mt-[20px]'>
                    <img src='https://img.icons8.com/color/480/000000/css3.png'
                    alt=''
                    className='h-[200px] w-[280px] p-[-2px]'
                    />
                    <p className='ml-[50px] pb-[-20px] font-bold text-3xl text-blue-700'>CSS</p>
                </div>
                <div className='h-[230px] w-[220px] bg-white-900 border-2 mr-[35px] border-white rounded-md mt-[20px]'>
                    <img src='https://img.icons8.com/color/480/000000/javascript.png'
                    alt=''
                    className='h-[200px] w-[280px] p-[-2px]'
                    />
                    <p className='ml-[50px] pb-[-20px] font-bold text-3xl text-blue-700'>JavaScript</p>
                </div>
                <div className='h-[230px] w-[220px] bg-white-900  mr-[35px] border-2 border-white rounded-md mt-[20px]'>
                    <img src='https://img.icons8.com/color/480/000000/react-native.png'
                    alt=''
                    className='h-[200px] w-[280px] p-[-2px]'
                    />
                    <p className='ml-[50px] pb-[-20px] font-bold text-3xl text-blue-700'>React</p>
                </div>
                <div className='h-[230px] w-[220px] bg-white-900 border-2 mr-[35px] border-white rounded-md mt-[20px]'>
                    <img src='https://img.icons8.com/color/480/000000/redux.png'
                    alt=''
                    className='h-[200px] w-[280px] p-[-2px]'
                    />
                   <p className='ml-[50px] pb-[-20px] font-bold text-3xl text-blue-700'>Redux</p>
                </div>
                <div className='h-[230px] w-[220px] bg-white-900 border-2 mr-[35px] border-white rounded-md mt-[20px]'>
                    <img src='https://i.ibb.co/zx0Tt9M/bootstrap.png'
                    alt=''
                    className='h-[200px] w-[280px] p-[-2px]'
                    />
                    <p className='ml-[50px] pb-[-20px] font-bold text-3xl text-blue-700'>Bootstrap</p>
                </div>     
                <div className='h-[230px] w-[220px] bg-white-900 border-2 mr-[35px] border-white rounded-md mt-[20px]'>
                    <img src='https://img.icons8.com/color/480/000000/npm.png'
                    alt=''
                    className='h-[200px] w-[280px] p-[-2px]'
                    />
                    <p className='ml-[50px] pb-[-20px] font-bold text-3xl text-blue-700'>NPM</p>
                </div>   
                <div className='h-[230px] w-[220px] bg-white-900 border-2 mr-[35px] border-white rounded-md mt-[20px]'>
                    <img src='https://img.icons8.com/fluent/480/000000/github.png'
                    alt=''
                    className='h-[200px] w-[280px] p-[-2px]'
                    />
                    <p className='ml-[50px] pb-[-20px] font-bold text-3xl text-blue-700'>Github</p>
                </div>      
                </div>
            </div>
        </div>
        <div className="h-[340px] w-full bg-white-700 mt-[-40px]">
            <div className="h-[340px] w-[1000px] justify-between ml-[200px] mt-[60px] ">
                <h1 className='font-bold text-blue-800 text-4xl'>Back End</h1>
                <div className='flex flex-wrap ml-[-26px]'>
                <div className='h-[230px] w-[220px] bg-white-900 border-2 mr-[35px] border-white rounded-md mt-[20px]'>
                    <img src='https://img.icons8.com/color/480/000000/nodejs.png'
                    alt=''
                    className='h-[200px] w-[280px] p-[-2px]'
                    />
                    <p className='ml-[50px] pb-[-20px] font-bold text-3xl text-blue-700'>Node JS</p>
                </div>             
                <div className='h-[230px] w-[220px] bg-white-900 border-2 mr-[35px] border-white rounded-md mt-[20px]'>
                    <img src='https://i.ibb.co/9smDM6j/pngegg.png'
                    alt=''
                    className='h-[200px] w-[280px] p-[-2px]'
                    />
                    <p className='ml-[50px] pb-[-20px] font-bold text-3xl text-blue-700'>Express JS</p>
                </div>     
                <div className='h-[230px] w-[220px] bg-white-900 border-2 mr-[35px] border-white rounded-md mt-[20px]'>
                    <img src='https://i.ibb.co/ZVh01dm/rsz-mong2.png'
                    alt=''
                    className='h-[200px] w-[280px] p-[-2px]'
                    />
                    <p className='ml-[50px] pb-[-20px] font-bold text-3xl text-blue-700'>Mongo DB</p>
                </div>    
                </div>
            </div>
        </div>
        </>
      
        
    )
};


export default Skill;
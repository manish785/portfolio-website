import { Link } from 'react-router-dom';
import bigbasket from '../images/bigbasket-clone.jpeg'
import twiggy from '../images/twiggy.jpeg';
import codeial from '../images/codeial.jpeg';
import netflix from '../images/netflix.jpeg';

const Project = () => {
    return(
        <div className="h-[1200px] w-full bg-white-700 mt-[-60px]">
            <div className="h-[1200px] w-full justify-between ml-[200px] mt-[60px] ">
                <div className='flex justify-between mr-[270px] pb-[60px]'>
                        <div className='h-[240px] w-[500px]'>
                        <img 
                          src={twiggy}
                          className='h-[240px] w-[500px] rounded-md'
                          alt=''
                        />
                        </div>
                        <div className='h-[240px] w-[500px] mt-[20px]'>
                            <h1 className='font-bold text-blue-700 text-3xl'>Twiggy App</h1>
                            <p className='pt-[6px]'>Developed a Food Ordering App with multiple Components: Home, Header, Contact, 
                              Grocery, Cart, Login, and Online Status (Custom Hooks).Implemented Shimmer UI and features like search functionality 
                              and top-rated restaurants.Added functionalities such as add Cart, clear Cart,and accordion.
                            </p>
                            <div className='pt-[6px]'>
                                <Link className='font-normal text-blue-700 text-xl' to='https://twiggy-app.netlify.app/'>See This Live</Link>
                                <Link className='font-normal text-blue-700 text-xl ml-[40px]' to='https://github.com/manish785/twiggy'>Source Code</Link>
                            </div>
                           <div className='pt-[6px]'>
                               <button className='h-[30px] w-[45px] bg-blue-500 text-white rounded-md m-2 ml-[-2px]'>react</button>
                               <button className='h-[30px] w-[75px] bg-blue-500 text-white rounded-md m-2'>javascript</button>
                               <button className='h-[30px] w-[45px] bg-blue-500 text-white rounded-md m-2'>html</button>
                               <button className='h-[30px] w-[50px] bg-blue-500 text-white rounded-md m-2'>redux</button>
                               <button className='h-[30px] w-[70px] bg-blue-500 text-white rounded-md m-2'>tailwind</button>
                           </div>
                        </div>
                </div>
                <div className='flex justify-between mr-[270px] pb-[60px]'>
                        <div className='h-[240px] w-[500px]'>
                        <img 
                          src={bigbasket}
                          className='h-[240px] w-[500px] rounded-md'
                          alt=''
                        />
                        </div>
                        <div className='h-[240px] w-[500px] mt-[20px]'>
                            <h1 className='font-bold text-blue-700 text-3xl'>BigBasket Clone</h1>
                            <p className='pt-[6px]'>Developed a clone of BigBasket.com, an e-commerce platform for groceries, 
                            utilizing React, Redux, and Tailwind CSS.Implemented home page, product page, footer, third party 
                            login and logout using useAuth0 hooks and added carousels.
                            </p>
                            <div className='pt-[6px]'>
                                <Link className='font-normal text-blue-700 text-xl' to='https://bigbasket-apnibazzar.netlify.app/'>See This Live</Link>
                                <Link className='font-normal text-blue-700 text-xl ml-[40px]' to='https://github.com/manish785/BigBasket-Clone'>Source Code</Link>
                            </div>
                           <div className='pt-[6px]'>
                               <button className='h-[30px] w-[45px] bg-blue-500 text-white rounded-md m-2 ml-[-2px]'>react</button>
                               <button className='h-[30px] w-[75px] bg-blue-500 text-white rounded-md m-2'>javascript</button>
                               <button className='h-[30px] w-[45px] bg-blue-500 text-white rounded-md m-2'>html</button>
                               <button className='h-[30px] w-[50px] bg-blue-500 text-white rounded-md m-2'>redux</button>
                               <button className='h-[30px] w-[70px] bg-blue-500 text-white rounded-md m-2'>tailwind</button>
                           </div>
                        </div>
                </div>
                <div className='flex justify-between mr-[270px] pb-[60px]'>
                        <div className='h-[240px] w-[500px]'>
                        <img 
                          src={netflix}
                          className='h-[240px] w-[500px] rounded-md'
                          alt=''
                        />
                        </div>
                        <div className='h-[240px] w-[500px] mt-[20px]'>
                            <h1 className='font-bold text-blue-700 text-3xl'>Netflix-GPT</h1>
                            <p className='pt-[6px]'>Implemented Sign Up, Login and Logout Feature.Can redirect to the 
                            Browse Page after authentications only.
                            Browse page contains Header and Main Movie Section.Main Movie Section contains 
                            Tailer in Background, Title Description and MovieSuggestions(MovieLists * N )
                            </p>
                            <div className='pt-[6px]'>
                                <Link className='font-normal text-blue-700 text-xl' to='https://netflix-primey.netlify.app/'>See This Live</Link>
                                <Link className='font-normal text-blue-700 text-xl ml-[40px]' to='https://github.com/manish785/netflix-gpt'>Source Code</Link>
                            </div>
                           <div className='pt-[6px]'>
                               <button className='h-[30px] w-[45px] bg-blue-500 text-white rounded-md m-2 ml-[-2px]'>react</button>
                               <button className='h-[30px] w-[75px] bg-blue-500 text-white rounded-md m-2'>javascript</button>
                               <button className='h-[30px] w-[45px] bg-blue-500 text-white rounded-md m-2'>html</button>
                               <button className='h-[30px] w-[50px] bg-blue-500 text-white rounded-md m-2'>redux</button>
                               <button className='h-[30px] w-[70px] bg-blue-500 text-white rounded-md m-2'>tailwind</button>
                           </div>
                        </div>
                </div>
                <div className='flex justify-between mr-[270px] pb-[60px]'>
                    <div className='h-[240px] w-[500px]'>
                    <img 
                        src={codeial}
                        className='h-[240px] w-[500px] rounded-md'
                        alt=''
                    />
                    </div>
                    <div className='h-[240px] w-[500px] mt-[20px]'>
                        <h1 className='font-bold text-blue-700 text-3xl'>Codeial React App</h1>
                        <p className='pt-[6px]'>Implemented features including register, login, logout, userProfile, updateUserProfile, 
                        createPost, createComment, and searchUser.Enabled liking and unliking posts, adding and removing friends.
                        </p>
                        <div className='pt-[6px]'>
                            <Link className='font-normal text-blue-700 text-xl' to='https://codeial-react-app.netlify.app/'>See This Live</Link>
                            <Link className='font-normal text-blue-700 text-xl ml-[40px]' to='https://github.com/manish785/codeial_react_app'>Source Code</Link>
                        </div>
                        <div className='pt-[6px]'>
                            <button className='h-[30px] w-[45px] bg-blue-500 text-white rounded-md m-2 ml-[-2px]'>react</button>
                            <button className='h-[30px] w-[75px] bg-blue-500 text-white rounded-md m-2'>javascript</button>
                            <button className='h-[30px] w-[45px] bg-blue-500 text-white rounded-md m-2'>html</button>
                            <button className='h-[30px] w-[50px] bg-blue-500 text-white rounded-md m-2'>redux</button>
                            <button className='h-[30px] w-[70px] bg-blue-500 text-white rounded-md m-2'>tailwind</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Project;
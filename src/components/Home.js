import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className="h-[560px] w-full bg-white-700">
            <div className="h-[500px] w-[1000px] justify-between ml-[200px] mt-[60px] flex">
                <div className=''>
                  <h1 className="font-bold text-2xl text-blue-700">Hello !</h1>
                  <p className="font-bold text-5xl text-blue-900">I'm Manish</p>
                  <p className="font-thin text-5xl text-blue-900">I'm a full stack developer</p>
                  <p className="font-normal text-5xl text-blue-900 pt-[10px]">I'm from Bihar</p>
                  <p className="text-blue-400 text-xl pt-[10px]">A passionate and enthusiastic web developer who loves coding 
                  and always ready to learn something new.</p>
                <div className='flex mt-[10px]'>
                      <Link to='https://www.linkedin.com/in/manish-kumar-982b4416b/'>
                       <img 
                       className='h-[30px] w-[30px] m-4'
                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd86gwvzqcEsuxtHoUgrEDjhYXVR01K8nunDmuvl7HA&s"
                       alt='link-icon'
                       />
                      </Link>
                      <Link to='https://github.com/manish785/'>
                       <img 
                       className='h-[30px] w-[30px] m-4'
                       src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                       alt='github-icon'
                       />
                      </Link>
                      <Link>
                       <img 
                       className='h-[60px] w-[60px] m-0'
                       src="https://t4.ftcdn.net/jpg/05/25/22/63/360_F_525226337_x7lLRcnU08vDLkijRwgcbaIs8zCfDktC.jpg"
                       alt='email-icon'
                       />
                      </Link>
                      <Link>
                       <img 
                       className='h-[60px] w-[60px] m-0'
                       src="https://www.shutterstock.com/image-vector/basic-logo-form-vintage-telephone-600nw-1166674198.jpg"
                       alt='link-icon'
                       />
                      </Link>
                </div>
                </div>
                <div className=''>
                <img 
                   src='https://avatars.githubusercontent.com/u/79442418?v=4'
                   className='h-[420px] w-[500px] ml-[120px] rounded-lg mt-[-10px]'
                   alt='profile-img'
                  />
                </div> 
            </div>
        </div>
    )
};


export default Home;
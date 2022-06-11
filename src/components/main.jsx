import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main=()=>{
    const navigate=useNavigate();

    return (
        <>
            <div className='main-content'>
                <span className="main-sub-ttl">우리 회사가 원하는 인재상은?</span>
                <h2 className='main-ttl'>인재상 테스트</h2>
                <div className="main-img">
                <img src="./images/working.png" alt="main img" />
                </div>
                <button className='btn-start' onClick={()=>{
                    navigate('/qna');
                }}>테스트 시작</button>
            </div>
        </>
    );
}

export default Main;
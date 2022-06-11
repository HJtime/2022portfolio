import React from 'react';
import { useNavigate } from 'react-router-dom';

const Result = () => {
    const navigate=useNavigate();

    return (
        <div className='content'>
            <h3 className='result-tit'>당신이 원하는 인재상은</h3>
            <img src="./images/profile.jpg" alt="profile img" />
            <strong className='myname'>김현진</strong>
            <a className='btn-down' href="https://hjtime.github.io/2022portfolio/file/kimhyeonjin.pdf">이력서 보기</a>
            
            <span className='pro-tit'>Project</span>
            
            <ul className='project-list'>
                <li className="project">
                    <div className="project-description">
                        <img src="./images/project.jpg" alt="project image" className="project-img"/>
                        <div className="project-button">
                            <a href="https://hjtime.github.io/timeline-test/" target="blank">
                                <i className="fa-solid fa-eye"></i>
                            </a>
                            <a href="https://github.com/HJtime/timeline-test" target="blank">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div className="project-text">
                        <h3>탐캐 테스트</h3>
                        <span>리액트 라우터, 반응형, 기여도 100%</span>
                        <span className="project-skill">REACT, HTML, CSS</span>
                    </div>
                </li>
                <li className="project">
                    <div className="project-description">
                        <img src="./images/project3.jpg" alt="project image" className="project-img"/>
                        <div className="project-button">
                            <a href="https://hjtime.github.io/youtube-clone/" target="blank">
                                <i className="fa-solid fa-eye"></i>
                            </a>
                            <a href="https://github.com/HJtime/youtube-clone" target="blank">
                                <i className="fa-brands fa-github"></i>
                            </a>
                    </div>
                    </div>
                    <div className="project-text">
                        <h3>유튜브 클론 코딩</h3>
                        <span>리액트 라우터, 유튜브 API 사용, 검색 가능, 디테일 페이지, 반응형</span>
                        <span className="project-skill">REACT, postCSS</span>
                    </div>
                </li>
                <li className="project">
                    <div className="project-description">
                        <img src="./images/project2.jpg" alt="project image" className="project-img"/>
                        <div className="project-button">
                            <a href="https://hjtime.github.io/TODOLIST/" target="blank">
                                <i className="fa-solid fa-eye"></i>
                            </a>
                            <a href="https://github.com/HJtime/TODOLIST" target="blank">
                                <i className="fa-brands fa-github"></i>
                            </a>
                    </div>
                    </div>
                    <div className="project-text">
                        <h3>투두리스트</h3>
                        <span>리스트 삭제와 체크가 가능한 투두리스트</span>
                        <span className="project-skill">REACT, HTML, CSS</span>
                    </div>
                </li>
            </ul>

            <button className='btn-start' onClick={()=>{
                navigate('/qna');
            }}>다시하기<i className="fas fa-redo-alt"></i></button>
        </div>
    );
};

export default Result;
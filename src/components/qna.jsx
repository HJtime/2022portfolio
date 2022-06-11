import React, { useState } from 'react';
import Question from './question';
import Answer from './answer';
import data from "../db/qna.json"
import { useNavigate } from 'react-router-dom';

const Qna = () => {
    const [page, setPage]=useState(1);
    const [result, setResult]=useState({});
    const navigate=useNavigate();

    // json 파일에서 현재 page와 같은 요소들로 배열을 만듦
    const qList=data.question.filter(question=>(
        question.page===page
    ))

    const answerList=data.answer.filter(answer=>(
        answer.page===page
    ))

    // 진행바
    const progress=()=>{
        const progressbar=document.querySelector('.progressbar .bar');
        const width=progressbar.dataset.progress;

        progressbar.style.width=(width*25)+'%';
    }

    // 답변이 클릭되면 결과(result)에 선택된 답변을 추가함
    const handleAnswerChange=(selected)=>{
        progress();
        setPage(page + 1);
        // 현재 페이지 수가 문항 개수와 일치하면 result 페이지로 넘겨주는 함수를 호출
        page === 4 && changePage();
    }

    const changePage=()=>{
        navigate('/result');
    }

    return (
        <div className='content'>
            <div className='progressbar'><div className='bar' data-progress={page}></div></div>
            {
                qList.map((question)=>(
                    <Question key={question.id} question={question.question}/>
                ))
            }
            <ul className='qna-list'>
                {
                    answerList.map((answer)=>(
                        <Answer
                            key={answer.id}
                            answer={answer.answer}
                            onAnswerChange={handleAnswerChange}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default Qna;